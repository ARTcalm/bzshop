import React from 'react';
import mainstyles from '../../MainWareHouse.module.css'
import styles from './Slider.module.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { SLIDERPHOTO } from '../../../../consts';

export const Slider = () => {
const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return(
        <div className={mainstyles.SLIDER}>
            <Carousel
            responsive={responsive}
            ssr={true}
            showDots={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            customTransition='transform 1000ms ease-in-out'
            transitionDuration={1000} 
            
            >
                {SLIDERPHOTO.map(slide => (
                    <div key = {slide.id}>
                        <img src={ "./img/" + slide.img} className={styles.slides} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}