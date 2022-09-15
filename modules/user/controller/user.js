import { userModel } from "../../../DB/model/User.js" 
    
export const findAllUser = async (req, res, next) => {
    try {
          const users = await userModel.findAll({
             }
         )
        res.json({ message: "Done", users })
    } catch (error) {
        res.json({ message: "error", error })
    }
}


 


 


 