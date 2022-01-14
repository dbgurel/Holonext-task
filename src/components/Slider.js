import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Logo from './images/holonext-logo.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    return (
        <section className='mainContainer'>
            <div className='title'>

                <a href='httphttps://holonext.com' > <img src={Logo} alt='logo' className='headerLogo headerLogo-s' /></a>
            </div>
            <div className='contentContainer'>
                <FaArrowLeft className='left-arrow' onClick={prevSlide()} />
                <FaArrowRight className='right-arrow' onClick={nextSlide()} />
                {SliderData.map((item, index) => {
                    return (<img src={item.image} alt='' className='image'/>)
                })}

            </div>


        </section>
    )
}

export default Slider;
