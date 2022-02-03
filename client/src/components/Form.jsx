import React from 'react';

var Form = (props) => {
  return (
    <>
      <form onSubmit={props.submit}>
        <label>
          Name:
          <input type="text" onChange={props.setName} />
        </label>
        <label>
          Description:
          <input type="text" onChange={props.setDesc}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Form;