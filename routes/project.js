exports.viewProject = function(req, res) {
	var name = req.params.name;
		console.log("The project name is: " + name);
	// Controller
	res.render("project", {
		"projectName": name
	});
}

exports.view = function(req, res) {
	res.render("project");
}