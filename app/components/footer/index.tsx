import FlexDiv from "@/components/flexDiv";
import styles from './footer.module.scss'
import HandshakeIcon from '@mui/icons-material/Handshake';
import Image from "next/image";
import AwsLogo from "@/assets/images/awsLogo.png"
import {Typography} from "@mui/material";
import React from "react";

const Footer = () => {
    return (
        <FlexDiv className={styles.main} justify="center" direction="column">
            <FlexDiv align="center" justify="center" gap={40} className={styles.partners}>
                <img alt="img"
                     className="builder-block builder-277190b39b4344c18621367666b524d6 builder-has-component css-abv2di"
                     builder-id="builder-277190b39b4344c18621367666b524d6"
                     src="https://cdn.builder.io/api/v1/image/assets%2Ffb3ccc876dd442c6ae31d776377e35db%2F963653eb4812434581d08fb180b734f4"/>
                <HandshakeIcon className={styles.handshakeIcon} fontSize="large"/>
                <Image src={AwsLogo} alt="aws logo" height="150" width="150"/>
                <Typography className={styles.language}  fontSize={12} color="white">Bangladesh | United states</Typography>
            </FlexDiv>
            <Typography className={styles.rights}  fontSize={12} color="white">Copyright © 2024 FanBird. All rights
                reserved.</Typography>
            <Typography className={styles.rights}  fontSize={12} color="white">TV & Privacy&nbsp;&nbsp;  | &nbsp;&nbsp; Cookie policy &nbsp;&nbsp; | &nbsp;&nbsp; Support</Typography>
        </FlexDiv>
    );
};

export default Footer;
