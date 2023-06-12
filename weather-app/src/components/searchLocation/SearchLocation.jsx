import React from 'react'

function SearchLocation(props) {
  return (
    <><div>Weather in {props.location} :</div>
    <p>{props.description}</p>
    </>
  )
}

export default SearchLocation
