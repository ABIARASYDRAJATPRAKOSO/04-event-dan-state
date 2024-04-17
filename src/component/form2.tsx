import { useState } from "react";

export function Form_2(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName=firstName + ''+ lastName;

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }

    return(
        <>
        <h2>silahkan isi nama lengkap anda</h2>
        <label className="block w-full m-2">
            nama depan:
            <input className="text-sm text-black ml-2 rounded"
            value={firstName}
            onChange={handleFirstNameChange}
            />
        </label>
        <label className="block w-full m-2">
        nama belakang:
            <input className="text-sm text-black ml-2 rounded"
            value={lastName}
            onChange={handleLastNameChange}
            />
        </label>
        <p>Nama Lengkap Anda Adalah : <b className="text-blue-600">{fullName}</b></p>
        </>
    )
}