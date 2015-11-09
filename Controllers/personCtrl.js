var Person = require('../Models/personModel.js');
module.exports = {
    createNewPerson:function(req, res) {
     var newPerson = new Person(req.body);
        newPerson.save(function (err, person) {
         if (err) {
             console.log(err)
             return res.status(500).send(err);
          }
            return res.json(person);
        });
    },
    
    
    getPeople: function(req, res) {
    Person.find({},function (err, persons){
    if (err) {
        console.log(err)
        return res.status(500).send(err);
    }
        return res.json(persons);
    })
    },
    
    
    deletePeople: function(req, res) {
         Person.findByIdAndRemove(req.params.id, function(err, result) {
             console.log(err);
      if (err) return res.status(500).send(err);
      return res.status(200).json(result);
    });
    }
    
    
}