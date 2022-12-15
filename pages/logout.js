import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { useAuth } from "../components/auth/auth";

const Logout = () => {
    const router = useRouter();
    const auth = useAuth();

    const signOut = (event) => { 
        event.preventDefault();
        auth.signOut().then(() => {
            router.push("/");
        });
    };

    return (
        <div className={styles.container}>
            <main className="">
                <h1>Are you sure you want to log out?</h1>
                <form onSubmit={(event) => signOut(event)}>
                    <button type="submit">Yes</button>
                </form>
            </main>
        </div>
    );
};

export default Logout;