import React from "react";

import Carousel from 'react-bootstrap/Carousel';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./BuyAlso.module.css";

export default function BuyAlso() {
  return (
    <div >
      <h3>Вас також можуть зацікавити:</h3>
      <div className={styles.items}>
      <Carousel >
      <Carousel.Item interval={1000}>
        <img
          className={styles.IMG}
          src="https://cdn2.justwineapp.com/assets/article/2019/08/different-types-of-beer-styles-guide-1800x946.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className={styles.IMG}
          src="https://www.liquor.com/thmb/zzY3QbT5h9S9utBkexhECycXZIc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-519728153-7dca4b18c59f4b1fa3654e4d5c9db884.jpg"
          alt="Second slide"
         
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={styles.IMG}
          src="https://images.immediate.co.uk/production/volatile/sites/30/2022/08/Is-low-alcohol-beer-healthy--40a31a0.jpg?quality=45&resize=960,872"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}
