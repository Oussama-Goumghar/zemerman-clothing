import React from 'react';

import {connect} from 'react-redux';

import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from "../../redux/cart/cart.actions";

import {createStructuredSelector} from 'reselect';

import {withRouter} from 'react-router-dom';

import {CartDropdownContainer,CartDropdownButton,CartItemsContainer,EmptyMessageContainer} from './cart-dropdown.styles'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <CartDropdownContainer >
        <CartItemsContainer >
            {cartItems.length ? (
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem}/>
                ))) : (
                <EmptyMessageContainer >YOUR CART IS EMPTY</EmptyMessageContainer>
            )}
        </CartItemsContainer>

        <CartDropdownButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden())
        }}>
            GO TO CHACKOUTE
        </CartDropdownButton>


    </CartDropdownContainer>
);

const mapSateToProps= createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapSateToProps)(CartDropdown));

