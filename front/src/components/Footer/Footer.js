import React from "react";

import { NavLink } from "react-router-dom";

import {
  SHOP_PAGE_ROUTE,
  PROMO_PAGE_ROUTE,
  ABOUTUS_PAGE_ROUTE,
  MAP_PAGE_ROUTE,
  LOCATIONS_PAGE_ROUTE,
} from "../../utils/consts";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import StickyFooter from "../StickyFooter";

import styles from "./Footer.module.css";

export default function Footer() {
  const telegramIcon = <FontAwesomeIcon icon={faTelegram} />,
    instagramIcon = <FontAwesomeIcon icon={faInstagram} />,
    facebookIcon = <FontAwesomeIcon icon={faFacebook} />,
    twitterIcon = <FontAwesomeIcon icon={faTwitter} />;

  return (
    <>
      <footer className={styles.siteFooter} id="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>Про нас</h6>
              <li>
                Ми мережа магазинів розливного пива <i>Пивна Гавань</i>
              </li>
              <li>-Наша мета доставити пиво у кожен куточок Киева.</li>
              <li>-Що ми для цього робимо?</li>
              <li>-Запускаемо сайт</li>
              <li>-Хто ми?</li>
              <li>-Ті хто полюбляє свіже розливне пиво</li>
              <li>-Коли ми це робимо?</li>
              <li>-З 10 по 22 згідно з чинного законодавства нашої країни</li>
              <li>Відкриті з 10:00 до 22:00</li>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Контакти</h6>
              <ul className="footer-links">
                <li>
                  <a href="email">info@pyvnagavan.com</a>
                </li>
                <li>
                  <a href="">Адреса</a>
                </li>
                <li>
                  <a href="">Залишити відгук</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Навігація</h6>
              <ul className="footer-links">
                <li>
                  <NavLink to={SHOP_PAGE_ROUTE}>Головна</NavLink>
                </li>
                <li>
                  <NavLink to={PROMO_PAGE_ROUTE}>Акції</NavLink>
                </li>
                <li>
                  <NavLink to={ABOUTUS_PAGE_ROUTE}>Про нас</NavLink>
                </li>
                <li>
                  <NavLink to={MAP_PAGE_ROUTE}>Карта доставки</NavLink>
                </li>
                <li>
                  <NavLink to={LOCATIONS_PAGE_ROUTE}>Ресторани</NavLink>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright &copy; 2023 All Rights Reserved by {" "}
                  <a href="#">Pyvnagavan</a>.
                </p>
              </div>

              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className={styles.socialIcons}>
                  <li>
                    <a className={styles.facebook} href="#">
                      {facebookIcon}
                    </a>
                  </li>
                  <li>
                    <a className={styles.twitter} href="#">
                      {twitterIcon}
                    </a>
                  </li>
                  <li>
                    <a className={styles.instagram} href="#">
                      {instagramIcon}
                    </a>
                  </li>
                  <li>
                    <a className={styles.telegram} href="#">
                      {telegramIcon}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <StickyFooter />
    </>
  );
}
