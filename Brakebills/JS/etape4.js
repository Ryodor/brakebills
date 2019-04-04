function load_and_create()
{
    $.ajax({
	type : 'GET',
	url : "http://40.115.42.10/api/selatn_r/ba8d2280-387d-4de0-a9ac-2b938a16c49e/classes",
	datatype : "json",
	success : function(data){
	    selecting(data);
	}
    });
}

function selecting(data)
{
    var containing = document.getElementById("Tomorrow");
    var list_registered = document.createElement("DIV");
    list_registered.setAttribute("id", "tomorrow_registered");
    var title = document.createElement("H3");
    title.textContent = "Vous êtes enregistré pour :";
    var title2 = document.createElement("H3");
    title2.textContent = "Ces cours sont disponibles :";
    list_registered.appendChild(title);
    var list_unregistered = document.createElement("DIV");
    list_unregistered.setAttribute("id", "tomorrow_unregistered");
    list_unregistered.appendChild(title2)
    containing.appendChild(list_registered);
    containing.appendChild(list_unregistered);
    count = 0;
    var max = data.length;
    while (count < max)
    {
	var element_to_add = document.createElement("DIV");
	element_to_add.setAttribute("id", count);
	var id = count;
	element_to_add.textContent = data[count]['name'] + " : " + data[count]['date'];
	var element_column = data[count]['registered'];
	if (data[count]['registered'] == true)
	{
	    element_to_add.appendChild(button_add(id, element_column));
	    list_registered.appendChild(element_to_add);
	}
	else
	{
	    element_to_add.appendChild(button_add(id, element_column));
	    list_unregistered.appendChild(element_to_add);
	}
	count = count + 1;
    }
}

function button_add(id, tf)
{
    var button_to_add = document.createElement("BUTTON");
    if (tf == true)
    {
	button_to_add.textContent = "Se désinscrire";
	button_to_add.addEventListener("click", function(){
	    switch_to_unregister(id)
	});
    }
    else
    {
	button_to_add.textContent = "S'inscrire"
	button_to_add.addEventListener("click", function(){
	    switch_to_register(id)
	});
    }
    return button_to_add;
}

function switch_to_register(id)
{
    var selected = document.getElementById("tomorrow_registered");
    console.log(id);
    var node = document.getElementById(id);
    node.parentNode.removeChild(node);
    node.removeChild(node.lastChild);
    var new_item = document.createElement("BUTTON");
    new_item.textContent = "Se désinscrire";
    node.appendChild(new_item);
    selected.appendChild(node);
    new_item.addEventListener("click", function(){
	switch_to_unregister(id);
    });
}

function switch_to_unregister(id)
{
    var selected = document.getElementById("tomorrow_unregistered");
    console.log(id);
    var node = document.getElementById(id);
    node.parentNode.removeChild(node);
    node.removeChild(node.lastChild);
    var new_item = document.createElement("BUTTON");
    new_item.textContent = "S'inscrire";
    node.appendChild(new_item);
    selected.appendChild(node);
    new_item.addEventListener("click", function(){
	switch_to_register(id);
    });
}
