import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import clsx from 'clsx';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { Box } from '@material-ui/core';
import './BookCard.css'

const useStyles = makeStyles((theme) => ({
    
  }));

function BookCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
        <Card className="root">
            <CardMedia
                className="media"
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
        <p>25% OFF</p>

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
      
        </Card>
    )
}

export default BookCard
