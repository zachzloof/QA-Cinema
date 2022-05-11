import React, { useRef, useEffect } from 'react';

function PayPal() {

    const paypal = useRef()

    useEffect(() => {
        paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units:
                    {
                        description: "Cinema tickets",
                        amount: {
                            currency_code: "GDP",
                            value: 20.00
                        }
                    }
                })
                    
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            }
        }).render(paypal.current)
    }, [])
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    )
}

export default PayPal;