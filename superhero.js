// let url='https://superheroapi.com/api/access-token/character-id';

//function load thhe list of the super hero name
function load(){   
    for(let i=1;i<=731;i++){
        $.ajax({
            //method 
            type: "GET",
            // contentType: "application/json; charset=utf-8",
            // dataType: "dataType",
            //url of the superhero that gives json response back to us
            url: "https://www.superheroapi.com/api.php/1230190087334410/"+i,
            
            success: function (data) {
                
                console.log(data.name);
                //creating and appending the  list attribute into the list
                $('<li></li>',{
                    text:data.name,
                    class:'superhero',
                    onclick:'get_superhero('+i+')'
                }).appendTo('#list');;

            }
        });
                
    }
}

//search the input from the list and filter the results
function search(){
    //get the input value 
    let input = document.getElementById('search').value;
    //convert the input to lowerrcase
    input= input.toLowerCase();
    let x= document.getElementsByClassName('superhero');

    for(i=0;i<x.length;i++){
        //filter the list that includes input character display them 
        if (x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="list-item";
        } else {
            x[i].style.display="none";
        }
    }
}

//function to get the super hero image and name
function get_superhero(i){
    $.ajax({
        type: "GET",
        url: "https://www.superheroapi.com/api.php/1230190087334410/"+i,
        success: function (data) {
            
            //set the attributes and get the data from the url
            //set the super hero image
            $('#superhero_image').attr("src",data.image.url);
            //set the name of the super hero
            $('#superhero_name').text(data.name);
            ///set the link for next page that displays superhero bio
            $('#superhero_name').attr("href","superhero_bio.html?id="+i);
            //set the button onclick attribute
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

//add to fav function 
function Add_to_fav(i){
    $.ajax({
        type: "GET",
        url: "https://www.superheroapi.com/api.php/1230190087334410/"+i,
        success: function (data) {
            // var m=document.getElementById('superhero_image');
            // m.setAttribute("src", data.image.url);
            
            //add the list attribute into the fav superhero list
            $('<li></li>',{
                id:"superhero"+i,               
                class:"fav_superhero"
            }).appendTo('#fav_super');
            //get the image 
            $('<img>',{
                src:data.image.url,
                class:"fav_superhero_image",
            }).appendTo('#superhero'+i);
            //get the name
            $('<h1></h1>',{
                text:data.name,
                // class:"fav_superhero_image",
            }).appendTo('#superhero'+i);
            //button to  remove the super hero from favorite
            $('<button></button>',{
                text:"remove",
                onclick:`document.getElementById("superhero${i}").remove()`,
                class:'button'
                // class:"fav_superhero_image",
            }).appendTo('#superhero'+i);
        }
    })
}


//call the load function
load();
