import React from 'react';
import Cow from './Cow'

var CowList = (props) => {
  return (
    <>
      {props.cows.map((cow) => {
        return (
          <Cow cow={cow} setCow={props.setCow}/>
        )
      })}
    </>
  )
}

export default CowList;