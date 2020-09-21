import React,{ useState } from 'react';

const NewBoxForm = ({ addItem }) => {
  const [box, setBox]=useState(
    {
      height: '',
      width: '',
      color: '',
      id: ''
    }
  );

  const handleChange= (e) => {
    setBox(
      {
        ...box,
        [e.target.name]: e.target.value
      }
    )
  }

  const handleSubmit= (e) => {
    e.preventDefault()
    addItem(box)
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="height">Height:</label>
        <input 
          type="text"
          name="height"
          id="height"
          value={box.height}
          onChange={handleChange}
        />
        <label htmlFor="width">Width:</label>
        <input 
          type="text"
          name="width"
          id="width"
          value={box.width}
          onChange={handleChange}
        />
        <label htmlFor="colorbg">Color:</label>
        <input 
          type="text"
          name="color"
          id="colorbg"
          value={box.color}
          onChange={handleChange}
        />
        <input type="submit"/>
      </form>
    </div>
  )
}

export default NewBoxForm;