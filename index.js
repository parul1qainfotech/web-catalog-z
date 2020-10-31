function urlparam()
{
    const myUrl=new URL(window.location.href)
    const searchValue=document.getElementById("search-input").value;
    myUrl.searchParams.set('q',searchValue);
    window.location.href=myUrl
    console.log(myUrl)
}

function valueMultiply1()
{
    const value=parseInt(document.querySelector("#b1").textContent);
    document.querySelector("#b1").innerHTML=value*10;
}
function valueMultiply2()
{
    const value=parseInt(document.querySelector("#b2").textContent);
    document.querySelector("#b2").innerHTML=value*10;
}
function valueMultiply3()
{
    const value=parseInt(document.querySelector("#b3").textContent);
    document.querySelector("#b3").innerHTML=value*10;
}
function valueMultiply4()
{
    const value=parseInt(document.querySelector("#b4").textContent);
    document.querySelector("#b4").innerHTML=value*10;
}

 function makeGetRequest(path) { 
     axios.get(path).then( 
         (response) => { 
             var result = response.data;
             let images=document.querySelectorAll(".img-text") ;
             for(var i=0;i<images.length;i++)
             {
                images[i].getElementsByTagName("P")[0].innerHTML="Title:  "+result[i]['title'];
                images[i].getElementsByTagName("P")[1].innerHTML="director:  "+result[i]['director'];
                images[i].getElementsByTagName("P")[2].innerHTML="Producer:  "+result[i]['producer'];
             }
             console.log(result); 
         }, 
         (error) => { 
             console.log(error); 
         } 
     ); 
 } 
 makeGetRequest('https://ghibliapi.herokuapp.com/films'); 