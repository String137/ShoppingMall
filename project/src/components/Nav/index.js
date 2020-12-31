import React from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";

const Navigation = (props, context) => (
    <div className="navigation">
        <div className="inner">
            <Link to="/">Shopping Mall</Link> <br/>
            <Link to="/cart">Cart</Link> <br/>
        </div>
    </div>
);

export default Navigation;