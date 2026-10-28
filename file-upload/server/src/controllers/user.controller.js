const create = (req, res)=>{
    
    try {
    console.log("hello")
console.log(req.body)
 console.log(req.files)
    res.send("ok")
        
    } catch (error) {
        console.log("error is ", error)
    }
}

module.exports = {create}