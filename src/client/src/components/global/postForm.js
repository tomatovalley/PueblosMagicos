import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField'


var sectionStyle = {
  width: "100%",
  height: "640px",
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

class CreatePost extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
    <section style={ sectionStyle }>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              K
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title="Karina"
        />
        <CardContent>
        <TextField
            placeholder="Share your thoughts ..."
            multiline
            rows="3"
            value={this.state.text}
            //onChange={this.handleChange('text')}
            className={classes.textField}
            margin="normal"
        />
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <Button color="primary" variant="contained">POST</Button>
        </CardActions>

      </Card>
      </section>
    );
  }

}
CreatePost.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePost);