import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgslide1 from "/public/img/slider 11.png";
import imgslide2 from '/public/img/slider 22.png';
import imgslide3 from '/public/img/slider 33.png';
import "./CarouselNews.css"
import CarouselCaption from 'react-bootstrap/esm/CarouselCaption';

const CarouselNews = () => {
  return (
    <div>
        <div className='slide'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className='slide1'
                        src={imgslide1}
                        style={{ width:"100%", height:"50%"
                        }}
                    />
                <div className='capt'>
                    <CarouselCaption>
                        <h3> 4 Manfaat Penggunaan Sedotan Kertas Ramah Lingkungan</h3>
                    </CarouselCaption>
                </div>
                </Carousel.Item>
                
                <Carousel.Item>
                    <img
                        className='slide3'
                        src={imgslide3}
                        style={{ width:"100%", height:"50%"
                        }}
                    />
                <div className='capt'>
                    <CarouselCaption>
                        <h3> Bagaimana Proses Daur Ulang Kertas</h3>
                    </CarouselCaption>
                </div>       
                </Carousel.Item>

                <Carousel.Item>
                <img
                        className='slide2'
                        src={imgslide2}
                        style={{ width:"100%", height:"50%"
                        }}
                    />
                <div className='capt'>
                    <CarouselCaption>
                        <h3> Kenali Bahaya Sampah Kertas bagi Lingkungan</h3>
                    </CarouselCaption>
                </div>          
                </Carousel.Item>

                
                
            </Carousel>
        </div>
    </div>
  );
};

export default CarouselNews