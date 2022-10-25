$('#getemail').click(function(){
    console.log(document.getElementById("name").value);
    $("#show-users").fadeIn();
    document.getElementById('show-users').innerHTML = '';
    
  $.ajax({
    method: "GET",
    url: 'http://localhost:3000/email/:name',
    data:{name:document.getElementById("name").value},
    success: function(result){
    var user = '';
    console.log(result)

    var mainContainer = document.getElementById("show-users");
    for (var i=0; i<result.length; i++){
        var div = document.createElement('div');
        div.classList.add('userrow');
        div.innerHTML = 'Email: ' + result[i].email;
        mainContainer.appendChild(div);
    }
}
  });
});

$('#insert').click(function(){
    $("#show-users").fadeIn();
    document.getElementById('show-users').innerHTML = '';
    
  $.ajax({
    method: "POST",
    url: 'http://localhost:3000/users',
    data:{
      id:document.getElementById("id").value,
      name:document.getElementById("name").value,
      email:document.getElementById("email").value
    },
    success: function(result){
    var user = '';
    console.log(result)

    var mainContainer = document.getElementById("show-users");
    var div = document.createElement('div');
    div.classList.add('userrow');
    div.innerHTML = 'Response: ' + result;
    mainContainer.appendChild(div);
}
  });
});

$('#update').click(function(){
    $("#show-users").fadeIn();
    document.getElementById('show-users').innerHTML = '';
    
  $.ajax({
    method: "PUT",
    url: 'http://localhost:3000/users/:id',
    data:{
      id:document.getElementById("id").value,
      name:document.getElementById("name").value,
      email:document.getElementById("email").value
    },
    success: function(result){
    var user = '';
    console.log(result)

    var mainContainer = document.getElementById("show-users");
    var div = document.createElement('div');
    div.classList.add('userrow');
    div.innerHTML = 'Response: ' + result;
    mainContainer.appendChild(div);
}
  });
});

$('#delete').click(function(){
    $("#show-users").fadeIn();
    document.getElementById('show-users').innerHTML = '';
    
  $.ajax({
    method: "DELETE",
    url: 'http://localhost:3000/users/:id',
    data:{
      id:document.getElementById("id").value,
    },
    success: function(result){
    var user = '';
    console.log(result)

    var mainContainer = document.getElementById("show-users");
    var div = document.createElement('div');
    div.classList.add('userrow');
    div.innerHTML = 'Response: ' + result;
    mainContainer.appendChild(div);
}
  });
});

$('#show').click(function(){
    $("#show-users").fadeIn();
    document.getElementById('show-users').innerHTML = '';
    
  $.ajax({
    method: "GET",
    url: "http://localhost:3000/users", 
    success: function(result){
    var user = '';
    console.log(result)

    var mainContainer = document.getElementById("show-users");
    for (var i=0; i<result.length; i++){
        var div = document.createElement('div');
        div.classList.add('userrow');
        div.innerHTML = 'User: ' + result[i].name + ' - Email: ' + result[i].email;
        mainContainer.appendChild(div);
    }
}
  });
});
$("#hide").click(function(){
    $("#show-users").fadeOut();
})