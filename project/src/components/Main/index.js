import React from "react";
import { Link } from 'react-router-dom';
import './Main.css';

const Main = props => {
    if(props.products) {
        return (<div><RenderProducts products={props.products}/><hr/></div>);
    } else {
        return <RenderLoading />
    }
}

const RenderProducts = props => {
    return props.products.map((product) => {
        return (
            <div className="product">
                <hr/>
                <Link className="productImg" to={`/item/${product.id}`}><img class="img" src={product.image} alt="food"/></Link>
                <div className="productName">
                    <p className="productTitle">{product.name}</p>
                </div>
                <p className="productPrice">{product.price.toLocaleString()}</p>
            </div>
        );
    })
};

const RenderLoading = props => {
    <div>Loading...</div>
};

export default Main;