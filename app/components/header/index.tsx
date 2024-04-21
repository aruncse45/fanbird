'use client'
import styles from "./Header.module.scss";
import {LocalPhone, Search} from "@mui/icons-material";
import {Button, Divider, Link, Menu, MenuItem, MenuList, OutlinedInput, Stack, Typography} from "@mui/material";
import cx from "classnames";
import React, {MouseEvent, useState} from "react";
import FlexDiv from "@/components/flexDiv";
import PersonIcon from '@mui/icons-material/Person';
import Image from "next/image";
import Logo from "@/assets/images/logo.png"

const Header = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <FlexDiv
            className={styles.container}
            align="center"
            justify="space-between"
            gap={10}
        >
            <Image src={Logo} alt="logo" width="70" height="70"/>
            <FlexDiv gap={30} align="center" className={styles.links}>
                <Link href="/" underline="none" className={styles.link}>
                    <Typography fontSize={16} fontWeight={600} color="white" noWrap>View360</Typography>
                </Link>
                <Link href="/store" underline="none" className={styles.link}>
                    <Typography fontSize={16} fontWeight={600} color="white" noWrap>Store</Typography>
                </Link>
            </FlexDiv>
            <FlexDiv gap={30}>
                <OutlinedInput
                    placeholder="Search"
                    className={cx(styles.search, styles.searchIconDesktop)}
                    sx={{
                        "& fieldset": {border: "none"},
                    }}
                    endAdornment={
                        <Search opacity={0.6}/>
                    }
                />
                <Button variant="contained" startIcon={<PersonIcon />}>
                    Sign in
                </Button>
            </FlexDiv>

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuList>
                    <MenuItem onClick={handleClose}>Privacy policy</MenuItem>
                    <MenuItem onClick={handleClose}>Warranty</MenuItem>
                    <MenuItem onClick={handleClose}>Shipping</MenuItem>
                    <MenuItem onClick={handleClose}>
                        Returns</MenuItem>
                    <MenuItem onClick={handleClose}>The must read
                    </MenuItem>
                    <MenuItem onClick={handleClose} aria-disabled>Promotion of the mount</MenuItem>
                    <MenuItem onClick={handleClose} aria-disabled>Publish</MenuItem>
                    <MenuItem onClick={handleClose}>Subscribe to the newsletter</MenuItem>
                    <Divider/>
                    <FlexDiv direction="column" gap={8} className={styles.bottomMenu}>
                        <Stack
                            direction="row"
                            alignItems="center"
                        >
                            <LocalPhone fontSize="large" className={styles.icon}/>
                            +445 87 999 000
                        </Stack>
                        <OutlinedInput
                            onClickCapture={(e: any) => {
                                e.stopPropagation();
                                e.preventDefault();
                            }}
                            onKeyDown={(event: any) => {
                                event.stopPropagation();
                            }}
                            placeholder="Type any book here"
                            className={styles.search}
                            sx={{
                                "& fieldset": {border: "none"},
                            }}
                            endAdornment={
                                <Search opacity={0.6}/>
                            }
                        />
                    </FlexDiv>
                </MenuList>
            </Menu>
        </FlexDiv>

    );
};

export default Header;
