import React from 'react'
import { ReactComponent as Close } from '../assets/svg/Close.svg'
import { list } from '../pages/asset'


const Overlay = ({ isVisible, id, onclose }) => {
  const item = list.filter(function (item) {
    return item.id === id
  })[0]
  return (
    <div className={`overlay-container ${isVisible ? 'overlay-active' : 'overlay-hide'}`}>
      <Close onClick={() => onclose()} className='overlay-close-icon pointer' />

      <h1 className='overlay-header mb-1-5'>{item?.title}</h1>

      <img className='overlay-image' src={item?.image} />
    </div>
  )
}

export default Overlay
