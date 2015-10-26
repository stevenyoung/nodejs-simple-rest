var req = null;

function createRequest(){

  if(typeof(XMLHttpRequest) != 'undefined') req = new XMLHttpRequest();
  else req = false;

  if(!req) {
    try {
      req = new ActiveXObject("MSXML.XMLHTTP");
    } catch (olderMS) {
      try {
        req = new ActiveXObject("Microsoft.XMLHTTP");
      } catch(oops) {
        alert('not able to create');
      }
    }
  }
  return(req)
}

function getUsers () {
  var request = createRequest()
  request.open('GET','/users')
  console.log('getting users')
  request.onreadystatechange = updateUsersfromXHR;
  request.send(null);
}

// using the event.target instead of as a global XHR
function updateUsersfromXHR(event) {
  var xhr = event.target
  console.log('updating users', event.target)
  if (xhr.readyState != 4) return;
  if (xhr.status != 200) {
     alert(xhr.status + '--' + xhr.statusText); return;
  }
  var json = JSON.parse(xhr.responseText)
  console.log(json)
  var users = json.users
  for (var i=0; i<users.length; i++) {

  }
}

window.onload = function() {
  console.log("you've found me...")
  // var myApp = new SimpleApp()
  // document.getElementById('search').addEventListener('click', myApp.getUsers)
  document.getElementById('search').addEventListener('click', getUsers)
}

