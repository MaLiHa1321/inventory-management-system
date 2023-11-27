import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckForm from './CheckForm';
import { Helmet } from 'react-helmet-async';

const stripePromise = loadStripe(import.meta.env.VITE_payment_Gateway_PK);

const Paymethod = () => {
   
    const payData = useLoaderData()
    const [amount, setAmonut] = useState(payData.amount)

    
    console.log(amount)
    return (
        <div>
              <Helmet>
                <title>InventTech | Payment</title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <CheckForm amount={amount}></CheckForm>

            </Elements>
            
        </div>
    );
};

export default Paymethod;