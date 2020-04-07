import React, { Component } from 'react';
import List from './components/List'
import './App.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
root: {
width: "100%",
marginTop: theme.spacing.unit * 3,
overflowX: "auto"
},
table: {
minWidth: 1080
}
});

const lists = [
{
  'id': 1,
  'password': '1234',
  'name': 'name',
  'email': 'email',
  'gender': 'gender',
  'job' : 'job'
},
{
  'id': 2,
  'password': '12345',
  'name': 'name',
  'email': 'email',
  'gender': 'gender',
  'job' : 'job'
},
{
  'id': 3,
  'password': '123456',
  'name': 'name',
  'email': 'email',
  'gender': 'gender',
  'job' : 'job'
}
]

class App extends Component {
  render() {
    return (
      <div>
        <Table>
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
            {lists.map(c => {
              return <List key={c.id} id={c.id} password={c.password} name={c.name} email={c.email} gender={c.gender} job={c.job} /> 
            })}
          </TableBody>
        </Table>        
      </div>
    );
  }
}

export default withStyles(styles)(App);