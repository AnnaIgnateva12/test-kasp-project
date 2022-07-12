import React from 'react';
import './BuyBlock.css';
import productIcon from '../../assets/images/ProductIcon.svg';
import KasperText from '../../assets/images/KasperskyInternetSecurity.svg';
import Star from '../../assets/images/Star.svg';
import HalfStar from '../../assets/images/Half-star.svg';
import Windows from '../../assets/images/Windows.svg';
import MacOS from '../../assets/images/MacOS.svg';
import Android from '../../assets/images/Android.svg';
import IOS from '../../assets/images/IOS.svg';

const BuyBlock = () => {
    return (
        <div className='buyBlock'>
            <div className='transparentBlock'>
                <div className='Compatible'>
                    <span>Compatible with:</span>
                    <img src={Windows} alt='Windows logo' />
                    <div className='VerticalLine' />
                    <img src={MacOS} alt='MacOS logo' />
                    <div className='VerticalLine' />
                    <img src={Android} alt='Android logo' />
                    <div className='VerticalLine' />
                    <img src={IOS} alt='IOS logo' />
                </div>
                <div className='Save'>Save 20%</div>
            </div>
            <div className='GreenBlock'>
                <img src={productIcon} className='productIcon' alt='product icon' />
                <div className='KasperAndStars'>
                    <img src={KasperText} alt='text logo' />
                    <div className='Score'>
                        <img src={Star} alt='score 4.5' />
                        <img src={Star} alt='score 4.5' />
                        <img src={Star} alt='score 4.5' />
                        <img src={Star} alt='score 4.5' />
                        <img src={HalfStar} alt='score 4.5' />
                        <span>(1503 reviews)</span>
                    </div>
                </div>
                <div className='VerticalLine' />
            </div>
        </div>
    )
}

export default BuyBlock