const express =require('express')
const app=express()
const port =5320
const bodyParser=require('body-parser'); 
const { User }=require("./models/User");
const config =require('./config/key');
//body-parser은 클라이언티에서 오는 정보를 서버에서 분서해서 가져올 수 있게 해주는 것
app.use(bodyParser.urlencoded({extended:true}));
//aplication/x-www-form-urlencoded
app.use(bodyParser.json());
//aplication/json

 
const mongoose =require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:false
}).then(() => console.log('mongodb connect'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! 안녕!'))

app.post('/register', (req,res)=>{
  //회원가입 할떄 필요한 정보들을 client에서 가져오면 
  //그것들을 데이터 베이스에 넣어준다.
  const user= new User(req.body)
  user.save((err, user) => {
    if(err) return res.json({ success:false, err})
    return res.status(200).json({
      success:true
    })
  })

})
app.listen(port, () => console.log(`Example app listingg on port ${port}!`))

