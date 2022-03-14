import React from "react";
import { getFromLocalStorage } from "../../../pages/Users/DisplayUsersBalance";

const NameDataListGenerator = () =>{
return getFromLocalStorage.map(users=>
<option value={users.name}></option>
    )
}

const AccntNumDataListGenerator = () =>{
    return getFromLocalStorage.map(users=>
    <option value={users.accountNumber}></option>
        )
    }

export {NameDataListGenerator, AccntNumDataListGenerator}