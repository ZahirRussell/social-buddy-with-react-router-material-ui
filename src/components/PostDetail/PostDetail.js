import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostComment from '../PostComment/PostComment';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, Typography, CardActions, Divider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  });

const PostDetail = () => {
    const {postId} = useParams();
    const classes = useStyles();
    const [post, setPost] = useState({});    
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))       
    },[])

    const [postComment, setPostComment] = useState([]);
    useEffect(()=> {
         const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        console.log(url);
        fetch(url)
        .then((res) => res.json())
            .then((data) => setPostComment(data)  
            )
    },[])
    return (
    <div>
        <Card className={classes.root}>
            <CardActionArea>               
                <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                   {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                   {post.body}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        <Divider variant="inset" component="Card" /> 
            {
                postComment.map(postComment => <PostComment postComment={postComment} key={postComment.id}></PostComment>)
            }
              
        </div>
    );
};

export default PostDetail;