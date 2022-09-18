import React, { useState } from 'react';
import { useHistory } from "react-router-dom";



export const EditEmployee = ({ employeeToEdit }) => {
    const [firstname, setFirstname] = useState(employeeToEdit.first_name);
    const [lastname, setLastname] = useState(employeeToEdit.last_name);
    const [email, setEmail] = useState(employeeToEdit.email);
    const [status, setStatus] = useState(employeeToEdit.status);
    const [pay, setPay] = useState(employeeToEdit.hourly_pay);


    const history =useHistory();


    const editEmployee = asynce() => {
        const editedEmployee = {firstname, lastname, email, status, pay}
        const response = await fetch('api endposint to sql/${employeeToEdit._id}', {
            method:'PUT',
            body:JSON.stringify(editedEmployee),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.status === 200) {
            alert("Successfully edited the employee!");
        } else {
            alert("Failed to edit the employee, status code = ${response.status}");
        }
        history.push('/');

    };



    return (
        <div>
            <input
                type="text"
                value={firstname}
                onChange={e => setFirstname(e.target.value)} />
            <input
                type="text"
                value={lastname}
                onChange={e => setLasatname(e.target.value)} />
            <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input
                type="text"
                value={status}
                onChange={e => setStatus(e.target.value)} />
            <input
                type="number"
                value={pay}
                onChange={e => setPay(e.target.value)} />

            <button
                onClick={editEmployee}> Save </button>
        </div>
        );
    
    };
export default EditMovie;