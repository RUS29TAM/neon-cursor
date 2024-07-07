'use client'
import React, { useEffect } from 'react';
import styles from '@/app/pages/neon/neon.module.css'
// @ts-ignore
import { neonCursor } from 'threejs-toys'


const Page = () => {
    useEffect(() => {
        neonCursor({
            el: document.getElementById('app'),
            shaderPoints: 16,
            curvePoints: 100,
            curveLerp: 0.5,
            radius1: 5,
            radius2: 30,
            velocityTreshold: 10,
            sleepRadiusX: 120,
            sleepRadiusY: 120,
            sleepTimeCoefX: 0.0025,
            sleepTimeCoefY: 0.0025
        });
    }, []);
    return (
        <div className={styles.app} id="app">
            <div id="hero">
                <h1 className={styles.h1}>RUS29TAM<br/>NEXT</h1>
                <a className={styles.a} target="_blank" href="##">@RUS29TAM</a>
            </div>
        </div>
    );
};

export default Page;
