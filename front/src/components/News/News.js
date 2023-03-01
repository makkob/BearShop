import React from "react";

import {Carousel} from 'react-bootstrap';

import styles from "./News.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function News() {



  return (
    <div className={styles.news} id = "news">
      <div className={styles.newsDiv}>
      <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className={styles.newsIMG}
          src="https://images8.alphacoders.com/413/thumb-1920-413078.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className={styles.newsIMG}
          src="https://images8.alphacoders.com/515/515795.jpg"
          alt="Second slide"
         
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
        
      </div>
    </div>


  );
}
