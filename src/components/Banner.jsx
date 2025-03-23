import React from 'react';
import './Banner.css';
import { useInView } from 'react-intersection-observer';
import { useEffect} from "react";



function Banner() {

    const [ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true,
    });
    
    const handleEffect1 = () => {
        const element = document.querySelector('#banner');
        if(element){
            element.style.opacity = "1";
            element.style.marginLeft = "0";
        }
    }
    
    useEffect(() => {
      if (inView) {
        setTimeout(() => {
            handleEffect1();
        }, 200); 
      }
    }, [inView]);  
    
    
    return (
        <div className='Banner'  ref={ref}>
            <div className='banner-box' id="banner">
                <div className='line-text'>
                    <hr className='line' />
                    <p className='text'>TRUST AND RECOMMEND</p>
                </div>
                <h1 className='head'>
                Paris-Liverpool: A classic match|
                </h1>
                <button className='read-more'>Read More</button>
            </div>
        </div>
    );
}

export default Banner;