'use client'
import React from 'react';
import styles from './neumorphic.module.css'
import {useTheme} from "../../ThemeContext";
import {FaCheck} from "react-icons/fa6";

const Page = () => {
    const { toggleTheme, isDarkTheme  } = useTheme();
    const handleButtonClick = () => {
        toggleTheme();
        document.querySelector("#checkbox-1")?.parentElement?.classList.toggle("checked");
        // document.body.classList.toggle('checked');
    };

    return (
        <div>
            <div className={`${styles.container} ${isDarkTheme ? styles.darkTheme : styles.lightTheme}`}>
                <div className={`${styles.components} ${isDarkTheme ? styles.darkThemeComponents : styles.lightTheme}`}>
                    <div className={`${styles.text} ${isDarkTheme ? styles.darkThemeText : styles.lightThemeText}`}>
                        <h1>123456</h1>
                    </div>
                    <div className={`${styles.checkbox} `}>
                        <div className={`${styles.checkbox__1}`}>
                            <input onChange={handleButtonClick} className={`${styles.input} ${isDarkTheme ? styles.darkThemeInput : styles.lightThemeInput}`} id="checkbox-1" type="checkbox"/>
                            <label className={`${styles.label} ${isDarkTheme ? styles.darkThemeLabel : styles.lightThemeText}`} htmlFor="checkbox-1">
                                <FaCheck/></label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;



