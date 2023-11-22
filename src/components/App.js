
import React, { useState } from "react";
import axios from 'axios';

const App = () => {
  const [people, setPeople] = useState([]);

  function getUsers() {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        console.log(response.data.data);
        setPeople(response.data.data)
      })

  }

  return (
    <div>
      <header className="nav">
        <h1>Blue Whales</h1>
        <button className="btn" onClick={getUsers}>Get User List</button>
      </header>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {
            people.length === 0 ?
              (
                <tr>
                  <td>
                    <h1>No data found to display.</h1>
                  </td>
                </tr>
              ) :
              (
                people.map((person, index) => {
                  return (
                    <tr key={index}>
                      <td>{person.first_name}</td>
                      <td>{person.last_name}</td>
                      <td>{person.email}</td>
                      <td>
                        <img src={person.avatar} alt="" />
                      </td>
                    </tr>
                  );
                })
              )
          }
        </tbody>
      </table>
    </div>
  )
}

export default App;
