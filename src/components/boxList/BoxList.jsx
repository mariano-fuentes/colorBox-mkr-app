import React from 'react';
import Box from '../box/Box'

const BoxList = ({ arrBoxes,removeItem }) => {
  return(
    <div>
      {arrBoxes.map((item,index) => {
        return (
          <Box
          key={index}
          hUnit={item.height}
          wUnit={item.width}
          color={item.color}
          id={item.id}
          handleClose={removeItem}
          ></Box>
        )
      })}
    </div>
  )
}

export default BoxList;