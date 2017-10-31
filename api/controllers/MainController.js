'use strict';

var data;

exports.get_all = function(req,res){
	data = '[{"word" : "lorem", "number" : 1},{"word" : "ipsum", "number" : 2},{"word" : "dolor", "number" : 3}]';
	res.send(data);
}

exports.post = function(req, res){
	res.send('You posted: ' + JSON.stringify(req.body));	
}

exports.get = function(req, res){	
	if(!isNaN(req.params.id))
		data = '{"word" : "lorem", "number" : '+ req.params.id +'}';
	else
		data = '{"word" : "' + req.params.id + '", number : 1}';
	res.send(data);
}

exports.update = function(req, res){	
	res.send(req.params.id + ' was updated.');
}

exports.delete = function(req, res){
	res.send(req.params.id + ' was deleted.');
}

