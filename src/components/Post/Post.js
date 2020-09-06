import React from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
  });


const Post = (props) => {
    const{id,title,body} = props.post;
    const history = useHistory();
    const handleClick = (postId)=>{
        const url = `/post/${postId}`;
        history.push(url);
    }    
    const classes = useStyles();
    return (
        <Container maxWidth="lg">
            <main>
                <Card className={classes.root} variant="outlined">
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                         Post Id: {id}
                        </Typography>
                        <Typography variant="h5" component="h2">
                             {title}
                        </Typography>                       
                        <Typography variant="body2" component="p">
                           {body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined" size="small" onClick={()=>handleClick(id)} color="secondary">
                        Read More
                        </Button>
                    
                    </CardActions>
                </Card>
            </main>
            <Divider variant="inset" component="Card" /> 
        </Container>      
        
    );
};

export default Post;