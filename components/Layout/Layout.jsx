import React, { Fragment } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";

const Layout = (props) => {
    return (
    <Fragment>
        <Header />
        <div>{props.children}</div>
        <Footer />
    </Fragment>
    );
};

export default Layout;