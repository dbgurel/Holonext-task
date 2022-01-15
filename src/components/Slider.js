import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Logo from './images/holonext-logo.png'
import { FaArrowLeft, FaArrowRight, FaBars } from 'react-icons/fa'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const [toggleStatus, setToggleStatus] = useState(false)

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        console.log(current);
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const setToggle = () => {
        setToggleStatus(!toggleStatus)
    }
    const transformModel = (item) => {
        let modelId = item.sceneId
        alert(modelId)
    }
    return (
        <div className='mainContainer'>
            <section className='title'>
                <a href='https://holonext.com'><img src={Logo} className='title-logo' /></a>
            </section>
            <section className='slider' >
                <div className='arrows'>
                    <FaArrowLeft className='left-arrow' onClick={() => { prevSlide() }} />
                    <FaArrowRight className='right-arrow' onClick={() => { nextSlide() }} />
                </div>
                <div className='models'>
                    {SliderData.map((item, index) => {
                        return (
                            <div className='imageContainer' key={index}>

                                {index === current && (<>
                                    <img src={item.image} className='images' alt='' />
                                    <p className='description'> {item.description} </p>
                                    <button onClick={() => { transformModel(item) }} className='btn' > 3D Olarak Görüntüle </button>
                                </>
                                )}

                            </div>
                        )
                    })}
                </div>
            </section>
            <section className='alt-menu'>

                <div className='menuContent'>
                    <span className='menu-item'>Home</span>
                    <span className='menu-item'>Models</span>
                    <span className='menu-item'>Contact</span>
                    <span className='menu-item'>Information</span>
                    <span className='menu-item'>Etc.</span>
                </div>
                <div className='menu-icon'>
                    <FaBars onClick={() => { setToggle() }} className='menu-icon' />
                </div>
            </section>

        </div>
    )
}

export default Slider;
