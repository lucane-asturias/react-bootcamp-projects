import React from "react";
import "./styles/Page.css";

function Page({ children }) { //extract children from
    return <section className="page">{children}</section>;
}

export default Page;