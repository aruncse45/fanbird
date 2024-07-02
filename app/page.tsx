import styles from "./page.module.scss";
import {Container} from "@mui/material";
import VideoSection from "@/components/VideoSection";
import AllVideos from "@/components/AllVideos";
import WatchMedias from "@/components/WatchMedias";

export default function Home() {
    return (
        <>
            <Container className={styles.main} disableGutters>
                <VideoSection/>
                {/*<AllVideos/>*/}
            </Container>
            <div className={styles.medias}>
                <Container className={styles.mediasContainer} disableGutters>
                    <WatchMedias/>
                </Container>
            </div>
        </>
    );
}
