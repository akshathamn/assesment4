import React, { useState, useEffect } from 'react';
import './User.css';
const EditForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
      <label >Name</label><br/>
      <input className="col-lg-6 col-xs-6 col-sm-6 col-md-6 length" type="text" name="name" value={user.name} onChange={handleInputChange} /><br/>
      <label>Username</label><br/>
      <input className="col-lg-6 col-xs-6 col-sm-6 col-md-6 length" type="text" name="username" value={user.username} onChange={handleInputChange} /><br/><br/>
      <button class="btn btn-success">Update user</button>
      <button class="btn btn-primary" onClick={() => props.setEditing(false)} >
        Cancel
      </button>
    </form>
  )
}

export default EditForm;