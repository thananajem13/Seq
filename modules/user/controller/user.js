import { json, Op } from "sequelize"
import { productModel } from "../../../DB/model/product.js"
import { userModel } from "../../../DB/model/User.js"

export let findAllUser = async (req, res, next) => {
    try {
        // let { phone } = req.query
        const users = await userModel.findAll({
            include:[{
                model:productModel, 
            }
            ]
           
            // where: { phone }
        }
        )
        res.json({ message: "Done", users })
    } catch (error) {
        res.json({ message: "error", error })
    }
}
export let signUp = async (req, res, next) => {
    try {
        let { email, password, userName } = req.body
        let newUser = await userModel.create({ email, password, userName })
        res.json({ message: "Done", newUser })
    } catch (error) {
        if (error?.original?.errno == 1062) {
            res.json({ message: "email exist", error })


        }
        else {
            res.json({ message: "error: ", error })

        }

    }


}
export let signIn = async (req,res,next)=>{
    try {
        let {password,email }=req.body
    let user = await userModel.findOne({
        where:{
            // email,password
            [Op.and]:[
                {email},
                {password}
            ]
        }
    })
    if(user){
        res.json({message:"Done",user})
    }
    else{
        res.json({message:"err in account details"})
        
    }
} catch (error) {
        res.json({message:"err",error})
        
    }
    
}
export let getUserById = async (req,res,next)=>{
    try {
        let {id} = req.params
        let user = await userModel.findOne({
            where:{id}
        })
        if(user){
        res.json({message:"Done",user})
        }
        else{
            res.json({message:"invalid id",user})
            
        } 
    } catch (error) {
        res.json({message:"err",err})
        
    }

}
export let updateUser = async (req,res,next)=>{
    try {
        let {id} = req.params
    let user =await userModel.update(req.body,{where:{id}})
    user[0]?res.json({message:"Done",user}):res.json({message:"invalid id",user})

    } catch (error) {
        res.json({message:"err",error})
    }
    }
export let deleteUser = async (req,res,next)=>{
    try {
       let {id} = req.params
    let user =await userModel.destroy({where:{id}})
    user?res.json({message:"Done",user}):res.json({message:"invalid id",user})

    } catch (error) {
        res.json({message:"err",error})
    }
    }






