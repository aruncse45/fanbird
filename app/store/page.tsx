import styles from "./page.module.scss";
import {Box, Button, Container, Typography} from "@mui/material";
import Image from "next/image";
import MAImage from "@/assets/images/jerseys/ma.png"
import LiverpoolImage from "@/assets/images/jerseys/liverpool.png"
import MBImage from "@/assets/images/jerseys/mb.png"
import MB1Image from "@/assets/images/jerseys/mb1.png"
import RMImage from "@/assets/images/jerseys/rm.png"
import WhiteShoe from "@/assets/images/shoes/white.png"
import BlackShoe from "@/assets/images/shoes/black.png"
import GreenShoe from "@/assets/images/shoes/green.png"
import BlueShoe from "@/assets/images/shoes/blue.png"
import YellowShoe from "@/assets/images/shoes/yellow.png"

import FlexDiv from "@/components/flexDiv";
import {Favorite} from "@mui/icons-material";
import React from "react";

export default function Home() {
    return (
        <>
            <Container className={styles.main} disableGutters>
                <Typography fontWeight="600" fontSize={24} color="white" className={styles.title}>Jerseys</Typography>
                <FlexDiv className={styles.products} gap={30}>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={MAImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Argentina</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favorite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={LiverpoolImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Liverpool</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favorite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={MBImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favourite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={MB1Image} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona <span>(home)</span></Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favourite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={RMImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Real Madrid</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favourite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={MAImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Argentina</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={LiverpoolImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Liverpool</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={MBImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={MAImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Argentina</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={LiverpoolImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Liverpool</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={MBImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={MAImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Argentina</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={LiverpoolImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Liverpool</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={MBImage} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                </FlexDiv>
                <Typography fontWeight="600" fontSize={24} color="white" className={styles.title}>Shoes</Typography>
                <FlexDiv className={styles.products} gap={30}>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={WhiteShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Argentina</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favorite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={BlackShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Liverpool</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favorite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={GreenShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favourite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={BlueShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favourite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={YellowShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Real Madrid</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Favourite</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={WhiteShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Argentina</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={BlackShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Liverpool</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={GreenShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={BlueShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Argentina</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={BlackShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Liverpool</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={YellowShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={BlueShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Argentina</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={BlackShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Liverpool</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                    <FlexDiv direction="column" className={styles.container}>
                        <Image src={YellowShoe} alt="books-image" className={styles.image}/>
                        <Box sx={{mt: 3}}/>
                        <Typography fontSize={24} fontWeight={600}>Barcelona</Typography>
                        <Box sx={{mt: 1}}/>
                        <Typography fontSize={16} fontWeight={400}>Tori Dunlap</Typography>
                        <Box sx={{mt: 2}}/>
                        <FlexDiv justify="space-between" align="center" fullWidth>
                            <Typography fontSize={20} fontWeight={600}>$20.46</Typography>
                            <Favorite fontSize="large" className={styles.icon}/>
                        </FlexDiv>
                        <Box sx={{mt: 3}}/>
                        <Button variant="outlined" className={styles.viewBooksButton}>
                            Add to cart
                        </Button>
                    </FlexDiv>
                </FlexDiv>
            </Container>
        </>
    );
}