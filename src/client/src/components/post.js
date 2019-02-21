import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import TextField from '@material-ui/core/TextField'
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
import Button from '@material-ui/core/Button'
import Collapse from '@material-ui/core/Collapse';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { connect } from 'react-redux';


var sectionStyle = {
  width: "100%",
  height: "640px",
  /*backgroundImage: `url(${Background})`,
  backgroundSize: 'cover'*/
 };


 /*const Head = {
    width: "100%",
    backgroundColor: "#2F89FC",
    minHeight: "50px",
    textAlign: "center",
    padding: "8px",
    display: "flex",
    justifyContent:"flex-end",
    alignItems:"center"
  };*/
const styles = theme => ({
  card: {
    maxWidth: 500,
    marginTop: '25px',
  },
  commentField: {
    width: '96%'
  },

  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(0deg)',
  },

  media: {
    height: 10,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  }/*,
  expand: {
    transform: 'rotate(0deg)',
    //marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(0deg)',
  }*/,
  avatar: {
    backgroundColor: red[500],
  },
});

const options = [
  'Eliminar',
];

const ITEM_HEIGHT = 48

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          expanded: false,
          posts:[],
          anchorEl: null,
          username:'',
          content:'',
          likes:0
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInfoChange = this.handleInfoChange.bind(this);
        this.handleLikes = this.handleLikes.bind(this);
        this.posts();
        this.comments();
    }

    posts () {
        fetch('/post/recent')
        .then(res => res.json())
        .then(data => this.saveData(data))
    }

    saveData = data => {
        this.setState ({ posts: data});
    };

    comments (post) {
      const comment = [];
      fetch(`/comment/${post}`)
      .then(res => res.json())
      .then(res => comment = res)

      console.log(comment)
      return comment;
    }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    
      this.setState({ anchorEl: null });
    };

  handleInfoChange(e) {
    this.setState({content: e.target.value});
  }

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
    const { user } = this.props;
    this.setState(state => ({username: user.user.username}));
  };

  handleSubmit = post => event => {
    event.preventDefault();
    const url = `/post/${post}/comment`;
    const data = this.state;
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
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { posts } = this.state;
    const listItems = posts.map((post) =>  
    <div><li><Card className={classes.card}>
    <CardHeader
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          {post.autor.charAt(0).toLocaleUpperCase()}
        </Avatar>
      }
      action={
        <div>
                <IconButton
                  aria-label="Mas"
                  aria-owns={open ? 'long-menu' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="long-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={this.handleClose}
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5,
                      width: 200,
                    },
                  }}
                >
                {options.map(option => (
                  <MenuItem key={option} selected={option === 'Pyxis'} onClick={this.handleClose}>
                    hola
                  </MenuItem>
                ))}
                </Menu>
        </div>

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
      <IconButton aria-label="Like" onClick={this.handleLikes(post._id, post.likes)} >
        <ThumbUp />
        <h6>Likes: {post.likes}</h6>
      </IconButton>
      
      <IconButton aria-label="Comment" className={classnames(classes.expand, {
          [classes.expandOpen]: this.state.expanded,
        })}
        onClick={this.handleExpandClick}
        aria-expanded={this.state.expanded}
        aria-label="Show more">

        <CommentIcon />
      </IconButton>

      {/*<IconButton aria-label="Delete">
        <DeleteIcon />
      </IconButton>*/}
    </CardActions>

    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
    <CardHeader
          title={ <TextField
            multiline
            value={this.state.text}
            placeholder="Write something ..."
            className={classes.commentField}
            margin="normal"
            onChange={this.handleInfoChange}
            />
          }
          className={classes.cardHeader}
    />
    <Button color="secondary" variant="raised" onClick={this.handleSubmit(post._id)}>POST</Button>
    </Collapse>
    </Card>
    {this.comments(post._id).map(comment=> (
          <li><h4>{comment._id}</h4></li>
        ))}
    </li>
    

    
    </div>
    
  )
  

    return (
    <section style={ sectionStyle }>
      <center>
        <ul>{listItems}</ul>
      </center>
    </section>
    );
  }

}
CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(withStyles(styles)(CreatePost));
//export default connect(mapStateToProps)(withStyles(styles)(CreatePost));