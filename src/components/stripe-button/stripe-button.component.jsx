import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Z0sCvW56FoGiV6kuDclXuy6900j92Klr1I';

    const onToken=token=>{
        console.log(token);
        alert('Payement Succeful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='ZEMERMAN Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}/>
    )
};

export default StripeCheckoutButton;
