import React, { Component } from 'react';
import Head from './global/Head';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
//import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
//import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import ThumbUp from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import PostForm from './global/postForm'

const styles = theme => ({
  card: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.unit * 5

  },
  media: {
    height: 30,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
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
});

const Card3 = {
    background: "white",
    height: "370px", //x
    width: "300px",
    position: "fixed",
    top: "20vh", //x
    left:"4vw",
    display: "block",
    margin: "0 auto",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "center",
    padding: "40px",
    borderRadius:"5px",
    boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
}

const Card2 = {
    background: "white",
    height: "560px", //x
    width: "750px",
    position: "fixed",
    top: "20vh", //x
    left:"35vw",
    display: "block",
    margin: "0 auto",
    fontSize: "20px",
    fontWeight: "700",
    textAlign: "left",
    padding: "40px",
    borderRadius:"5px",
    boxShadow:"0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)",
    overflowY: 'auto'
}

const Container = {
  width: "100%",
  height: "calc( 100vh - 50px)",
}


var imageName = require('./avatar2.png')

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts:[]
    };
    this.posts();
    this.handleLikes = this.handleLikes.bind(this);
  }

  posts () {
    fetch('/post/recent')
    .then(res => res.json())
    .then(data => this.saveData(data))
  }

  saveData = data => {
    this.setState ({ posts: data});
    //console.log(this.state.post);
  };

  handleLikes = (post, likes) => event => {
    const url = `/post/${post}/like`;
    const data = {likes:parseInt(likes,10)};
    console.log(data);

    fetch(url, {
      method: 'POST',
      headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json; charset=utf-8'
     },
     body: JSON.stringify(data)
    }).then(response => response.json())
   .catch(error => console.error('Error:', error))
  }

  render() {
    const { classes } = this.props;
    const { posts } = this.state;
    const { user } = this.props;

    const listItems = posts.map((post) => 
    <li><Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          {post.autor.charAt(0).toLocaleUpperCase()}
        </Avatar>
      }
      action={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      title={post.autor.toLocaleUpperCase()}
      subheader= {new Date().toLocaleString()}
    />
      <CardContent>
        <Typography paragraph>
          {post.content}

        </Typography>
      </CardContent>
    <CardActions className={classes.actions} disableActionSpacing>
      <IconButton aria-label="Like" onClick={this.handleLikes(post._id, post.likes)}>
        <ThumbUp />
        <h6>Likes: {post.likes}</h6>
      </IconButton>
      <IconButton aria-label="Comment">
        <CommentIcon />
      </IconButton>
      <IconButton aria-label="Delete">
        <DeleteIcon />
    </IconButton>
    </CardActions>
    
  </Card></li> )

    return (
      <div className="App">
        <header>
          <Head/>
        </header>
        <div style={Container}>
          <div style={Card3}>
            <img src={imageName} alt="avatar2" width="100" height="100" />
            <br /><br />
            <label>{user.user.username.toLocaleUpperCase()}</label>
          </div>

          <div style={Card2}>
            <label>Posts</label>
            <h5>Comparte experiencias con nosotros</h5>
            
            
            <center>
            < PostForm />
              <ul>{listItems}</ul>
            </center>
          </div>

        </div>

      </div>

    );

  }
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Profile));