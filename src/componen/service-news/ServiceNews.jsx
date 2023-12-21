import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navlist from '../navlist/Navlist'
import ArtikelPage from './artikel/ArtikelPage';
import CarouselNews from './carousel/CarouselNews';
import NewsPage from './news/NewsPage';
import NewsPage2 from './news/NewsPage2';
import NewsPage3 from './news/NewsPage3';
import Footer from '../footer/Footer';



const ServiceNews = () => {
  return (
    <>
        <Navlist />
        <ArtikelPage />
        <CarouselNews />
        <NewsPage />
        <NewsPage2 />
        <NewsPage3 />
        <Footer />
       
        
       
    
    
    </>
  );
};

export default ServiceNews