function        brakebills_connection()
{
    var a = document.getElementById("titre1");
    a.textContent = "";
    var br = document.createElement("br");
    var br1 = document.createElement("br");
    var form = document.createElement("form");
    form.setAttribute("action", "");
    var but = document.getElementById("body");
    but.appendChild(form);

    var table = document.createElement("table");
    table.setAttribute("style", "width:100%");
    form.appendChild(table);

    var tr = document.createElement("tr");
    table.appendChild(tr);

    var th = document.createElement("th");
    th.id = "login";
    th.textContent = "Login:";
    tr.appendChild(th);
    tr.appendChild(br);

    var th2 = document.createElement("input");
    th2.id = "login1";
    th2.setAttribute("type", "text");
    th2.setAttribute("name", "login");
    th2.setAttribute("placeholder", "login_l");
    tr.appendChild(th2);
    
    var tr1 = document.createElement("tr");
    table.appendChild(tr1);

    var th1 = document.createElement("th");
    th1.textContent = "Password:";
    th1.id = "password";
    tr1.appendChild(th1);
    tr1.appendChild(br1);
    
    var th3 = document.createElement("input");
    th3.id = "password1"
    th3.setAttribute("type", "password");
    th3.setAttribute("name", "Password");
    th3.setAttribute("placeholder", "password");
    tr1.appendChild(th3);

    var th4 = document.createElement("button")
    th4.id = "bouton"
    th4.setAttribute("onclick", "connection()")
    th4.textContent = "Log In";
    tr1.appendChild(th4);
}
