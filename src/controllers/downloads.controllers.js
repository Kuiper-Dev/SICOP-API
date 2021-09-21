downloadCtrl={}
downloadCtrl.getJSONData = async (req, res) =>{
    
    res.download('src/data/json/'+req.params.id,req.params.id, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Yean Nice');
        }
    });
    console.log(__dirname);
};
module.exports= downloadCtrl;

