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
import GoalKeeperView from "@/assets/images/angles/goalkeeper.png"
import cx from "classnames";
import FlexDiv from "@/components/flexDiv";

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    const [cameraPosition, setCameraPosition] = useState(1);
    const [currentVideoLink, setCurrentVideoLink] = useState("/videos/sideView.MOV");

    const handleSlide = (cameraPosition: any, videoUrl: any) => {
        const videoStartPoint = videoRef.current?.currentTime >= 43 ? 0 : videoRef.current?.currentTime;
        setCurrentVideoLink(`/videos/${videoUrl}#t=${videoStartPoint}`);
        setCameraPosition(cameraPosition);
    }

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
            <video className={styles.video} ref={videoRef} controls autoPlay muted src={currentVideoLink}/>
            <div>
                <Typography fontWeight="600" fontSize={24} color="white" className={styles.title}>View360</Typography>
                <Slider {...settings} className={styles.slider}>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 1})}
                         onClick={() => handleSlide(1, "cornerView.mp4")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>Corner
                            view</Typography>
                        <Image src={CornerView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 2})}
                         onClick={() => handleSlide(2, "sideView.MOV")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>
                            Side view
                        </Typography>
                        <Image src={LeftView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 3})}
                         onClick={() => handleSlide(3, "frontView.mp4")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>
                            Front view
                        </Typography>
                        <Image src={RightView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 4})}
                         onClick={() => handleSlide(4, "goalKeeperView.mp4")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>Goalkeeper
                            view</Typography>
                        <Image src={GoalKeeperView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 5})}
                         onClick={() => handleSlide(4, "cornerView.mp4")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>Corner
                            view</Typography>
                        <Image src={CornerView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                    <div className={cx(styles.slide, {[styles.isActive]: cameraPosition === 6})}
                         onClick={() => handleSlide(4, "sideView.MOV")}>
                        <Typography fontWeight="600" fontSize={30} color="white" className={styles.angleName}>Side
                            view</Typography>
                        <Image src={LeftView} alt="Angle 1" className={styles.slideImage}/>
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default VideoSection;