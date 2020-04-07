import React, { Component } from 'react';
import List from './components/List'
import './App.css';

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
        {lists.map(c => {
          return <List key={c.id} id={c.id} password={c.password} name={c.name} email={c.email} gender={c.gender} job={c.job} /> 
        })}
      </div>
    );
  }
}

export default App;