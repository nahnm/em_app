import React from 'react';
import EmployeeRow from './EmployeeRow';


function EmployeeList(persons, {onDelete}, {onEdit}) {

    return (
        <table id="persons">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Status</th>
                    <th>Hourly Pay</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {persons.map((person, i) => <EmployeeRow person={person}
                    onDelete ={onDelete}
                    onEdit = {onEdit}
                    key={i} />)}
            </tbody>
        </table>


    );
}

export default EmployeeList;