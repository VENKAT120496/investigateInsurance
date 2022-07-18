import React from 'react';
import { Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../modules/home/home.module.scss';
import '../modules/home/gallery.scss';

function Gallery() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 2
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2
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
    return (
        <Row className={styles.galleryInnerContainer + " " + "gallery"}>
            <img className={styles.bgImg} src={require('../assets/images/gallery.png')} alt="contact_Us" />
            <div className={styles.galleryTitle}>GALLERY</div>
                <Carousel 
                    responsive={responsive} 
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    className={styles.galleryCarousel}
                >   
                    <div className={styles.carouselGalleryStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/gallery1.png')} alt="gallery1" />
                    </div>
                    <div className={styles.carouselGalleryStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/gallery2.png')} alt="gallery2" />
                    </div>
                    <div className={styles.carouselGalleryStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/gallery1.png')} alt="gallery1" />
                    </div>
                    <div className={styles.carouselGalleryStyles}>
                        <img className={styles.imgItem} src={require('../assets/images/gallery2.png')} alt="gallery2" />
                    </div>
                </Carousel>
        </Row>
    );
}

export default Gallery;