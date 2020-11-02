var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://jsonplaceholder.typicode.com/posts",
    "method": "GET",
    "headers": {
      "cache-control": "no-cache",
      "Postman-Token": "bed7abfb-3fe1-428c-b5c2-ef1d25d3b57b"
    }
  }
  
  $.ajax(settings).done(function (response) {
    setPost(response)
  });



  function setPost(jsonValue){
    let str = '';
    jsonValue.forEach(element => {

        str += '<div>';
        str += '<h3>'+ element.title +' </h3>';
        str += '<p>'+ element.body +' </p>';
        str += '<hr>';
        str += '</div>';
    });

    $('#mainDivId').html(str);
  }