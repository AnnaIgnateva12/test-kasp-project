import React, { useEffect, useRef, useState } from 'react';
import './BuyBlock.css';
import Star from '../../assets/images/Star.svg';
import HalfStar from '../../assets/images/Half-star.svg';
import Windows from '../../assets/images/Windows.svg';
import MacOS from '../../assets/images/MacOS.svg';
import Android from '../../assets/images/Android.svg';
import IOS from '../../assets/images/IOS.svg';
import { customStyles, devices } from './constans';
import Select from 'react-select';
import ProductIcon from './poductIcon/ProductIcon';

const BuyBlock = ({ currency }) => {
    let buyBlockRef = useRef()
    const [shortBuyBlockToggle, setShortBuyBlockToggle] = useState(false)

    const handleScroll = () => {
        let scrollTop = document.documentElement.scrollTop;
        let heightBuyBlock = buyBlockRef.current.offsetHeight;
        let widthBuyBlock = buyBlockRef.current.offsetWidth;
        if (widthBuyBlock < 640 && scrollTop > heightBuyBlock) {
            setShortBuyBlockToggle(true)
            setBuyBlockStyle('BuyBlock ShortBuyBlock')
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])

    const stars = []
    for (let i = 0; i < 4; i++) {
        stars.push(<img key={i} src={Star} alt='score 4.5' />)
    }
    stars.push(<img src={HalfStar} key='4' alt='score 4.5' />)

    const [price, setPrice] = useState('35.99')

    const [sign, setSign] = useState('£')
    const [multiplier, setMultiplier] = useState(1)

    const priceInCurrency = (+price * multiplier).toFixed(2)
    const bigPrice = (priceInCurrency * 1.2).toFixed(2)

    const priceArr = String(priceInCurrency).split('.')
    const bigPriceArr = String(bigPrice).split('.')

    const makeOptions = () => {
        let options = []
        devices.map((item) => {
            let label = item.label + ' ' + sign + ' ' + String((+item.value * multiplier).toFixed(2))
            options.push({ label, value: item.value })
        })
        return options
    }

    useEffect(() => {
        switch (currency) {
            case ('RUB'):
                setSign('₽')
                setMultiplier(69.95)
                break
            case ('USD'):
                setSign('$')
                setMultiplier(1.19)
                break
            default:
                setSign('£')
                setMultiplier(1)
                break
        }
    }, [currency])

    const [choosedOption, setChoosedOption] = useState('3 Devices, 1 Year')
    const [buyBlockStyle, setBuyBlockStyle] = useState('BuyBlock')

    return (
        <div className={buyBlockStyle}
            ref={buyBlockRef}
            onClick={() => {
                if (shortBuyBlockToggle) {
                    setShortBuyBlockToggle(false)
                    setBuyBlockStyle('BuyBlock StickyBuyBlock')
                }
            }}>
            <div className='TransparentBlock'>
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
                <div className='FirstBlockInGreenBlock'>
                    <ProductIcon className='ProductIcon' />
                <div className='KasperAndStars'>
                        <div className='KasperText'>
                            Kaspersky Internet Security
                        </div>
                        {shortBuyBlockToggle ?
                            <div><span className='BoldPrice'>{sign} {priceInCurrency}</span>{" - "}<span className='Choosed'>{choosedOption}</span></div>
                            : <div className='Score'>
                                {stars}
                        <span>(1503 reviews)</span>
                            </div>}
                    </div>
                </div>
                <div className='VerticalLine' />
                <div className='PriceBlock'>
                    <div className='Del'><span className='CrossedOut'>{sign} {bigPriceArr[0] + '.'}<span className='LittleNumbers'>{bigPriceArr[1]}</span></span></div>
                    <span className='BoldPrice'>{sign} {priceArr[0] + '.'}<span className='LittleNumbers'>{priceArr[1]}</span></span>
                </div>
                <div className='VerticalLine' />
                <div className='SelectDevice'>
                    <Select
                        options={makeOptions()}
                        defaultValue={{ label: '3 Devices, 1 Year', value: '35.99' }}
                        styles={customStyles}
                        menuPlacement="auto"
                        menuPosition="fixed"
                        onChange={(v) => {
                            setPrice(v.value)
                            let str = v.label.split(' ').splice(0, 4).join(' ')
                            setChoosedOption(str)
                        }} />
                </div>

                <button className='BuyNow'>Buy Now</button>
            </div>
        </div>
    )
}

export default BuyBlock