import React, { useRef, useEffect } from "react";
import { Container } from "reactstrap";
import classes from "./header.module.css";
import Link from "next/link";
import { useAuth } from "../auth/auth.js";

const Header = () => {
    const headerRef = useRef(null);
    const menuRef = useRef(null);
    const auth = useAuth();

    const NAV__LINK = [
        {
            path: "/",
            display: "Home",
        },
        {
            path: "/movies",
            display: auth.user ? "Movies" : "",
        },
        {
            path: "/actors",
            display: auth.user ? "Actors" : "",
        },
        {
            path: "/watched-list",
            display: auth.user ? "Watched" : "",
        },
        {
            path: !auth.user ? "login" : "logout",
            display: !auth.user ? "Login" : "Logout",
        },
        {
            path: "register",
            display: !auth.user ? "Register" : "",
        },
    ];
    
    const headerFunc = () => {
        if (
            document.body.scrollTop > 80 ||
            document.documentElement.scrollTop > 80
        ) {
            headerRef.current.classList.add(`${classes.header__shrink}`);
        } else {
            headerRef.current.classList.remove(`${classes.header__shrink}`);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", headerFunc);

        return () => window.removeEventListener("scroll", headerFunc);
    }, []);

    const toggleMenu = () =>
        menuRef.current.classList.toggle(`${classes.menu__active}`);

    return (
        <header className={`${classes.header}`} ref={headerRef}>
            <Container>
                <div className={`${classes.nav__wrapper}`}>
                    {/* ======== navigation best movies logo ======== */}
                    <div className={`${classes.logo}`}>
                        <img src="..\images\logo.png" alt="logo" width="135px" />
                    </div>

                    {/* ========= nav menu =========== */}
                    <div
                        className={`${classes.navigation}`}
                        ref={menuRef}
                        onClick={toggleMenu} >
                        <div className={`${classes.nav__menu}`}>
                            {NAV__LINK.map((item, index) => (
                                <Link href={item.path} key={index}>
                                    {item.display}
                                </Link>
                            ))}

                            <div className={`${classes.nav__right}`}>
                                <p className=" d-flex align-items-center gap-2 mb-0">
                                    <i className="ri-user-fill"></i>
                                </p>
                            </div>
                        </div>
                    </div>

                    <span className={`${classes.mobile__menu}`}>
                        <i className="ri-menu-line" onClick={toggleMenu}></i>
                    </span>
                </div>
            </Container>
        </header>
    );
};

export default Header;