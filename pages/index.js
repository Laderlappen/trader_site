import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>DB Capital</title>
                <meta name="description" content="DB Capital Website" />
                <link rel="icon" href="/dart-arrow.svg" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Dream Big Capital</h1>

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
            </main>

            <footer className={styles.footer}>
                Powered by{" DB Capital "}
            </footer>
        </div>
    );
}
