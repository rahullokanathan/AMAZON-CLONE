import React from 'react';
import  "./Product.css";
import StarIcon from '@material-ui/icons/Star';

function Product({id, title, image, price, rating}) {
    return(
        <div className="Product">
            <div className="product__info">
            <p>{title}</p>
            <p className="procuct__price">
                <small>E</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
        {Array(rating)
            .fill()
            .map((_) => (
                <StarIcon/>

            ))}
        </div>
        </div>

           <img src={image} alt="" />
             <button>Add to basket</button>

             
        </div>
        );

   
}
export default Product;
