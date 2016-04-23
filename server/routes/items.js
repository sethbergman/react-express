module.exports = function (app){

    var items = [{
        name:"Ice Cream"
    },{
        name:"Waffles"
    },{
        name:"Eggs",
        purchased:true
    },{
        name:"Steak"
    }];

    app.route('/api/items')
    .get(function(req,res){
        res.send(items);
    })
    .post(function(req,res){
        var item = req.body;
        items.push(item);
    })
}
