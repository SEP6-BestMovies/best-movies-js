import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { useAuth } from "../components/auth/auth";
import { setErrorMessage } from "../components/auth/setErrorMessage";
import SmallCardComponentReplace from "../components/UI/SmallCardComponent";
import CardComponent from "../components/UI/CardComponent";
import ComponentItem from "../components/UI/ComponentItem";

const Favorites = () => {
    const router = useRouter();
    const auth = useAuth();

    if (auth.user) {
        const stored = localStorage.getItem("favorites") ? JSON.parse(localStorage.getItem("favorites")) : [];

        return (
            <div className={styles.container}>
                <Head>
                    <title>Favorites</title>
                    <meta name="description" />
                    <link rel="icon" href="/logo.ico" />
                </Head>
                <main className="">
                    <ComponentItem></ComponentItem>
                </main>
            </div>
        );
    }
}

export default Favorites;