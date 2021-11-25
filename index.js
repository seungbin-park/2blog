const express =require('express')
const app=express()
const port =5100
 
const mongoose =require('mongoose')
mongoose.connect('mongodb+srv://tmdqls:tmdqls9885*@blog-make.7zrpj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:false
}).then(() => console.log('mongodb connect'))
  .catch(err => console.log(err))
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listingg on port ${port}!`))