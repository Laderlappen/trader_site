import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import styled from "styled-components";
import BGImage from "../components/BGImage";
import YoutubeVideo from "../components/YTVideo";
import Modal from "../components/Modal";
import { useState } from "react";

const Wrapper = styled.div`
    z-index: 5;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    //position: fixed;
    //padding-top: 2rem;
    //justify-content: center;
    align-items: center;
    //background-color: brown;
`;

export default function Home() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div>
            <BGImage />
            <Wrapper>
                <div className={styles.main}>
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
                    <h3 className={styles.title3}>Tutorial Video</h3>
                    <YoutubeVideo />
                    <p className={styles.description}>
                        Get started by downloading our trading software:{" "}
                        <code className={styles.code}>
                            <button
                                className={styles.code}
                                onClick={() => setShowModal(true)}
                            >
                                DB Trading Software
                            </button>
                        </code>
                    </p>

                    <Modal onClose={() => setShowModal(false)} show={showModal}>
                        <p className={styles.termstitle}>
                            Terms and Conditions:
                        </p>
                        <p className={styles.terms}>
                            By downloading this trading client you accept that
                            DB Capital or any of its employees or associates are
                            not liable for any financial loss. Use this software
                            at your own risk with money you can afford to lose.
                        </p>
                        <code className={styles.code}>
                            <Link
                                className={styles.code}
                                href="/DB_Trading_Client.exe"
                            >
                                Accept Terms and Download
                            </Link>
                        </code>
                    </Modal>
                    {/* <footer className={styles.footer}>
                        Powered by{" DB Capital "}
                    </footer> */}
                </div>
            </Wrapper>
        </div>
    );
}
