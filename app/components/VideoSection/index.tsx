'use client'
import styles from './VideoSection.module.scss'
import {MenuItem, OutlinedInput, Select, Typography} from "@mui/material";
import React, {useEffect, useState, useRef} from "react";
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
    const videoTimeTrack = useRef(1);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    const [cameraPosition, setCameraPosition] = useState(1);
    const [currentVideoLink, setCurrentVideoLink] = useState("https://www.youtube.com/embed/2rGwti9qGhM?autoplay=1&mute=1&enablejsapi=1&modestbranding=1&amp;title=&amp;&amp;rel=0&amp;controls=0&showinfo=0&fs=0");

    const handleSlide = (cameraPosition: any, videoUrl: any) => {
        setCameraPosition(cameraPosition);
        setCurrentVideoLink(`${videoUrl}?autoplay=1&start=${videoTimeTrack.current}&rel=0&showinfo=0&controls=0`);
    }

    useEffect(() => {
        let interval: any;
        setTimeout(() => {
            interval = setInterval(() => {
                if (videoTimeTrack.current > 46) {
                    videoTimeTrack.current = 1;
                }
                videoTimeTrack.current = videoTimeTrack.current + 1;
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
                    <MenuItem key="1" value="Bangla">
                        Bangla
                    </MenuItem>
                    <MenuItem key="2" value="English">
                        English
                    </MenuItem>
                    <MenuItem key="3" value="French">
                        French
                    </MenuItem>
                    <MenuItem key="4" value="Russian">
                        Russian
                    </MenuItem>
                    <MenuItem key="5" value="Japanese">
                        Japanese
                    </MenuItem>
                    <MenuItem key="6" value="...">
                        ...
                    </MenuItem>
                </Select>
            </FlexDiv>
            <iframe width="1700" className={styles.video} src={currentVideoLink}
                    title="Manchester City (3) 1-1 (4) Real Madrid | HIGHLIGHTS | Champions League" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen/>

            <div>
                <Typography fontWeight="600" fontSize={24} color="white" className={styles.title}>View360</Typography>
                <Slider {...settings} className={styles.slider}>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 1})}
                         onClick={() => handleSlide(1, "https://www.youtube.com/embed/2rGwti9qGhM")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>Corner
                            view</Typography>
                        <Image src={CornerView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 2})}
                         onClick={() => handleSlide(2, "https://www.youtube.com/embed/06TZhvW-HzM")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>
                            Side view
                        </Typography>
                        <Image src={LeftView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 3})}
                         onClick={() => handleSlide(3, "https://www.youtube.com/embed/P8oldycaxyE")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>
                            Front view
                        </Typography>
                        <Image src={RightView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 4})}
                         onClick={() => handleSlide(4, "https://www.youtube.com/embed/l0k2XUDo_vI")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>Goalkeeper
                            view</Typography>
                        <Image src={GalleryView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 5})}
                         onClick={() => handleSlide(4, "https://www.youtube.com/embed/2rGwti9qGhM")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>Corner
                            view</Typography>
                        <Image src={TopView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 6})}
                         onClick={() => handleSlide(4, "https://www.youtube.com/embed/06TZhvW-HzM")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>Side
                            view</Typography>
                        <Image src={GalleryView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default VideoSection;