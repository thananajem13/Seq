import { productModel } from "../../../DB/model/product.js"
import { userModel } from "../../../DB/model/User.js"


export let addProduct = async (req, res, next) => {
    try {
        let { name, description, price, quantity, UserId } = req.body
        let newProduct = await productModel.create({ name, description, price, quantity, UserId })
        if (newProduct) {
            res.json({ message: "Done", newProduct })
        } else {

            res.json({ message: "error" })
        }
    } catch (error) {
        res.json({ message: "catch error", error })

    }

}

export let getAllProd = async (req, res, next) => {
    try {
        let products = await productModel.findAll({
            include: [
                {
                    model: userModel
                }
            ]
        }

        )
        if (products) {
            res.json({ message: "Done", products })

        } else {
            res.json({ message: "err" })

        }

    } catch (error) {
        res.json({ message: "catch error", error })

    }

}
export let updateProduct = async (req, res, next) => {
    try {
        let { id, UserId } = req.params
    let result = await productModel.update(req.body, {
        where: { id, UserId }
    })
    result[0]?res.json({message:"Done",result}):res.json({message:"in-valid productID or auth",result})
    } catch (error) {
        res.json({message:"error",error})
    }
    
}

export let deleteProduct = async(req,res,next)=>{
    try {
         let {id} = req.params
   let result =  await productModel.destroy({
        where:{id}
    })
    result?res.json({message:"Done",result}):res.json({message:"invalid product id",result})
    
    } catch (error) {
        res.json({message:"catch error",error})
    }
   
}