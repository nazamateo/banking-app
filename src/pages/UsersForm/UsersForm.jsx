import React from "react";
import {useState} from "react";

const UserForm =()=>{
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [age, setAge] = useState("")
const [address, setAddress] = useState("")
const [creationDate, setcreationDate] = useState("")
const [accountNumber, setaccountNumber] = useState("")
const [balance, setbalance] = useState("")


const addUserdata = (e)=>{
    e.preventDefault()
    FormData ({name, email, age, address, creationDate, accountNumber, balance})
    setName("")
    setEmail("")
    setAge("")
    setAddress("")
    setcreationDate("")
    setaccountNumber("")
    setbalance("")
    
}
return(
<form onSubmit={addUserdata}>
    <div className="form-grouprow">
        <label for="name" className="form-label">Name</label>
        <div className="form input">
        <input type="text" className="form-fields" id="name" value={name}
        onChange={(e) => setName(e.target.value)}/>
        </div>
    </div>

    <div className="form-grouprow">
        <label for="email" className="form-label">Email</label>
        <div className="form input">
        <input type="text" className="form-fields" id="email" value={email}
        onChange={(e) => setEmail(e.target.value)}/>
        </div>
    </div>

    <div className="form-grouprow">
        <label for="age" className="form-label">Age</label>
        <div className="form input">
        <input type="text" className="form-fields" id="age" value={age}
        onChange={(e) => setAge(e.target.value)}/>
        </div>
    </div>

    <div className="form-grouprow">
        <label for="address" className="form-label">Address</label>
        <div className="form input">
        <input type="text" className="form-fields" id="address" value={address}
        onChange={(e) => setAddress(e.target.value)}/>
        </div>
    </div>

    <div className="form-grouprow">
        <label for="creationDate" className="form-label">Creation Date</label>
        <div className="form input">
        <input type="text" className="form-fields" id="creationDate" value={creationDate}
        onChange={(e) => setcreationDate(e.target.value)}/>
        </div>
    </div>

    <div className="form-grouprow">
        <label for="accountNumber" className="form-label">Account Number</label>
        <div className="form input">
        <input type="text" className="form-fields" id="accountNumber" value={accountNumber}
        onChange={(e) => setaccountNumber(e.target.value)}/>
        </div>
    </div>

    <div className="form-grouprow">
        <label for="balance" className="form-label">Balance</label>
        <div className="form input">
        <input type="text" className="form-fields" id="balance" value={balance}
        onChange={(e) => setbalance(e.target.value)}/>
        </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
)
}

export default UserForm