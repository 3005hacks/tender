function(){
  q = "chicken"; // search query
  
  request = new XMLHttpRequest;
  request.open('GET', 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag='+q, true);
  
  request.onload = function() {
    if (request.status >= 200 && request.status < 400){
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';

      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme2").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';

      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme3").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';

      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme4").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';

      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme5").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';

      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme6").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';

      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme7").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme8").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme9").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme10").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme11").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
      data = JSON.parse(request.responseText).data.image_url;
      console.log(data);
      document.getElementById("giphyme12").innerHTML = '<center><img src = "'+data+'"  title="GIF via Giphy"></center>';
    } else {
      console.log('reached giphy, but API returned an error');
     }
  };
 
  request.onerror = function() {
    console.log('connection error');
  };
 
  request.send();
}