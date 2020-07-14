
var urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('id')); // "edit"
let id=urlParams.get('id');
function onload(){
    $.ajax({
        type: "GET",
        url: "https://www.superheroapi.com/api.php/1230190087334410/"+id,
        success: function (data) {
            // var m=document.getElementById('superhero_image');
            // m.setAttribute("src", data.image.url);
            console.log(data);
            $('#superhero_imag').attr("src",data.image.url);
            $('#superhero_nam').text(data.name);
            $('<div></div>',{
                id:"power_stats",
                class:"center"
            }).appendTo('#power');
            $('<h1></h1>',{
                text:"Powerstats"
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Intelligence: "+data.powerstats.intelligence
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Strength: "+data.powerstats.strength
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Speed: "+data.powerstats.speed
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Durability: "+data.powerstats.durability
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Power: "+data.powerstats.power
            }).appendTo('#power_stats');
            $('<h3></h3>',{
                text:"Combat: "+data.powerstats.combat
            }).appendTo('#power_stats');
            
            
        }
    })
}

onload();