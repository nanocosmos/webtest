import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import * as link from '../../utilities/link-config';
import Content from './components/Content';
import Header from './components/Header';
import NotFound from '../../layout/ui/NotFound/NotFound';
import Loading from '../../layout/ui/NanoLoading';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 'calc(100vh - 200px)',
    },
    notFound: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    articleFound: {
        backgroundColor: theme.palette.common.white
    }
}))

export default function Article() {
    const classes = useStyles();
    const [article, setArticle] = useState([])
    const [searchParam] = useState('q');
    const [loading, setLoading] = useState(true);
    const [foundArticle, setFoundArticle] = useState(false)
    const [fetchedArticle, setFetchedArticle] = useState(false)

    const root = clsx(classes.root, {
        [classes.notFound]: !foundArticle,
        [classes.articleFound]: foundArticle
    })

    const fetchArticle = (articleId) => {
        axios.get(`${link.STRAPI_BASE}/articles/${articleId}`)
            .then((response) => {
                setFoundArticle(true);
                setFetchedArticle(true);
                setArticle(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error)
                setFoundArticle(false);
                setLoading(false);
            })
    }

    useEffect(() => {
        let params = new URLSearchParams(window.location.search)
        if (params.has(searchParam)) {
            setLoading(true);
            fetchArticle(params.get(searchParam))
        }
        if (!params.has(searchParam)) {
            setLoading(false);
            setFoundArticle(false); 
        }
    }, [])

    return (
        <div className={root}>
            {
                loading
                    ? <Loading />
                    :
                    <React.Fragment>
                        {
                            foundArticle && fetchedArticle
                                ?
                                <div className={classes.foundArticle}>
                                    <Header image={`${link.STRAPI_URL}${article.icon.url}`} title={article.title} author={article.author} time={article.created_at} tags={article.categories} />
                                    <Content article={article} />
                                </div>
                                : <NotFound />
                        }
                    </React.Fragment>
            }
        </div>
    );
}

