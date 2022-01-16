import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Logo from './images/holonext-logo.png'
import { FaArrowLeft, FaArrowRight, FaBars } from 'react-icons/fa'
import { AiOutlineClose } from "react-icons/ai";

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length
    const [toggleStatus, setToggleStatus] = useState(false)
    const [viewerLink, setViewerLink] = useState('')

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
    const transformModel = (sceneId) => {
        let link = 'https://holonext.azurewebsites.net/api/v1/scene/holonextViewer/' + sceneId
        setViewerLink(link)
    }
    const clickBtn = () => {
        alert('ilgili siteye yönlendirilecek...')
    }
    return (
        <div className='mainContainer'>
            <section className='title'>
                <a href='https://holonext.com'><img src={Logo} className='title-logo' /></a>
            </section>
            <section className='slider' >
                <div>
                    <FaArrowLeft className='left-arrow' onClick={() => { prevSlide() }} />
                    <FaArrowRight className='right-arrow' onClick={() => { nextSlide() }} />
                </div>

                {SliderData.map((item, index) => {
                    return (
                        <div className={index === current ? 'activeSlider' : 'slide'} key={index}>

                            {index === current && (<>
                                <img src={item.image} className='images' alt='' />
                                <p className='description'> {item.description} </p>
                                <a href={viewerLink} target='_blank'>
                                    <button onClick={() => { transformModel(item.sceneId) }} className='btn' > View in 3-D </button>
                                </a>
                            </>
                            )}
                        </div>
                    )
                })}

            </section>
            <section className='altMenu'>
                <div className='menuContent'>
                    <div >
                        <div>
                            <span onClick={() => { clickBtn() }} className={toggleStatus ? 'menuItem' : 'menuDisabled'}>Home</span><br />
                            <span onClick={() => { clickBtn() }} className={toggleStatus ? 'menuItem' : 'menuDisabled'}>Models</span><br />
                            <span onClick={() => { clickBtn() }} className={toggleStatus ? 'menuItem' : 'menuDisabled'}>Contact</span><br />
                            <span onClick={() => { clickBtn() }} className={toggleStatus ? 'menuItem' : 'menuDisabled'}>Information</span><br />
                            <span onClick={() => { clickBtn() }} className={toggleStatus ? 'menuItem' : 'menuDisabled'}>Etc.</span><br />
                        </div>

                        <FaBars onClick={() => { setToggle() }} className={toggleStatus ? 'menu-icon-disabled' : 'menu-icon' } />
                        <AiOutlineClose onClick={() => { setToggle() }} className={toggleStatus ? 'menu-icon' : 'menu-icon-disabled' } />
                    </div>


                </div>
                <div className='footer'>
                    <p> © 2021 Holonext </p>
                </div>
            </section>

        </div>
    )
}

export default Slider;
