var Area = require('../Models/areaModel.js');
module.exports = {
    createNewArea:function(req, res) {
     var newArea = new Area(req.body);
        newArea.save(function (err, area) {
         if (err) {
             console.log(err)
             return res.status(500).end();
          }
            return res.json(area);
        });
    }
}