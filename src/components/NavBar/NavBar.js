import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import ToolBar from '@material-ui/core/ToolBar'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <ToolBar>                    
                    <Link to="/home">
                       <HomeIcon color="secondary"/>
                    </Link>
                    &nbsp;
                    <Typography variant="title" color="inherit">
                        Social Buddy with React Router and Material UI
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    );
};

export default NavBar;