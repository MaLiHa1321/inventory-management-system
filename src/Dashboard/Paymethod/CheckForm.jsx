import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

import useAuth from "../../hook/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import Swal from "sweetalert2";

const CheckForm = ({amount}) => {
    const [error,setError] = useState('');
    const [clientSecret, setClientSecret] = useState('')
    const [transectionId, setTransectionId] = useState('')
    const stripe = useStripe();
    const elements = useElements();
    const axios = useAxiosPublic()
    const {user} = useAuth();


    useEffect(()=>{
        axios.post('/create-payment-intent', {amount: amount, email: user?.email})
      .then(res => {
        console.log(res.data.clientSecret)
        setClientSecret(res.data.clientSecret)
      })
 
        
    },[amount, axios, user?.email])
    const handleSubmit = async(event) =>{
        event.preventDefault()

        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)
        if(card === null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        if(error){
            console.log('payment error',error)
            setError(error.message);
        }
        else{
            console.log(paymentMethod)
            setError('')
        }

        // confirm payment
        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('ghj',confirmError)
        }
        else{
            console.log(paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                setTransectionId(paymentIntent.id)

                // save the information to the database
                const payment = {
                    email: user?.email,
                    transectionId: paymentIntent.id,
                    amount: amount,
                    date: new Date()
                }

                const res = await axios.post('/payment', payment)

                if(res.data?.paymentResult?.insertedId){
                    Swal.fire("Payment successfull");   
                }
            }
        }
    }
    return (
       <form onSubmit={handleSubmit}>
       <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button type="submit" className="btn btn-primary my-4" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transectionId && <p className="text-green-400">Your transection id is : {transectionId}</p>}

       </form>
    );
};

export default CheckForm;