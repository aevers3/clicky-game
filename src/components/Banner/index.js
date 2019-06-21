import React from 'react';
import BannerHeader from '../BannerHeader';
import BannerSubhead from '../BannerSubhead';
import './style.css';

function Banner() {
    return (
        <div className='banner d-flex justify-content-center'>
            <div className='row align-self-center text-center p-4 mt-5 tint-box'>
                <div className='col-12'>
                    <BannerHeader
                        text='Breakfast Memory Game!'
                    />
                </div>
                <div className='col-12'>
                    <BannerSubhead
                        text="Click on an image to earn points, but don't click on any more than once!"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;