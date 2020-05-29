import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress, Typography } from '@material-ui/core';
import * as link from '../../../utilities/link-config';

import clouds from '../../../assets/background/clouds-background.png';
import cloudIcon from '../../../assets/icons/orange-player.png'
import WebRTCAutomation from '../../../components/ui/ActiveCampaign/WebRTCAutomation';

const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            flexGrow: 1,
            width: '100%',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
        }
    },
    playerWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'block',
        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            maxWidth: '100%',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'center'

        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
        }
    },
    webcasterWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            flexDirection: 'column',
            width: '480px',
            height: '360px',
            maxWidth: '100%',
            justifyContent: 'center',
            backgroundImage: `url(${clouds})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            borderRadius: theme.spacing(1),
            marginBottom: theme.spacing(4),
            boxShadow: theme.shadows[3]
        },
        [theme.breakpoints.up('sm')]: {
            marginBottom: 0
        },
        [theme.breakpoints.up('md')]: {
            width: '360px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '480px'
        }
    },
    inheritWrapper: {
        backgroundColor: "inherit",
        maxHeight: '100%',
        maxWidth: '100%'
    },
    webcaster: {
        [theme.breakpoints.up('xs')]: {
            width: '480px',
            maxWidth: '100%',
            margin: '0 auto',
            marginTop: theme.spacing(1)
        },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1),
            width: '360px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '480px'
        }
    },
    h5live: {
        [theme.breakpoints.up('xs')]: {
            width: '480px',
            maxWidth: '100%',
            margin: '0 auto',
            marginTop: theme.spacing(1)
        },
        [theme.breakpoints.up('md')]: {
            margin: theme.spacing(1),
            width: '360px',
        },
        [theme.breakpoints.up('lg')]: {
            width: '480px'
        }
    },
    showWebcaster: {
        display: 'block'
    },
    hideWebcaster: {
        display: 'none'
    },
    playerWrapper: {
        [theme.breakpoints.up('xs')]: {
            display: 'flex',
            maxWidth: '100%',
            flexDirection: 'column',
            justifyContent: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
            flexDirection: 'row',
            justifyContent: 'center',
        }
    },
    image: {
        [theme.breakpoints.up('xs')]: {
            maxWidth: '100px',
            display: 'block',
            margin: '0 auto',
            marginBottom: theme.spacing(1)
        }
    },
    progressWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '480px',
        height: '360px',
        maxWidth: '100%',
        marginBottom: theme.spacing(4)
    },
    titleWrapper: {
        [theme.breakpoints.up('xs')]: {
            width: '480px',
            maxWidth: '100%',
            marginLeft: theme.spacing(1),

        },
        [theme.breakpoints.up('sm')]: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        [theme.breakpoints.up('md')]: {
            width: '360px'
        },
        [theme.breakpoints.up('lg')]: {
            width: '480px'
        },
    },
    title: {
        [theme.breakpoints.up('xs')]: {
            fontWeight: 900,
            fontSize: '1.1em',
            color: theme.palette.primary.main
        }
    },
    icon: {
        [theme.breakpoints.up('xs')]: {
            height: '100px'
        },
        [theme.breakpoints.up('sm')]: {
            height: '100px'
        },
        [theme.breakpoints.up('lg')]: {
            height: '100px'
        }
    },
    iconWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignSelf: 'center'
    }
}))

export default function Webcaster() {
    const classes = useStyles();

    const [startWebcaster, setStartWebcaster] = useState(false);
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [h5loaded, seth5loaded] = useState(false);
    const [loading, setLoading] = useState(false);
    const [praefix] = useState(link.PAGE_PLAYBACK)
    const [apikey] = useState("OhivCxa326zehcBYqPfPlrYzvhDSywx8T9VA906PCi4mumidjKrVCwb6wgfdveCxmGoFk4Kv5EBMK3HR");
    const [url, setUrl] = useState("");

    const webcaster = clsx(classes.webcaster, {
        [classes.showWebcaster]: startWebcaster && !loading,
        [classes.hideWebcaster]: !startWebcaster || (startWebcaster && loading)
    });

    const h5live = clsx(classes.h5live, {
        [classes.showWebcaster]: h5loaded,
        [classes.hideWebcaster]: !h5loaded
    });

    const encodingIcon = clsx({
        [classes.iconWrapper]: h5loaded,
        [classes.hideWebcaster]: !h5loaded
    })

    const webcasterWrapper = clsx({
        [classes.webcasterWrapper]: !startWebcaster,
        [classes.inheritWrapper]: startWebcaster,
    })

    const h5Title = clsx({
        [classes.titleWrapper]: h5loaded,
        [classes.hideWebcaster]: !h5loaded
    })

    const webcasterTitle = clsx({
        [classes.titleWrapper]: startWebcaster,
        [classes.hideWebcaster]: !startWebcaster
    });

    const addAttributes = (element, attributeList) => {
        for (let key in attributeList) {
            element.setAttribute(key, attributeList[key]);
        }
    }

    useEffect(() => {
        if (startWebcaster && !scriptLoaded) {
            let script = document.createElement("script");
            script.setAttribute("apiKey", apikey);
            script.setAttribute("id", "nano");
            // script.setAttribute("color", "");
            script.setAttribute("playbackPraefix", praefix)
            script.src = "./nanostream.webcaster.js";
            document.body.appendChild(script);
            setStartWebcaster(true);
            setScriptLoaded(true);
        }
        if (!startWebcaster) {
            setStartWebcaster(false);
        }
    }, [startWebcaster])

    window.setLoading = (loading) => {
        // console.log("LOADING", loading)
        setLoading(loading)
    }

    window.loadPlayback = (transcode, streamnameList, ratio) => {
        setUrl(createUrl(transcode, JSON.parse(streamnameList), ratio))
        if (!h5loaded) {
            setTimeout(() => {
                let script = document.createElement("script");
                let attributes = {
                    id: "playback",
                    streamNameList: streamnameList,
                    ratio: ratio,
                    showStats: "true",
                    mute: "true",
                    playbackPraefix: praefix,
                    src: "./nanostream.h5live.js"
                };
                addAttributes(script, attributes);
                document.body.appendChild(script);
                seth5loaded(true);

            }, 1500)
        }
    }

    window.closePlayback = () => {
        // let playback = document.getElementById("nanoStream-h5live");
        // while (playback.hasChildNodes()) {
        //     playback.removeChild(playback.lastChild)
        // }
    }

    const createUrl = (transcode, streamNames, ratio) => {

        let concat = transcode ? `stream.name=${streamNames[0]}&vtrans.first=${streamNames[1]}&vtrans.second=${streamNames[2]}` : `stream.name=${streamNames[0]}}`;
        let appendedRatio = ratio === 75 ? "" : `&ratio=${ratio}`;

        return `${praefix}?${concat}${appendedRatio}`
    }

    return (
        <div className={classes.root}>
            <div className={webcasterWrapper}>
                {
                    loading
                        ?
                        <div className={classes.progressWrapper}>
                            <CircularProgress color="primary" className={classes.circular} />
                        </div>
                        : null
                }
                {
                    startWebcaster
                        ?
                        <div className={classes.playerWrapper}>
                            <div>
                                <div className={webcasterTitle}>
                                    <Typography className={classes.title} color="primary" variant="button">
                                        PREVIEW
                                    </Typography>
                                </div>
                                <div className={webcaster} id="nanoStream-webcaster" />
                            </div>
                            <div className={encodingIcon}>
                                <img className={classes.icon} src={cloudIcon}/>
                            </div>
                            <div>
                                <div className={h5Title}>
                                    <Typography className={classes.title} color="primary" variant="button">
                                        PLAYER
                                    </Typography>
                                </div>
                                <div className={h5live} id="nanoStream-h5live" />
                            </div>
                        </div>
                        :
                        <WebRTCAutomation
                            showQuickDemo={(show) => setStartWebcaster(show)}
                        />
                }
            </div>
        </div>
    );
}
