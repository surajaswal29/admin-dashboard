const Employee = require("../models/employeeModel");

// create employee
exports.createEmployee = async(req,res,next)=>{

    const employee = await Employee.create(req.body);

    res.status(201).json({
        success:true,
        employee
    })
}

//Get employee
exports.getEmployeeDetails = async(req,res,next)=>{
    const employee = await Employee.findById(req.params.id);

    if (!employee) {
        return next("employee Not Found!");
    }

    res.status(200).json({
        success: true,
        employee,
    });
}

// Get All employee
exports.getAllEmployee = async(req,res,next)=>{
    const employee = await Employee.find();

    if (!employee) {
        return next("employee Not Found!");
    }
    
    res.status(200).json({
        success: true,
        employee
    });
}

// Update employee
exports.updateEmployee = async (req, res, next) => {

// checking the availability of the employee
  let employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next("employee Not Found");
  }

//if employee exist then update
employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });

    res.status(200).json({
      success: true,
      message:"employee Updated Successfully",
      employee
    });
};

// delete employee
exports.deleteEmployee = async (req, res, next) => {
  
  const employee = await Employee.findById(req.params.id);

  if (!employee) {
    return next("employee Not Found");
  }

  await employee.deleteOne();

  res.status(200).json({
    success: true,
    message: "employee removed!",
  });
 };