// let url='https://superheroapi.com/api/access-token/character-id';


function load(){   
    for(let i=1;i<=731;i++){
        $.ajax({
            type: "GET",
            // contentType: "application/json; charset=utf-8",
            // dataType: "dataType",
            url: "https://www.superheroapi.com/api.php/1230190087334410/"+i,
            
            success: function (data) {
                
                console.log(data.name);
                $('<li></li>',{
                    text:data.name,
                    class:'superhero',
                    onclick:'get_superhero('+i+')'
                }).appendTo('#list');;

            }
        });
                
    }
}
function search(){
    let input = document.getElementById('search').value;
    input= input.toLowerCase();
    let x= document.getElementsByClassName('superhero');

    for(i=0;i<x.length;i++){
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="list-item";
        } else {
            x[i].style.display="none";
        }
    }
}

function get_superhero(i){
    $.ajax({
        type: "GET",
        url: "https://www.superheroapi.com/api.php/1230190087334410/"+i,
        success: function (data) {
            // var m=document.getElementById('superhero_image');
            // m.setAttribute("src", data.image.url);
            $('#superhero_image').attr("src",data.image.url);
            $('#superhero_name').text(data.name);
            $('#superhero_name').attr("href","superhero_bio.html?id="+i);
            $('#add_to_fav').attr("onclick","Add_to_fav("+i+")");
            // $('<img>',{
            //     src:data.image.url,
            //     class:"superhero_image"
            // }).appendTo('#superhero_dis');
            // $('<h2></h2>',{
            //     text:data.name,
            // }).appendTo('#superhero_dis');
        }
    });
}

function Add_to_fav(i){
    $.ajax({
        type: "GET",
        url: "https://www.superheroapi.com/api.php/1230190087334410/"+i,
        success: function (data) {
            // var m=document.getElementById('superhero_image');
            // m.setAttribute("src", data.image.url);
            
            $('#add_to_fav').attr("onclick","Add_to_fav("+i+")");
            $('<li></li>',{
                id:"superhero"+i,               
                class:"fav_superhero"
            }).appendTo('#fav_super');
            $('<img>',{
                src:data.image.url,
                class:"fav_superhero_image",
            }).appendTo('#superhero'+i);
            $('<h1></h1>',{
                text:data.name,
                // class:"fav_superhero_image",
            }).appendTo('#superhero'+i);
        }
    })
}



load();
