import React, {useEffect, useState} from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from 'axios'

function Payment() {
    let [responseData, setResponseData] = useState('')
     let cost;
    const initialOptions = {
        "client-id": "AcLQTK_KwlpqzGOdZbh0lzld98nLQ_CizIixaDFqChJYecC5BExJ-6tiqu7XzZG0-eV8IJAydc8lSTgJ",
        currency: "GBP"
        
    };
    //  const useEffect = () => {
    //      let response = axios.get("http://localhost:4005/getPrice");
    //      console.log(response.data.cost)
    //      cost = response.data
    //  }
    
    const fetchData = (e) => {
        e.preventDefault()
        axios.get("http://localhost:4005/getPrice")
        .then((response)=>{
            // setResponseData(response.data[0].cost)
            console.log(response.data[0].cost)
            cost = response.data[0].cost
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return(
            <div>
                <button onClick={(e)=> fetchData(e)}>RETRIEVE LAST PRICE</button>
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
            </div>
        );
    
}

export default Payment;