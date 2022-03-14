import React from "react";
import {getBankAccounts} from "../../LocalStorage/LocalStorage";


const NameDataListGenerator = () =>{
return getBankAccounts().map(users=>
<option value={users.name}></option>
    )
}

const AccntNumDataListGenerator = () =>{
    return getBankAccounts().map(users=>
    <option value={users.accountNumber}></option>
        )
    }

export {NameDataListGenerator, AccntNumDataListGenerator}