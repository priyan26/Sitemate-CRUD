const express = require("express")
const router = express.Router()
const Issue = require("../models/issue")

//get all issues
router.get("/", async(req,res) => {
    try{
        const issues = await Issue.find()
        res.json(issues)
    }catch(e){
        res.send("Issue fetching failed")
    }
})

//create issue
router.post("/", async(req,res) => {
    const issue = new Issue({
        title: req.body.title,
        description: req.body.description
      });

    try{
        await issue.save()
        res.json(issue)
    }catch(e){
        res.send(e)
    }
})

//get one issue
router.get("/:id", async(req,res) => {
    try{
        const issue = await Issue.findById(req.params.id)
        res.json(issue)
    }catch(e){
        res.send("Issue saving failed")
    }
})

//update issue
router.put("/:id/update", async(req,res) => {
    try{
          const updatedFields = {
            title:  req.body.title,
            description: req.body.description
          }

        const updatedIssue = await Issue.findOneAndUpdate({_id:req.params.id}, { $set: updatedFields },{new:true})
        console.log(req.params.id)
        res.json(updatedIssue)
    }catch(e){
        res.send(e)
    }
})

//delete issue
router.delete("/:id", async(req,res) => {
    try{
        const record = await Issue.deleteOne({_id:req.params.id})
        res.json("Issue deleted")
    }catch(e){
        res.send("Issue deleting failed")
    }
})

module.exports = router