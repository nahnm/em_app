import React from 'react';
import { Link } from 'react-router-dom';
import EmployeeList from '../components/EmployeeList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';


function Home() {

    const history = useHistory();
    const[employees, setEmployees] = useState([]);


    const onDelete = async _id => {
        const response = await fetch('endpoint, is it /api/or what, delete by ._id', {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('endpoint url');
            const movies = await getResponse.json();
            setEmployees(employees);
        } else {
            console.error('Failed to delete employee with id = ${_id}, status code = ${response.status}');
        }

    }


    const onEdit = async empolyeeToEdit => {
        setEmployeesToEdit(employees);
        history.push('/edit-employee');
    }




    const loadEmployees = asynce () => {
    const response =  await fetch('sql port url', {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    });
    const employees = await response.json();
        setEmployees(employees);
    }

    useEffect(() => {
        loadEmployees();
    }, []);




    return(
        <>
            <EmployeeList persons={employees}
                        onDelete={onDelete}
                        onEdit={onEdit}>
                        </EmployeeList>
            <Link to="/add-employee">Add an employee</Link>
        </>


    );
}

export default Home;