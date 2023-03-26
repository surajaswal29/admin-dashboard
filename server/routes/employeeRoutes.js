const express = require("express");
const {createEmployee, getEmployeeDetails, getAllEmployee, updateEmployee, deleteEmployee } = require("../controllers/employeeController");

const router = express.Router();

// create employee
router.route('/create').post(createEmployee);

// get single employee
router.route('/read/:id').get(getEmployeeDetails);

// get All employee
router.route('/readAll').get(getAllEmployee);

// update employee
router.route('/update/:id').put(updateEmployee);

// Delete employee 
router.route('/delete/:id').delete(deleteEmployee);

module.exports = router;