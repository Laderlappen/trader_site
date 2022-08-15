import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";
import BGImage from "../components/BGImage";

const Wrapper = styled.div`
    z-index: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: fixed;
    padding-top: 2rem;
    //justify-content: center;
    align-items: center;
    //background-color: brown;
`;

export default function Home() {
    return (
        <div>
            <BGImage />
            <Wrapper>
                <Head>
                    <title>DB Capital</title>
                    <meta name="description" content="DB Capital Website" />
                    <link rel="icon" href="/DB_Logo_only_image.ico" />
                </Head>

                <div className={styles.titleRow}>
                    <h1 className={styles.title}>Dream Big Capital</h1>
                    <div className={styles.logoImg}>
                        <Image
                            width="90px"
                            height="90px"
                            src="/DB_Logo_only_image_no_back.png"
                            className={"image"}
                        />
                    </div>
                </div>
                <p className={styles.description}>
                    Get started by downloading our trading software:{" "}
                    <code className={styles.code}>
                        <Link
                            classname={styles.code}
                            href="/DB_Trader_Client.exe"
                        >
                            DB Trading Software
                        </Link>
                    </code>
                </p>
                {/* 
                <footer className={styles.footer}>
                    Powered by{" DB Capital "}
                </footer> */}
            </Wrapper>
        </div>
    );
}
