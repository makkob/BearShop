import React from "react";
import styles from "./AdminPanel.module.css";

export default function AdminPanel() {
    return (
        <>

            <div className={styles.header}>
                {/* Левая часть хєдера */}
                <div className={styles.headerLeft}>
                    {/* menu */}
                    <div>menu</div>
                    {/* link to call */}
                    <a href="">
                        <img className={styles.IMG} src="https://freesvg.org/img/molumen_phone_icon.png" alt="pyvnagavan" />
                    </a>
                    <div className={styles.space} />
                    <a href="">
                        <div className={styles.number}>
                            +380639356317
                        </div>
                    </a>
                </div>

                {/* Центральная часть хєдера */}
                <div className={styles.headerMiddle}>
                    {/* link to index */}
                    <a href="./index.js"><img
                        className={styles.pyvnagavan}
                        src={require("./img/pyvnagavan.png")}
                        alt="pyvnagavan" />
                    </a>
                </div>
                {/* Правая часть хєдера */}
                <div className={styles.headerRight}>
                    {/* day or night */}
                    <img
                        className={styles.icon}
                        src="https://cdn.iconscout.com/icon/free/png-256/sun-1767847-1502100.png" />
                    <label className={styles.themeSelector}>
                        <input type="checkbox" /> <div></div>
                    </label>
                    <img
                        className={styles.icon}
                        src="https://cdn.iconscout.com/icon/free/png-256/moon-456-433595.png" />

                    <div className={styles.space} />
                    {/* chose your languages */}
                    <img
                        className={styles.icon}
                        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/322/flag-ukraine_1f1fa-1f1e6.png" />
                    <label className={styles.languageSelector}>
                        <input type="checkbox" />
                    </label>
                    <img
                        className={styles.icon}
                        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/twitter/322/flag-united-kingdom_1f1ec-1f1e7.png" />

                    <div className={styles.space} />
                </div>
            </div>
            {/* menu bar left */}
            <div className={styles.menu}>
                <ul className={styles.ulMenu}>
                    <li className={styles.liMenu}>1</li>
                    <li className={styles.liMenu}>2</li>
                    <li className={styles.liMenu}>3</li>
                    <li className={styles.liMenu}>4</li>
                    <li className={styles.liMenu}>5</li>
                </ul>
            </div>
            <div className={styles.bodyRightContent}>
            <a href="">контент</a>
            <ul>
                <li>список хуйни</li>
                </ul>
                <div className={styles.HuynaHuyney}>хуйня хуйней</div>
            </div>
            <div className={styles.footer}>
                <div className={styles.footerLeft}>
                    <a href="">ссилка раз</a></div>
            
            </div>
            
        </>
    );
}
