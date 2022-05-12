import React, {useEffect, useState} from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios, { Axios } from 'axios'
import { useParams } from "react-router-dom";

function Payment() {
    let [responseData, setResponseData] = useState('')
    let cost;
    const initialOptions = {
        "client-id": "AcLQTK_KwlpqzGOdZbh0lzld98nLQ_CizIixaDFqChJYecC5BExJ-6tiqu7XzZG0-eV8IJAydc8lSTgJ",
        currency: "GBP"
        
    };

    const {id} = useParams();
    console.log(id);

     useEffect(() => {
        axios.post("http://localhost:4005/getPrice", {
            id: id
        })
        .then((response)=>{

            // setResponseData(response.data[0].cost)
            console.log(response.data[0].cost)
            cost = response.data[0].cost
        })
        .catch((error) => {
            console.log(error)
        })
     }, [])
    const updateOrder = (order) => {
        axios.post("http://localhost:4005/putStatus", {
            status: order.status
        }).then((response)=> {
            console.log(response)
        }).catch((err) => {
            console.log(err)
        })
    }
    
    return(
            <div style={{textAlign: "center"}}>
            <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons style={{ color: "blue", height: 48, width: 70, tagline: false, shape: "pill" }} 
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
                    console.log("order", order);
                    const status =  updateOrder(order);
                    console.log(status)
                   
                }}
                />
            </PayPalScriptProvider>
            </div>
        );
    
}

export default Payment;