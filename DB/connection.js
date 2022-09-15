import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize('sequelize2', 'root', '', {
    host: "localhost",
    dialect: "mysql"
})
export const dbConn =  async() => {
    return  await sequelize.sync({ alter: true }).then((result)=>{
        console.log(`connected DB ....`);
    }).catch((err)=>{
        console.log(`Fail to connect DB .... ${err}`);
    })
}
