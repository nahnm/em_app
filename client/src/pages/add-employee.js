import React, { useState } from 'react';
import { useHistory } from "react-router-dom";



export const AddEmployee = () => {

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('');
    const [pay, setPay] = useState('');

    const history = useHistory()

    const addEmployee = async () => {

        const newEmployee = {first, last, email, status, pay};

        const response = await fetch('/api', {
            method: 'POST',
            body: JSON.stringify(newEmployee),
            headers: {'Content-type': 'application/json'},
        });

        if(response.status === 201) {
            alert("Successfully added the employee!");
        } else {
            alert(`Failed to add employee, status code = ${response.status}`);
        }
        history.push("/");

    };


    return (
        <div>
            <input
                type="text"
                placeholder="First Name"
                value={first}
                onChange={e => setFirst(e.target.value)} />
            <input
                type="text"
                value={last}
                placeholder="Last Name"
                onChange={e => setLast(e.target.value)} />
            <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)} />
            <input
                type="text"
                placeholder="Employment Status"
                value={status}
                onChange={e => setStatus(e.target.value)} />
            <input
                type="number"
                placeholder="Hourly Pay"
                value={pay}
                onChange={e => setPay(e.target.value)} />
            <button onClick={addEmployee}> Add </button>
        </div>
    );
}

export default AddEmployee;