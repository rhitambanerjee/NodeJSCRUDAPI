var dbConn=require('../../config/db.config')

var Employee=function(employee){
   this.first_name=employee.first_name
   this.last_name=employee.last_name
   this.email=employee.email
   this.mobile_number=employee.mobile_number
}

Employee.getEmployeeByID=(id,result)=>{
   dbConn.query('SELECT * FROM contacts WHERE id=?',id,(err,res)=>{
      if(err){
         console.log('Error while fetching data by id',err)
         result(null,err)
      }
      else{
         result(null,res)
      }
   })
}

Employee.createEmployee=(EmployeeReqData,result)=>{
   dbConn.query('INSERT INTO contacts SET?',EmployeeReqData,(err,res)=>{
      if(err){
         console.log('Error while inserting data')
         result(null,err)
      }
      else{
         console.log('employee data created successfully')
         result(null,res)
      }
   })
}

Employee.updateEmployee=(id,EmployeeReqData,result)=>{
   dbConn.query("UPDATE contacts SET first_name=?,last_name=?,email=?,mobile_number=? WHERE id=?",[EmployeeReqData.first_name,EmployeeReqData.last_name,EmployeeReqData.email,EmployeeReqData.mobile_number,id],(err,res)=>{
      if(err){
         console.log('Error while updating the record')
         result(null,err)
      }
      else{
         console.log("Employee Data Updated successfully")
         result(null,res)
      }
   })
}

Employee.deleteEmployee=(id,result)=>{
   dbConn.query("DELETE FROM contacts WHERE id=?",id,(err,res)=>{
      if(err){
         console.log('Error while deleting',err)
         result(null,err)
      }
      else{
         console.log('data deleted successfully')
         result(null,res)
      }
   })
}
module.exports=Employee