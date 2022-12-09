import React from 'react'

export default function CartBox(props) {
  return (
    <div className="z-10 border-2 bg-black bg-opacity-50 blur-sm w-72 h-48 overflow-auto rounded-md">
      {props.items.map(item => {
        
      })}
    </div>
  )
}
