import React from 'react'

import {CartItemContainer,CartItemImage,ItemDetailContainer} from './cart-item.styles'

const CartItem = ({item:{imageUrl,price,name,quantity}})=>(
    <CartItemContainer >
        <CartItemImage src={imageUrl} alt='item'/>
        <ItemDetailContainer>
            <span>{name}</span>
            <span>{quantity} * ${price}</span>
        </ItemDetailContainer>
    </CartItemContainer>
);
export default CartItem
