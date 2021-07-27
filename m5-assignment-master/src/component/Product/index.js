import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {useLocation} from 'react-router-dom'
import './Product.css';

export default function Product(props) {
    const location = useLocation()
    const cartCheck = location.pathname === '/cart'
    const {
        desc, image: imageSrc, value, price,
        onChangeHandler, index, quantityHandler,
        selectedProduct
    } = props

    const productDescription = !cartCheck ? <>
        <p>
            <span>{desc}</span>
            <span className={'text-danger fw-bold ml-5'}>${price}</span>
        </p>
        <img src={imageSrc} width={150} onClick={() => selectedProduct(index)} alt={desc}/>
    </> : <>
        <img src={imageSrc} width={150} onClick={() => selectedProduct(index)} alt={desc}/>
        <p>
            <span>{desc}</span>
            <span>{price}</span>
        </p>
    </>

    const productQuantity = !cartCheck && <div className={'quantity-handlers'}>
        <button onClick={() => {
            quantityHandler('increase', index)
        }}>
            <FontAwesomeIcon icon={faPlusCircle}/>
        </button>
        <button onClick={() => {
            quantityHandler('decrease', index)
        }}>
            <FontAwesomeIcon icon={faMinusCircle}/>
        </button>
    </div>

    const productDisplay = !cartCheck ? <div className={'quantity-display'}>
        <span>Quantity</span>
        <input type='text' value={value} onChange={(e) => onChangeHandler(index, e)}/>
    </div> : <strong>Quantity : {value}</strong>

    return (<div className={'product-container'}>
        <div className={'product-description'}>
            {productDescription}
        </div>
        <div className={'product-quantity'}>
            {productQuantity}
            {productDisplay}
        </div>
    </div>)
}