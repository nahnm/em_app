import React from 'react';

function EmployeeRow({persons, onDelete, onEdit}) {

    return (
        <tr>
            <td>{persons.first_name}</td>
            <td>{persons.last_name}</td>
            <td>{persons.email}</td>
            <td>{persons.status}</td>
            <td>{persons.hourly_pay}</td>
            <td> <whatever react edit icon onClick= {() => onEdit(persons)}/> </td>
            <td> <whatever react trash icon onClick ={()=> onDelete(persons._id)}/></td>
        </tr>


    );
}

export default EmployeeRow;