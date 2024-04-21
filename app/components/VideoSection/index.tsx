'use client'
import styles from './VideoSection.module.scss'
import {InputLabel, MenuItem, OutlinedInput, Select, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import CornerView from "@/assets/images/angles/corner.png"
import LeftView from "@/assets/images/angles/left.png"
import RightView from "@/assets/images/angles/right.png"
import TopView from "@/assets/images/angles/top.png"
import GalleryView from "@/assets/images/angles/gallery.png"
import cx from "classnames";
import FlexDiv from "@/components/flexDiv";

const VideoSection = () => {
    const [videoTimeTrack, setVideoTimeTrack] = useState(12);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    const [cameraPosition, setCameraPosition] = useState(1);
    const [currentVideoLink, setCurrentVideoLink] = useState("https://www.youtube.com/embed/6cyWeWlDd-s?autoplay=1&mute=1&enablejsapi=1&modestbranding=1&amp;title=&amp;&amp;rel=0&amp;controls=0&showinfo=0&fs=0");
    const handleSlide = (cameraPosition) => {
        console.log({videoTime: videoTimeTrack})
        setCameraPosition(cameraPosition);
        setCurrentVideoLink(`https://www.youtube.com/embed/6cyWeWlDd-s?autoplay=1&start=${videoTimeTrack}`);
    }

    useEffect(()=> {
        let interval;
        setTimeout(()=> {
             interval = setInterval(()=> {
                setVideoTimeTrack((prev)=> prev + 1);
            }, 1000)
        }, 10000)

        return () => clearInterval(interval);
    }, [])

    return (
        <div className={styles.videoContainer}>
            <FlexDiv justify="end" align="center" gap={12} className={styles.languageContainer}>
                <Typography fontWeight="600" fontSize={24} color="white">Multilingual commentary</Typography>
                <Select defaultValue="Bangla" labelId="demo-simple-select-helper-label" input={<OutlinedInput/>}
                        className={styles.languageSelect}>
                    <MenuItem name="1" value="Bangla">
                        Bangla
                    </MenuItem>
                    <MenuItem name="2" value="English">
                        English
                    </MenuItem>
                    <MenuItem name="3" value="French">
                        French
                    </MenuItem>
                    <MenuItem name="4" value="Russian">
                        Russian
                    </MenuItem>
                    <MenuItem name="5" value="Japanese">
                        Japanese
                    </MenuItem>
                    <MenuItem name="6" value="...">
                        ...
                    </MenuItem>
                </Select>
            </FlexDiv>
            <iframe width="1700" height="955" src={currentVideoLink}
                    title="Manchester City (3) 1-1 (4) Real Madrid | HIGHLIGHTS | Champions League" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>

            <div>
                <Typography fontWeight="600" fontSize={24} color="white" className={styles.title}>View360</Typography>
                <Slider {...settings} className={styles.slider}>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 1})}
                         onClick={() => handleSlide(1, )}>
                        <Typography fontWeight="600" fontSize={40} color="white" className={styles.angleName}>Corner
                            view</Typography>
                        <Image src={CornerView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 2})}
                         onClick={() => handleSlide(2, )}>
                        <Typography fontWeight="600" fontSize={40} color="white" className={styles.angleName}>
                            Side view
                        </Typography>
                        <Image src={LeftView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 3})}
                         onClick={() => handleSlide(3, )}>
                        <Typography fontWeight="600" fontSize={40} color="white" className={styles.angleName}>
                            Gallery view
                        </Typography>
                        <Image src={RightView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 4})}
                         onClick={() => handleSlide(4, )}>
                        <Typography fontWeight="600" fontSize={40} color="white" className={styles.angleName}>Top
                            Gallery view</Typography>
                        <Image src={GalleryView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 5})}
                         onClick={() => handleSlide(4, )}>
                        <Typography fontWeight="600" fontSize={40} color="white" className={styles.angleName}>Top
                            view</Typography>
                        <Image src={TopView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 6})}
                         onClick={() => handleSlide(4, )}>
                        <Typography fontWeight="600" fontSize={40} color="white" className={styles.angleName}>Front
                            view</Typography>
                        <Image src={GalleryView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default VideoSection;