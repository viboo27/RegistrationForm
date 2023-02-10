import React, {useState} from 'react';
import "./Payment.css";


const Payment = ()=>{
    const [slot,setSlot] = useState(0);
    // const selectSlot = (val)=>{
    //     setSlot(val);
    //     console.log(slot);
    // }

    return (
        <div className = 'payment'>
            {console.log(slot)}
            <h1>Select Slot</h1>
            {/* <input type = "email" name="email" value={user.email} placeholder = " Enter Email" onChange={updateUser}></input> */}
            <input type="button" onClick={()=>{setSlot(6);console.log(slot);}} value="6-7AM"/> 
            <input type="button" onClick={()=>{setSlot(7);console.log(slot);}} value="7-8AM"/> 
            <input type="button" onClick={()=>{setSlot(8);console.log(slot);}} value="8-9AM"/> 
            <input type="button" onClick={()=>{setSlot(17);console.log(slot);}} value="5-6PM"/> 
            <div className="button">Pay @500</div>
        </div>
    )
}
export default Payment;