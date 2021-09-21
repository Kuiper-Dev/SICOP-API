downloadCtrl={}
downloadCtrl.getJSONData = async (req, res) =>{
    
    res.download('src/data/json/'+req.params.id,req.params.id, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Descaragando');
        }
    });
    console.log(__dirname);
};

downloadCtrl.getXMLData = async (req, res) =>{
    
    res.download('src/data/xml/'+req.params.id,req.params.id, function(err){
        if(err){
            console.log(err);
        }else{
            console.log('Descargando');
        }
    });
    console.log(__dirname);
};
module.exports= downloadCtrl;

