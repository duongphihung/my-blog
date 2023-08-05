import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

const About = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image
                    src=""
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1>Digital Storytellers</h1>
                    <h2></h2>
                </div>
            </div>
            <div className={styles.textContainer}></div>
        </div>
    )
}

export default About
