import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      maxHeight: 400,
    },
    temp: {
        padding: 0
    },
    star: {
        marginLeft: 12,
        marginBottom: 12
    },
    price: {
        fontSize: '120%'
    },
    temp2: {
        marginBottom: 0
    },
    media: {
      paddingTop: '60%'
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
    offer: {
      backgroundColor: '#ffe98f',
    }
  }));

function BookCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <Card className={classes.root}>
      <Box m={1}>
      <CardMedia
        className={classes.media}
        image="https://images-eu.ssl-images-amazon.com/images/I/41HLr6MRstL._SX342_SY445_QL70_ML2_.jpg"
        title="Paella dish"
      />
      <CardHeader
        title="Mritunjay"
      />
      <CardContent >
          <div style={{display: 'flex', color: '#9396ab' }}>
            <p>Price : ₹&nbsp;</p>
            <p>340&nbsp;&nbsp;</p>
            <del>₹400</del>
        </div>
        <p className={classes.offer}>25% OFF</p>

      </CardContent>

    <div className={classes.star}>
        <IconButton className={classes.temp}>
            <StarBorderIcon />
        </IconButton>
        <IconButton className={classes.temp}>
            <StarBorderIcon />
        </IconButton>
        <IconButton className={classes.temp}>
            <StarBorderIcon />
        </IconButton>
        <IconButton className={classes.temp}>
            <StarBorderIcon />
        </IconButton>
        <IconButton className={classes.temp}>
            <StarBorderIcon />
        </IconButton>
    </div>
    </Box>
    </Card>
    )
}

export default BookCard
