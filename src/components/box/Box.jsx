import React from 'react';

const Box = ({ hUnit, wUnit,color,handleClose,id }) => {
  const style={
    backgroundColor: color,
    height: `${hUnit}px`,
    width: `${wUnit}px`
  }

  return(
    <div style={style}>
      <button id={id} onClick={handleClose}>X</button>
    </div>
  )
}

export default Box;