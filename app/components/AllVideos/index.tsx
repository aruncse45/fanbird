'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./AllVideos.module.scss"
import {Typography} from "@mui/material";

const AllVideos = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Typography fontWeight="600" fontSize={24} color="white" className={styles.title}>All Games</Typography>
            <Slider {...settings} className={styles.slider}>
                <iframe width="1600" height="200" src="https://www.youtube.com/embed/6cyWeWlDd-s?start=90"
                        title="Manchester City (3) 1-1 (4) Real Madrid | HIGHLIGHTS | Champions League" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="1600" height="200" src="https://www.youtube.com/embed/6cyWeWlDd-s"
                        title="Manchester City (3) 1-1 (4) Real Madrid | HIGHLIGHTS | Champions League" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="1600" height="200" src="https://www.youtube.com/embed/6cyWeWlDd-s"
                        title="Manchester City (3) 1-1 (4) Real Madrid | HIGHLIGHTS | Champions League" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="1600" height="200" src="https://www.youtube.com/embed/6cyWeWlDd-s"
                        title="Manchester City (3) 1-1 (4) Real Madrid | HIGHLIGHTS | Champions League" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="1600" height="200" src="https://www.youtube.com/embed/6cyWeWlDd-s"
                        title="Manchester City (3) 1-1 (4) Real Madrid | HIGHLIGHTS | Champions League" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="1600" height="200" src="https://www.youtube.com/embed/6cyWeWlDd-s"
                        title="Manchester City (3) 1-1 (4) Real Madrid | HIGHLIGHTS | Champions League" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                <iframe width="1600" height="200" src="https://www.youtube.com/embed/6cyWeWlDd-s"
                        title="Manchester City (3) 1-1 (4) Real Madrid | HIGHLIGHTS | Champions League" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </Slider>
        </div>
    );
}

export default AllVideos;
