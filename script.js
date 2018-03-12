var url = "https://randomuser.me/api/";
var fullnameDispl = document.querySelector("#fullname");
var usernameDispl = document.querySelector("#username");
var avatar = document.querySelector("#avatar");
var emailDispl = document.querySelector("#email");
var cityDispl = document.querySelector("#city");


var btn = document.querySelector("#btn");
btn.addEventListener("click", function(){  
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateData)
    .catch(displayErrors)
})

function displayErrors(err){
    console.log("Error inside displayErrors" + err)
}
function handleErrors(res){
    if(!res.ok){
        throw Error(res.status)
    }
    return res;
}

function parseJSON(res){
    return res.json()
    .then(function(data){
        return data.results[0];
    })
}

function updateData(data){
    var fullname = data.name.first +" "+ data.name.last;
    fullnameDispl.innerText = fullname;
    usernameDispl.innerText = data.login.username;
    emailDispl.innerText = data.email;
    cityDispl.innerText = data.location.city; 
    avatar.src = data.picture.medium;
}