import React from 'react';
import ReactMarkdown from 'react-markdown'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
  expansionDetails: {
    display: 'flex',
    justifyContent: 'center'
  },
  icon: {
    color: theme.palette.common.white
  },
  image: {
    height: '100px',
  },
  markdown: {
    padding: theme.spacing(2),
    '& img': {
      maxWidth: '100%',
      display: 'block',
      margin: 'auto',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      backgroundColor: theme.palette.common.white
    },
    '& a': {
      color: theme.palette.common.white
    },
    [theme.breakpoints.up('lg')]: {
    }
  }
}));

export default function MarkdownPanel(props) {
  const classes = useStyles();

  return (
    <ExpansionPanel className={classes.root}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon className={classes.icon} />}
      >
        <Typography variant="body1" className={classes.heading}>{props.title}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails className={classes.expansionDetails}>
        <ReactMarkdown
          id="markdown"
          source={props.content}
          className={classes.markdown}
          escapeHtml={false}
          renderers={{
            paragraph: ({ children }) => (
              <Typography color="secondary" variant="body1">
                {children}
              </Typography>
            )
          }}
        />
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}