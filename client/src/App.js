import React, { Component } from 'react';
import List from './components/List'
import './App.css';
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin:theme.spacing.unit * 2
  }
});

class App extends Component {
  state = {
    lists: "",
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({lists: res}))
      .catch(err => console.log(err));
  }

  componentWillMount() {
    clearInterval(this.timer);
  }

  callApi = async () => {
    const response = await fetch('/api/lists');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>gender</TableCell>
              <TableCell>Job</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.lists ?
              this.state.lists.map(c => {
                return <List key={c.id} id={c.id} password={c.password} name={c.name} email={c.email} gender={c.gender} job={c.job} /> 
            }) :
            <TableRow>
              <TableCell colSpan="6" align="center">
                <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
              </TableCell>
            </TableRow>
           }
          </TableBody>
        </Table>        
      </Paper>
    );
  }
}

export default withStyles(styles)(App);