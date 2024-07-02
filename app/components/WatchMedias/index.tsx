import FlexDiv from "@/components/flexDiv";
import IphoneIcon from "@/assets/icons/iphone.svg"
import IpadIcon from "@/assets/icons/ipad.svg"
import MacIcon from "@/assets/icons/mac.svg"
import AppleVisionProIcon from "@/assets/icons/applevisionpro.svg"
import AirplayIcon from "@/assets/icons/airplay.svg"
import WebIcon from "@/assets/icons/web.svg"
import styles from "./WatchMedias.module.scss"
import {Typography} from "@mui/material";
import React from "react";
import Image from "next/image";
import Subscription from "@/assets/images/subscription.png"

const WatchMedias = () => {
    return (
        <FlexDiv direction="column" align="center">
            <Typography fontWeight="600" fontSize={40} className={styles.title}>Watch on the go.</Typography>
            <FlexDiv>
                <figure className={styles.figure}>
                    <IphoneIcon/>
                    <figcaption>
                        Apple&nbsp;Vision&nbsp;Pro
                    </figcaption>
                </figure>
                <figure className={styles.figure}>
                    <IpadIcon/>
                    <figcaption>
                        Apple&nbsp;Vision&nbsp;Pro
                    </figcaption>
                </figure>
                <figure className={styles.figure}>
                    <MacIcon/>
                    <figcaption>
                        Apple&nbsp;Vision&nbsp;Pro
                    </figcaption>
                </figure>
                <figure className={styles.figure}>
                    <AppleVisionProIcon/>
                    <figcaption>
                        Apple&nbsp;Vision&nbsp;Pro
                    </figcaption>
                </figure>
                <figure className={styles.figure}>
                    <AirplayIcon/>
                    <figcaption>
                        Apple&nbsp;Vision&nbsp;Pro
                    </figcaption>
                </figure>
                <figure className={styles.figure}>
                    <WebIcon/>
                    <figcaption>
                        Apple&nbsp;Vision&nbsp;Pro
                    </figcaption>
                </figure>
            </FlexDiv>
            <Image src={Subscription} alt="subscription" className={styles.subscription} />
        </FlexDiv>
    )
};

export default WatchMedias;