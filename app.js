const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;

const methodOverride = require("method-override");
const todoSchema = require("./models/tododata");
const mongoose = require("mongoose");
const db = require("./database/db");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.get("/", async (req, res) => {
  const tododata = await todoSchema.find();
  res.render("index", { tododata });
});

app.post("/", async (req, res) => {
  const content = req.body;

  try {
    await todoSchema.create(content);
    console.log(content);
    res.redirect("/");
  } catch (error) {
    console.error(error);
  }
});



app.get('/edit/:id',async(req,res)=>{
  const todo =  await todoSchema.findById({_id:req.params.id});
  res.render('edit',{todo})
})

app.put('/edit/:id',async(req,res)=>{
  try {
    await todoSchema.findOneAndUpdate({_id:req.params.id},{content:req.body.content})
    res.redirect('/')
  } catch (error) {
    console.error(error)
  }
})

app.delete('/delete/:id',async(req,res)=>{
  try {
    await todoSchema.findOneAndDelete({ _id: req.params.id})
    res.redirect('/')
  } catch (error) {
    console.error('error', error);
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
