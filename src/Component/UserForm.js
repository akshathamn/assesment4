import React, { useState } from 'react'

const UserForm = props => {
  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!user.name || !user.username) return

        props.addUser(user)
        setUser(initialFormState)
      }}
    >
      <label className="font">Name</label><br/>
      <input className="length"type="text" name="name" value={user.name} onChange={handleInputChange} /><br/>
      <label className="font">Username</label><br/>
      <input className="length"type="text" name="username" value={user.username} onChange={handleInputChange} /><br/><br/>
      <button  class="btn btn-primary">Add new user</button>
    </form>
  )
}

export default UserForm;



