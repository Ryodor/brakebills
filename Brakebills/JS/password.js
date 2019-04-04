function connection()
{
    var login_input = document.getElementById("login1");
    var password_input = document.getElementById("password1");
    login = login_input.value;
    password = password_input.value;
    console.log(login);
    test_log_pwd(login, password);
}


function test_log_pwd(login, password)
{
    regex = /^[a-z]{2,6}_[a-z0-9]$/;
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    date.setTime(date.getTime() + (6*60*60*1000 - (hours % 6)*60*60*1000 - minutes*60*1000 - secondes*1000));
    if (login.match(regex) != null)
    {
	console.log("ok");
	if((password == "Air" && (hours < 6))
	   || (password == "Earth" && (hours >= 6) && (hours < 12))
	   || (password == "Fire" && (hours >= 12) && (hours < 18))
	   || (password == "Water" && (hours >= 18)))
	{
	    document.cookie = "student=" + login + ";expires=" + date;
	}
	else
	{
	    document.cookie = "forbidden=" + true + ";expires=" + date;
	}
    }
    else
    {
	console.log("KO");
	document.cookie = "forbidden=" + true + ";expires=" + date;
    }
    windows.location("home.html");
}
