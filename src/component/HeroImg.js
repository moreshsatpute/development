import React from 'react';
import "./HeroImg.css";
import HomeImage from "../asset/bgimg.png";
import { Link } from 'react-router-dom';



const HeroImg = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className='into-img'
                    src={HomeImage} alt='IntroImg'
                />
            </div>
            <div className='contain'>
                <h1>Lorem ipsum dolor sit, amet </h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicingLorem ipsum dolor sit, amet consectetur adipisicing</p>
            </div>
            <div className=''>
                <Link to="/products" className='btn'>Explore our Products</Link>
            </div>

            <div className='rectangle'>

            </div>

            <div className='HeroFooter'>
                <h1 className='footerfirst'>€2m+</h1>
                 
            </div>


        </div>
    )
}

export default HeroImg