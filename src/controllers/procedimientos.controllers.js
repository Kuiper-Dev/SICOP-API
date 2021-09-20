const connection= require ('../database/connection');
procedimientoCtrl={}
procedimientoCtrl.getTipoProcedimiento = async (req, res)=>{
    const pool = await connection.getConnection;
    const result =await pool.request().query('EXEC REP_Procedimientos');
    console.log(result);
    res.json(result.recordset);
};

module.exports=procedimientoCtrl;