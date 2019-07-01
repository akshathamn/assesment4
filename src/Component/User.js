import React, { useState,Fragment } from 'react';
import UserTable from './UserTable';
import UserForm from './UserForm';
import EditForm from './EditForm';
import './User.css';


const User = () => {
  const usersData = []
  const initialFormState = { id: null, name: '', username: '' }
  const [users, setUsers] = useState(usersData)
  const [ currentUser, setCurrentUser ] = useState(initialFormState)
  const [ editing, setEditing ] = useState(false)


  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }
  const deleteUser = id => {
    setEditing(false)
  
    setUsers(users.filter(user => user.id !== id))
  }
  
  const updateUser = (id, updatedUser) => {
    setEditing(false)
  
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
  }
  
  const editRow = user => {
    setEditing(true)
  
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
  }
  return (
    
    <div className="container">
      <div className="row">
      <h1 className="col-lg-6 col-xs-6 col-sm-6 col-md-6 font ">React Application</h1>
      <div className="col-lg-2 col-xs-2 col-sm-2 col-md-2"></div>
      <div className="col-lg-2 col-xs-2 col-sm-2 col-md-2"></div>
      <div className=" col-lg-2 col-xs-2 col-sm-2 col-md-2 ">
        <a  href="login"><h5 className="font">Logout</h5></a></div>
      </div>
      
      <div className="row">
        <div className="col-lg-6 col-xs-6 col-sm-6 col-md-6">
        {editing ? (
          <Fragment>
            <h2 >Edit user</h2>
            <EditForm
              editing={editing}
              setEditing={setEditing}
              currentUser={currentUser}
              updateUser={updateUser}
            />
          </Fragment>
        ) : (
          <Fragment>
            <h2 className="font1">Add user</h2>
            <UserForm addUser={addUser} />
          </Fragment>
        )}
      </div>
      
      <div className=" col-lg-6 col-xs-6 col-sm-6 col-md-6">
        <h2 className="font1">View users</h2>
        <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  
  )
}



export default User;



