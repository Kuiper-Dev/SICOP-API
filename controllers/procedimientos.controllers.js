const {getConnection} = require('../database/connection');

 const getTipoProcedimientos = async (req, res) =>{
    const pool =await getConnection();
    const result =await pool.request().query('EXEC REP_Procedimientos');
    console.log(result);
    res.json(result.recordset);
};

module.exports={
    getTipoProcedimientos:getTipoProcedimientos
}