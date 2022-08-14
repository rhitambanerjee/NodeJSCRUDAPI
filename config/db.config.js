const mysql=require('mysql')

const dbConn=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'nodemysqlcrud'
})

dbConn.connect(function(error) {
   if(error){
      throw error
   }
   else{
      console.log('Database connected successfully')
   }
})

module.exports=dbConn