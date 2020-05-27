import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { fade, makeStyles } from '@material-ui/core/styles';
import ArticleSkeleton from './Skeleton';
import { Toolbar, AppBar, InputBase, Button, Typography } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import * as link from '../../../utilities/link-config';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.primary.light,
    },
    searchBar: {
        backgroundColor: theme.palette.primary.light,
        [theme.breakpoints.up('xs')]: {
            padding: theme.spacing(0, 4),
            top: 54,
            marginBottom: theme.spacing(2)
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(0, 2)
        },
        [theme.breakpoints.up('md')]: {
            top: 64,
        },
    },
    toolbar: {
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '50%',
        [theme.breakpoints.up('sm')]: {
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        color: theme.palette.common.white,
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: theme.palette.common.white
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
    skeletonWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: '0 auto',
        minHeight: '40vh',
        padding: theme.spacing(4),
        [theme.breakpoints.up('sm')]: {
            paddingTop: 0
        }
    },
    pagination: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        maxWidth: '100%',
        padding: theme.spacing(1, 0)
    },
    searchResults: {
        padding: theme.spacing(2, 4),
        color: theme.palette.common.white
    },
    bold: {
        fontWeight: 900
    }
}))

export default function AllArticles() {
    const classes = useStyles();
    const [articles, setArticles] = useState([])
    const [count, setCount] = useState(0)
    const [search, setSearched] = useState(false)
    const [numberOfResults, setNumberOfResults] = useState(count)
    const [loading, setLoading] = useState(true)
    const [amountShown, setAmountShown] = useState(12)
    const [limit, setLimit] = useState({
        start: 0,
        limit: amountShown
    })

    const searchForTag = (tag) => {

    }

    const searchInAllArticles = (chars) => {
        axios.get(`${link.STRAPI_BASE}/articles?_sort=created_at:DESC&title_contains=${chars}&_start=${limit.start}&_limit=${limit.limit}`)
            .then((response) => {
                console.log(response.data)
                setArticles(response.data);
                setSearched(true);
                countFoundSearchResults(chars);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const countFoundSearchResults = (chars) => {
        axios.get(`${link.STRAPI_BASE}/articles/count?title_contains=${chars}`)
            .then((response) => {
                console.log(response.data)
                let count = (response.data) / amountShown;
                setNumberOfResults(response.data);
                setCount(count);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const fetchAllArticles = () => {
        axios.get(`${link.STRAPI_BASE}/articles?_sort=created_at:DESC&_start=${limit.start}&_limit=${limit.limit}`)
            .then((response) => {
                console.log(response.data)
                setSearched(false);
                setArticles(response.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const countAllArticles = () => {
        axios.get(`${link.STRAPI_BASE}/articles/count`)
            .then((response) => {
                let count = (response.data) / amountShown;
                setNumberOfResults(response.data);
                setCount(count);
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const pageChanged = (event, value) => {
        let updatedArticles = (value - 1) * amountShown
        setLimit({
            start: updatedArticles,
            limit: updatedArticles + amountShown
        })
    }

    const handleInputChanged = (event) => {
        console.log(event.target.value)
        console.log(event.target.value)
        let input = event.target.value
        if (input === "") { fetchAllArticles(); }
        else {
            searchInAllArticles(event.target.value)
        }
    }

    useEffect(() => {
        fetchAllArticles();
    }, [limit])

    useEffect(() => {
        if (loading && articles.length > 0) {
            setLoading(false);
        }
    }, [articles])

    useEffect(() => {
        fetchAllArticles();
        countAllArticles();
    }, [])

    return (
        <div className={classes.root}>
            <AppBar className={classes.searchBar} elevation={0} position="sticky">
                <Toolbar className={classes.toolbar}>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <Search />
                        </div>
                        <InputBase
                            onChange={handleInputChanged}
                            placeholder="Search for a product, release, article..."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <div className={classes.searchResults}>
                        {
                            search
                                ?
                                <Typography variant="subtitle1">
                                    Found <span className={classes.bold}>{numberOfResults}</span> { numberOfResults === 1 ? "result" : "results"}
                                </Typography>
                                : null
                        }
                    </div>
                </Toolbar>
            </AppBar>
            <div className={classes.skeletonWrapper}>
                {
                    loading
                        ? <ArticleSkeleton />
                        :
                        <ArticleSkeleton
                            tagClicked={searchForTag}
                            articles={articles} />
                }
            </div>
            <div className={classes.pagination}>
                <Pagination showFirstButton showLastButton onChange={pageChanged} count={count} />
            </div>
        </div>
    );
}
