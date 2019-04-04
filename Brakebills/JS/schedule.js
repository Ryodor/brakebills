function openDay(evt, dayName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
	tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
	tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
}

function cours_today()
{   
    $.get("http://40.115.42.10:3000/api/selatn_r/ba8d2280-387d-4de0-a9ac-2b938a16c49e/schedule", function(data) {
	var i = 0;
	while (i < data.length - 1)
	{
	    var date_i = new Date(data[i]['date']);
	    var second_date = new Date(data[i + 1]['date']);

	    if (date_i.getHours() > second_date.getHours())
	    {
		var new_date = data[i];
		data[i] = data[i + 1];
		data[i + 1] = new_date;
	    }
	    i = i + 1;
	}

	i = 0;
        while (i < data.length)
        {
	    var br = document.createElement('br');
            var div = document.createElement('div');
            var today = document.getElementById('Today');
            today.appendChild(div);

            var div1 = document.createElement('div');
            div1.id = "date";
            div1.textContent =  "Date : " + data[i]['date'];
            div.appendChild(div1);

            var div2 = document.createElement('div');
            div2.id = "name";
            div2.textContent = "Cours: " + data[i]['name'];
            div.appendChild(div2);
            div.appendChild(br);

            ++i;
        }
    });
    
    animation();
    
}

function animation()
{
    $(".tablinks").rotate({bind:{
	click:function(){
	    $("#Today").rotate({
		angle: 180,
		center: ["50%", "100%"],
		animateTo:0
	    })
	}
    }
			  });

}

