const express= require('express')

const Employeecontroller=require('./Controllclass')

const router = express.Router();
const employeecontroller= new Employeecontroller();

router.post('/Employees',employeecontroller.createEmployee.bind(employeecontroller))
router.get('/Employees',employeecontroller.getEmployees.bind(employeecontroller))
router.put('/Employees/:id',employeecontroller.updateEmployee.bind(employeecontroller))
router.delete('/Employees/:id',employeecontroller.deleteEmployee.bind(employeecontroller))

module.exports=router;

