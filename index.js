var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://corona-virus-world-and-india-data.p.rapidapi.com/api_india",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
		"x-rapidapi-key": "73068bfb16msh7d9166aeccacd1cp17e06djsna131b6219bd5"
	}
}
var ob;
$.ajax(settings).done(function (response) {
	console.log(response);
	setTable(response);


});

function setTable(response){

	var table=document.getElementById("grid");
	var grid="<table><tr><th>State</th><th>Confirmed</th><th>Active</th><th>Deaths</th><th>Recovered</th></tr>";
	var k="<tr><td>"+response["total_values"].state+"</td><td>"+response["total_values"].confirmed+"</td><td>"+response["total_values"].active+"</td><td>"+response["total_values"].deaths+"</td><td>"+response["total_values"].recovered+"</td></tr>";
	grid+=k;

	var states=Object.keys(response["state_wise"]);
	for(var i=0;i<states.length;i++){
		var l="<tr><td>"+response["state_wise"][states[i]].state+"</td><td>"+response["state_wise"][states[i]].confirmed+"</td><td>"+response["state_wise"][states[i]].active+"</td><td>"+response["state_wise"][states[i]].deaths+"</td><td>"+response["state_wise"][states[i]].recovered+"</td></tr>";
		grid+=l;
	}
	grid+="</table>"
	table.innerHTML=grid;

}
