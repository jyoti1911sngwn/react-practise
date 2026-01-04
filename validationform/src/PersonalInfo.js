import React from 'react'

const PersonalInfo = ({data, errors, handleChange}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column'}}>
      <label>Name : </label>
      <input name='name' value={data.name} onChange={handleChange}/>
      {errors.name && <p style={{color: 'red'}}>{errors.name}</p>}
      <label>Email : </label>
      <input name='email' value={data.email} onChange={handleChange}/>
      {errors.email && <p style={{color: 'red'}}>{errors.email}</p>}
      <label>Password : </label>
      <input name='password' value={data.password} onChange={handleChange}/>
      {errors.password && <p style={{color: 'red'}}>{errors.password}</p>}
    </div>
  )
}

export default PersonalInfo
