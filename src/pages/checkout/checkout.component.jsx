import React from 'react';

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors'

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {CheckoutPageContainer,CheckoutHeaderContainer,CheckoutBlockContainer,TotalContainer,WarningContainer} from './checkout.styles'

const CheckoutPage = ({cartItems, total}) => (
    <CheckoutPageContainer className="checkout-page">
        <CheckoutHeaderContainer className="checkout-header">
            <CheckoutBlockContainer className="header-block">
                <span>Product</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer className="header-block">
                <span>Discription</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer className="header-block">
                <span>Quantity</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer className="header-block">
                <span>Price</span>
            </CheckoutBlockContainer>
            <CheckoutBlockContainer className="header-block">
                <span>Remove</span>
            </CheckoutBlockContainer>

        </CheckoutHeaderContainer>

        {cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        ))}

        <TotalContainer className="total">
            <span>TOTAL: ${total}</span>
        </TotalContainer>
        <WarningContainer className='test-warning'>
            *PLEASE USE THE FOLLOWING TEST CREDIT CART FOR PAYMENTS*
            <br/>
            4242 4242 4242 4242 - EXP: 01/20 - CVV : 123
        </WarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
);

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);
