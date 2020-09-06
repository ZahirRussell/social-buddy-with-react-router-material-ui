import React, { useState, useEffect } from 'react';
import { Avatar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 860,
      backgroundColor: theme.palette.background.paper,
    },
    img:{
      width:'80px',
      height:'80px',
      marginLeft:'15px',
      marginRight:'15px',
    },
  }));

const PostComment = (props) => {
    const{id,name,email,body} = props.postComment;
    const classes = useStyles();

    const [userImage, setuserImage] = useState([]);
    useEffect(()=> {
         const url = `https://jsonplaceholder.typicode.com/photos/${id}`;
        console.log(url);
        fetch(url)
        .then((res) => res.json())
            .then((data) => setuserImage(data)  
            )
    },[])
    

    return (       

    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
            <Avatar className={classes.img} alt="User Image" src={userImage.thumbnailUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textSecondary"
              >
                {email}
              </Typography>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                  <br />
                {body}
                </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />      
    </List>
    );
};

export default PostComment;