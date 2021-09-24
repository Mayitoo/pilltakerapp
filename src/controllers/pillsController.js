const controller = {}
const connection = require('../database')
let messages ="";

controller.RenderPillView = async(req, res) =>{
    const pills =  await connection.query("select * from pill")
    console.log(pills)
    res.render('index',{
        pills, messages
    })
}

controller.savePill = async(req, res)=>{
   
    const {pname, dexpire,dtakei,dtakef,image,schedulee} = req.body
    console.log(pname)
    const newPill = {pname,dexpire,dtakei,dtakef,image,schedulee}
    try {
        await connection.query('insert into pill set ?',[newPill]) 
        messages ="Success. Pill Saved"
        res.redirect('/')
    } catch (error) {
        messages ="Error. Something wen't wrong"
        res.redirect('/')
        console.log(error)
    }
}

controller.editPill = async(req, res)=>{
    const {id} = req.params;
    const {pname, dexpire,dtakei,dtakef,image,schedulee} = req.body
    const newPill = {pname,dexpire,dtakei,dtakef,image,schedulee}
    try {
        await connection.query("update pill set ? where id = ?",[newPill, id])
        messages ="Success. Pill info changed"
        res.redirect('/') 
    } catch (error) {
        messages ="Error. Something wen't wrong"
        res.redirect('/')
        console.log(error)
    }
}

controller.deletePill = async(req, res) =>{
    const {id} = req.params;
    try {
        await connection.query("delete from pill where id = ?",[id])
        messages ="Success. Pill deleted"
        res.redirect('/')
    } catch (error) {
        messages ="Error. Something wen't wrong"
        res.redirect('/')
        console.log(error)  
    }
}


module.exports = controller