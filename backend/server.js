const app=require('./src/app')
require('dotenv').config()
app.listen(3000,()=>{
    console.log('server is running on http://localhost:3000')
})