'use client'
import React, { useEffect, useState, useCallback } from 'react';
import './burgers.css';

const YourComponent: React.FC = () => {
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [navHeight, setNavHeight] = useState(0);
    const [bodySlide, setBodySlide] = useState(false);
    const [subNavVisible, setSubNavVisible] = useState<{ [key: string]: boolean }>({});

    useEffect(() => {
        const handleResize = () => {
            setScreenHeight(window.innerHeight);
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        setNavHeight(document.getElementById('main-nav')?.offsetHeight || 0);
    }, []);

    useEffect(() => {
        const delayIncrement = 100;
        let delay = 300;

        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach((item) => {
            (item as HTMLElement).style.transitionDelay = `${delay}ms`;
            delay += delayIncrement;
        });
    }, []);

    const handleBunClick = useCallback(() => {
        closeOut();
    }, []);

    const handleContentClick = useCallback(() => {
        if (bodySlide) {
            closeOut();
        }
    }, [bodySlide]);

    const handleArrowedClick = (index: number) => {
        setSubNavVisible((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    const closeOut = () => {
        setBodySlide((prev) => !prev);
        document.body.classList.toggle('scroll-jam');
        document.getElementById('sidebar')?.classList.toggle('nav-slide');
        document.getElementById('container')?.classList.toggle('body-slide');
        document.querySelectorAll('.nav-item').forEach((item) => {
            item.classList.toggle('item-slide');
            item.classList.remove('selected');
        });
        document.querySelectorAll('.sub-nav').forEach((subNav) => {
            (subNav as HTMLElement).style.display = 'none';
        });
        triangleResize();
    };

    const triangleResize = () => {
        const triangles = document.querySelectorAll('.triangle');
        const screenHeight = window.innerHeight;
        const screenWidth = window.innerWidth;
        const navHeight = document.getElementById('main-nav')?.offsetHeight || 0;
        const triangleHeight = (screenHeight - navHeight) * 2;
        const triangleWidth = bodySlide ? (screenWidth - 300) * 2 / 3 : (screenWidth * 2) / 3;

        triangles.forEach((triangle) => {
            (triangle as HTMLElement).style.transition = '300ms ease';
            (triangle as HTMLElement).style.borderWidth = `${triangleHeight}px ${triangleWidth}px 0 0`;
        });
        if (!bodySlide) {
            setTimeout(() => {
                triangles.forEach((triangle) => {
                    (triangle as HTMLElement).style.transition = 'none';
                });
            }, 300);
        }
    };

    useEffect(() => {
        triangleResize();
    }, [screenHeight, screenWidth, navHeight, bodySlide]);

    return (
        <div id="container">
            <div id="main-nav">Main Nav</div>
            <div id="content" style={{ height: screenHeight - navHeight, marginTop: navHeight }}>
                <div className="left-burger">
                    <h2>Left Burger</h2>
                    <div className="triangle" />
                </div>
                <div className="right-slider">
                    <h2>Right Slider</h2>
                </div>
                <div id="sidebar">
                    <div id="mobile-nav">
                        <div className="mobile-logo">Logo</div>
                        <ul>
                            {Array.from({ length: 5 }, (_, i) => (
                                <li
                                    key={i}
                                    className={`nav-item ${subNavVisible[i] ? 'selected' : ''} ${i % 2 === 0 ? 'arrowed' : ''}`}
                                    onClick={() => handleArrowedClick(i)}
                                >
                                    <h3>Nav Item {i + 1}</h3>
                                    {i % 2 === 0 && (
                                        <ul className="sub-nav" style={{ display: subNavVisible[i] ? 'block' : 'none' }}>
                                            <li className="sub-nav-item">
                                                <h4>Sub Nav Item 1</h4>
                                            </li>
                                            <li className="sub-nav-item">
                                                <h4>Sub Nav Item 2</h4>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div id="bun" onClick={handleBunClick}>
                <div className="mmm-burger"></div>
            </div>
        </div>
    );
};

export default YourComponent;
