import React, {useState} from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function Payment() {

     const cost = 150.00;
    const initialOptions = {
        "client-id": "AcLQTK_KwlpqzGOdZbh0lzld98nLQ_CizIixaDFqChJYecC5BExJ-6tiqu7XzZG0-eV8IJAydc8lSTgJ",
        currency: "GBP"
        
    };

    return(
        
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons style={{ color: "blue", layout: "horizontal", height: 48, tagline: false, shape: "pill" }} 
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                description: "Cinema tickets",
                                amount: {
                                    value: cost
                                }
                            }
                        ]
                    })
                }}
                onApprove={async(data, actions) => {
                    const order = await actions.order.capture();
                    console.log("order", order)

                   
                }}
                />
            </PayPalScriptProvider>
            
        );
    
}

export default Payment;