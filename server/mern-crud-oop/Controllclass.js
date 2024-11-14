const Employee = require('./EmployeeModels');

class EmployeeController {
    constructor() {
        this.EmployeeModels = new Employee();
    }



    async createEmployee(req, res) {
        try {
            const employee = await this.EmployeeModels.create(req.body);
            res.status(201).json({ success: true, data: employee });
        } catch (error) {
            
            console.error("Error creating employee:", error); 
            res.status(400).json({ success: false, error: error.message });
        }
    }

    async getEmployees(req, res) {
        try {
            const employees = await this.EmployeeModels.read();
            res.status(200).json({ success: true, data: employees }); 
        } catch (error) {
            console.error("Error fetching employees:", error); 
            res.status(400).json({ success: false, error: error.message });
        }
    }

    async updateEmployee(req, res) {
        try {
            const employee = await this.EmployeeModels.update(req.params.id, req.body);
            if (!employee) {
                return res.status(404).json({ success: false, error: "Employee not found" });
            }
            res.status(200).json({ success: true, data: employee });
        } catch (error) {
            console.error("Error updating employee:", error); 
            res.status(400).json({ success: false, error: error.message });
        }
    }

    async deleteEmployee(req, res) {
        try {
            const result = await this.EmployeeModels.delete(req.params.id);
            if (!result) {
                return res.status(404).json({ success: false, error: "Employee not found" });
            }
            res.status(204).send(); 
        } catch (error) {
            console.error("Error deleting employee:", error); 
            res.status(400).json({ success: false, error: error.message });
        }
    }
}

module.exports = EmployeeController;
