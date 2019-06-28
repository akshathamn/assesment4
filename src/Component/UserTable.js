import React from 'react';

const UserTable = props => (
    <table cellpadding="0px" cellspacing="0px" class="PerformanceTable">
      <thead>
        <tr>
          <th class="TableHeader" >Name</th>
          <th class="TableHeader">Username</th>
          <th class="TableHeader">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>
                <button onClick={() => {props.editRow(user)}} className="button muted-button">Edit</button>
                <button onClick={() => props.deleteUser(user.id)} className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No users</td>
          </tr>
        )}
      </tbody>
    </table>
  )
  
  export default UserTable;


  