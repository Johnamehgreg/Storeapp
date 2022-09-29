import React, { useState } from 'react'
import { list } from '../pages/asset'
import Overlay from './overlay'



const SectionItem = () => {

  const [isVisible, setisVisible] = useState(false)
  const [id, setid] = useState(0)
  const handleOverlay = (id) => {
    setid(id)
    setisVisible(true)
  }
  return (
    <>
      <div className='item-section-cont'>
        {
          list.map((item, index) => {
            return (
              <>

                {
                  item.name === 'circle' && (
                    <section className="item-wrapper">
                      <div onClick={() => handleOverlay(item.id)} className="circle-item pointer" >
                        <img src={item.image} alt="Underwater" loading="lazy" />

                      </div>
                    </section>
                  )
                }


                {
                  item.name === 'rectangle' && (

                    <section className="item-wrapper">
                      <div onClick={() => handleOverlay(item.id)} className="rectangle-item pointer"
                      >
                        <img src={item.image} alt="Underwater" loading="lazy" />


                      </div>
                    </section>
                  )
                }

                {
                  item.name === 'square' && (
                    <section className="item-wrapper pointer">
                      <div onClick={() => handleOverlay(item.id)} className="square-item" >
                        <img src={item.image} alt="Underwater" loading="lazy" />
                      </div>
                    </section>
                  )
                }

                {
                  item.name === 'triangle' && (
                    <section className="item-wrapper pointer">
                      <div onClick={() => handleOverlay(item.id)} className="triangle-item"  >
                      <img src={item.image} alt="Underwater"  loading="lazy" />


                      </div>
                    </section>
                  )
                }



              </>
            )
          })
        }



      </div>

      <Overlay id={id} isVisible={isVisible} onclose={() => setisVisible(false)} />
    </>

  )
}

export default SectionItem
