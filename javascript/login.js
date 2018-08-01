/*
Login hardcoded authentication
*/
function login()
{
	var userid = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if(document.getElementById('admin').checked)
	{
		if(userid=="admin@cutm.ac.in" && password=="123@456$8910")
		{
			window.location = "index.html";
		}
		else
		{
			alert("Invalid userid or password");
		}
	}
	else if(document.getElementById('accessing').checked)
	{
		if(userid=="accessing@cutm.ac.in" && password=="123@456$8910")
		{
			window.location = "index.html";
		}
		else
		{
			alert("Invalid userid or password");
		}
	}
	else if(document.getElementById('training').checked)
	{
		if(userid=="training@cutm.ac.in" && password=="123@456$8910")
		{
			window.location = "index.html";
		}
		else
		{
			alert("Invalid userid or password");
		}
	}
	else if(document.getElementById('assessor').checked)
	{
		if(userid=="assessor@cutm.ac.in" && password=="123@456$8910")
		{
			window.location = "index.html";
		}
		else
		{
			alert("Invalid userid or password");
		}
	}
}