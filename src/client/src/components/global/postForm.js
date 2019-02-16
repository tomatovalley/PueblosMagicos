import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


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
  constructor(props){
      super(props);
      this.state = {
        content:'',
        redirect:false
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInfoChange = this.handleInfoChange.bind(this);
    }

  handleInfoChange(e) {
    this.setState({content: e.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    const { user } = this.props;
    const url = `/post/${user.user._id}`;
    const data = this.state;
    this.setState({ redirect: true })

    fetch(url, {
      method: 'POST',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => response.json())
    .catch(error=> console.log(error));
 }

  render() {
    const { classes } = this.props;
    const { user } = this.props;
    const { redirect } = this.state;
    const name = user.user.username.toLocaleUpperCase();
    console.log(redirect)

    if (redirect) {
      return <Redirect to='/feed'/>
    }

    return (
    <section style={ sectionStyle }>
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              {name.charAt(0)}
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
        />
        <CardContent>
        <TextField
            placeholder="Comparte tus experiencias ..."
            multiline
            value={this.state.text}
            onChange={this.handleInfoChange}
            className={classes.textField}
            margin="normal"
        />
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
        <Button color="primary" variant="contained" onClick={this.handleSubmit}>POST</Button>
        </CardActions>

      </Card>
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
};

export default connect(mapStateToProps)(withStyles(styles)(CreatePost));