import React from 'react';
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
    margin: 'auto',
  },
  media: {
    height: 10,
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

class CreatePost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            posts:[]
        };
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

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;
    const { posts } = this.state;
    console.log(posts);

    return (
    <section style={ sectionStyle }>
    <center>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              A
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Visita Tecate"
          subheader= {new Date().toLocaleString()}
        />
          <CardContent>
            <Typography paragraph>
              Disfruta de la cultura, el clima, los hoteles, ranchos y viñedos.
              Lo mejor de la ciudad se encuentra en los restaurantes, cafeterias,
              bares y panaderias.

            </Typography>
          </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Like">
            <ThumbUp />
          </IconButton>
          <IconButton aria-label="Comment">
            <CommentIcon />
          </IconButton>
          <IconButton aria-label="Delete">
            <DeleteIcon />
        </IconButton>
        </CardActions>

      </Card>
      </center>
      </section>
    );
  }

}
CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePost);
//export default connect(mapStateToProps)(withStyles(styles)(CreatePost));