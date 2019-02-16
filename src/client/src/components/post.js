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
          user_id:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.posts();
    }

    posts () {
        fetch('/post/recent')
        .then(res => res.json())
        .then(data => this.saveData(data))
    }

    saveData = data => {
        this.setState ({ posts: data});
    };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
      this.setState({ anchorEl: null });
    };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleSubmit = post => event => {
    event.preventDefault();
    const { user } = this.props;
    this.setState({user_id:user.user._id})
    const url = `/post/${post._id}/comment`;
    const data = this.state;

    fetch(url, {
      method: 'POST',
      headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/json; charset=utf-8'
     },
     body: JSON.stringify(data)
    }).then(response => response.json())
   .then(data => {
     if (data.mensaje === 'registered successfully'){
       this.setState({req: true})
     }
   })
   .catch(error => console.error('Error:', error))
  }

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { posts } = this.state;
    const listItems = posts.map((post) => 
    <li><Card className={classes.card}>
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
                    {option}
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
      <IconButton aria-label="Like">
        <ThumbUp />
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
          /*avatar={
            <Avatar className={classes.smallAvatar} src={'./avatar2'}/>
          }*/
          title={ <TextField
            //onKeyDown={this.addComment}
            multiline
            value={this.state.text}
            placeholder="Write something ..."
            className={classes.commentField}
            margin="normal"
            />
          }
          className={classes.cardHeader}
    />
    <Button color="secondary" variant="raised" onClick={this.handleSubmit(post)}>POST</Button>
    </Collapse>
  </Card></li> )

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