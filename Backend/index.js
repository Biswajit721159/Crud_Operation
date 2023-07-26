const mongoose=require('mongoose')
let dbconnect = require("./mongodb");
let express=require('express')
let cors=require('cors')
let app=express()
app.use(express.json());
app.use(cors())

// const path=require('path')

mongoose.connect("mongodb+srv://biswajit2329:T1voipAip4RSgv97@cluster0.fw5wwvc.mongodb.net/student?retryWrites=true&w=majority")

const ProductSceman=new mongoose.Schema({
    name:String,
    Roll:Number,
    Dept:String,
    College_name:String
})


app.get('/',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.find().toArray();
    res.send(result);
})

app.get('/:Roll',async(req,res)=>{
    let data = await dbconnect();
    let result = await data.find({Roll:req.params.Roll}).toArray();
    res.send(result);
})

app.post("/", async (req, resp) => {
    let data = await dbconnect();
    let result = await data.insertOne(req.body);
    resp.send(result)
});


app.put("/", async (req, resp) => {
    let data = await dbconnect();
    let result = await data.updateOne(
        {Roll:req.body.Roll},
        {$set:{name:req.body.name, Dept:req.body.Dept, College_name:req.body.College_name}}
    );
    resp.send(result)
});

app.delete('/',async(req,resp)=>{
    let data=await dbconnect();
    console.log(req.body.Roll)
    let result=await data.deleteMany(
        {Roll:req.body.Roll}
    )
    resp.send({status:"Data is deleted successfully"})
})


// app.use(express.static(path.join(__dirname, 'public')));
// app.get('*',(req,res) => {
//     return res.sendFile(path.join(__dirname, 'public','index.html'));
// });

app.listen(5000)



