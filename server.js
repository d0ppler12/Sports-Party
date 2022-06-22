const express= require('express');
const app=express();
const axios=require('axios');
const cors=require ('cors');

app.use(cors())
async function tanish(){
    const result=await axios
                .get('https://api.football-data.org/v4/teams/65/matches?status=FINISHED&limit=1',{
                    headers:{
                        'X-Auth-Token': '0b5e58c778604e478484dd085569f742'
                    }
                });
    const d=await result.data;
    console.log(d) 
    return d
}
app.get('/harsh',async(req,res)=>{
    const result=await tanish();
    res.send(result)
})
app.listen(5000,(req,res)=>{
    console.log('Server is Runing')
})
