import React from 'react'
import NotFound from '../../assets/images/decorations/NotFound.webp'

function Error(){
  return(
    <div>
      <img src={NotFound} draggable='false'></img>
      <h2>Page not found</h2>
      <p>The page you are looking for dosent exist or an error occured</p>
    </div>
  )
}

export default Error;