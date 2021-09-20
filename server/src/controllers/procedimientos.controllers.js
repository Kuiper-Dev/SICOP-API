const connection= require ('../database/connection');
procedimientoCtrl={}
const getTipoProcedimiento = async (req, res)=>{
    const pool = await connection.getConnection;
    const result =await pool.request().query('SELECT 1');
    console.log(result);
    res.json(result.recordset);
};

module.exports= getTipoProcedimiento;