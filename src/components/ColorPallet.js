import React from 'react'

export default function ColorPallet(props) {
  return (
    (props.mode === 'dark') && <div className="color-pallet">
        <div className='red' onClick={()=>props.toggleMode('red')}></div>
        <div className='blue' onClick={()=>props.toggleMode('blue')}></div>
        <div className='green' onClick={()=>props.toggleMode('green')}></div>
        <div className='dark' onClick={()=>props.toggleMode('dark')}></div>
    </div>
  )
}
