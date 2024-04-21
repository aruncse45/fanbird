import "@/styles/globals.scss";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import styles from "./layout.module.scss";
import {Container} from "@mui/material";
import cx from "classnames";
import Logo from "@/assets/images/logo.jpeg"

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "FanBird",
    description: "An user-facing app which will increase fan engagement in any sports",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={cx(inter.className, styles.body)}>
        <div className={styles.header}>
            <Container className={styles.headerContainer} disableGutters>
                <Header/>
            </Container>
        </div>
        {children}
        <Footer/>
        </body>
        </html>
    );
}
