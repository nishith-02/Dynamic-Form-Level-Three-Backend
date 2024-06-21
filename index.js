const express=require('express');
const app=express();
const questions=require('./questions');

app.use(express.json());

const PORT=process.env.PORT || 5000;

app.get('/api/questions',(req,res)=>{
    const surveyType=req.query.surveyType;
    const surveyQuestions=questions[surveyType];
    res.json(surveyQuestions);
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

module.exports=app
