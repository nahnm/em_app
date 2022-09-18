var db = require('./server.js');

// get list of all employees
const getEmployees = (req, res) => {
	
	db.query('SELECT * FROM employees', (err, result) => {
		if (err) { console.log(err);
		} 
		res.status(203).json(result); });
		
	};



// get a single employee by id
const getEmployeeById = (req, res) => {

	const id = parseInt(req.parems._id)
	de.query('SELECT * FROM employees WHERE id = ?', [id], (err, result) => {
 
		if(err) { console.og(err) }
		res.status(203).json(result);
	});
	
};


//add an employee
const createEmployee = (req, res) => {
	const = {first, last, email, status, pay} = req.body

	db.query('INSERT INTO employees (first, last, email, status, pay) VALUES ($1, $2, $3, $4, $
		5)', [first, last, email, status, pay], (err, result) => {
		
			if (err) { console.log(err);}
			res.status(203).send(`Employee added with ID: ${result}`)
});
		
};



//update employee info
const updateEmployee = (req, res) = > {

	const id = parseInt(req.params._id)
	const = {first, last, email, status, pay} = req.body
	db.query("UPDATE employees SET first = $1, last = $2, email = $3, status = $4, pay = $5 WHERE id = $6,
	[first, last, email, status, pay, id], (err, result) => {
	
			console.log(err);}
	res.status(203).send(`Employee updated with ID: ${id}`);
  })													
};



//delete an employee
const deleteEmployee = (req, req) = > {

	const id = parseInt(req.params._id)
	db.query("DELETE FROM Employees WHERE id = ?, [id], (err, result) => {
 
 		if(err) { console.log(err);}
  		res.status(203)send(`Employee deleted with ID: ${id}`);
 });
};

module.exports = {
	getEmployees,
	getEmployeeById,
	createEmployee,
	updateEmployee,
	deleteEmployee,
}