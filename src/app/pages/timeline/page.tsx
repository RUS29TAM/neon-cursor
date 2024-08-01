import React from 'react';
import styles from './timeline.module.css'
import Link from "next/link";

const Page = () => {
    return (
        <div className={`${styles.body}`}>
                <ul className={`${styles.timeline}`}>

                    <li className={`${styles.li}`}>
                        <Link href={'/pages/neon'}>
                        <div className={`${styles.directionR}`}>
                            <div className={`${styles.flagWrapper}`}>
                                <span className={`${styles.flag}`}>Лешуконский</span>
                                <span className={`${styles.timeWrapper}`}><span className={`${styles.time}`}>27 февраля 2024</span></span>
                            </div>
                            <div className={`${styles.desc}`}>Участие 9 человек.<br/>
                                Принято обращений 5
                            </div>
                        </div>
                        </Link>
                    </li>

                    <li className={`${styles.li}`}>
                        <Link href={'/pages/neon'}>
                        <div className={`${styles.directionL}`}>
                            <div className={`${styles.flagWrapper}`}>
                                <span className={`${styles.flag}`}>Мезенский</span>
                                <span className={`${styles.timeWrapper}`}><span className={`${styles.time}`}>28 февраля 2024</span></span>
                            </div>
                            <div className={`${styles.desc}`}>Участие 8 человек.<br/>
                                Принято обращений 6
                            </div>
                        </div>
                        </Link>
                    </li>

                    <li className={`${styles.li}`}>
                        <Link href={'/pages/neon'}>
                        <div className={`${styles.directionR}`}>
                            <div className={`${styles.flagWrapper}`}>
                                <span className={`${styles.flag}`}>Онежский</span>
                                <span className={`${styles.timeWrapper}`}><span className={`${styles.time}`}>22 марта 2024</span></span>
                            </div>
                            <div className={`${styles.desc}`}>Участие 10 человек.<br/>
                                Принято обращений 8</div>
                        </div>
                        </Link>
                    </li>

                    <li className={`${styles.li}`}>
                        <Link href={'/pages/neon'}>
                        <div className={`${styles.directionL}`}>
                            <div className={`${styles.flagWrapper}`}>
                                <span className={`${styles.flag}`}>Каргопольский</span>
                                <span className={`${styles.timeWrapper}`}><span className={`${styles.time}`}>26 апреля 2024</span></span>
                            </div>
                            <div className={`${styles.desc}`}>Участие 16 человек.<br/>
                                Принято обращений 14</div>
                        </div>
                        </Link>
                    </li>
                </ul>
        </div>
    );
};

export default Page;


