let a = document.getElementsByClassName("container")
a.onclick = () => {
    let b = document.getElementsByClassName("container")
    b.innerHTML = "Hello World"
}

let x = function(e) {
    alert("hello everyone")
   }

let y = function(e) {
    alert("hello anyone")
}   

btn.addEventListener( 'click', x )
btn.addEventListener('click', y)
let c = prompt('what is your fav number?');

if (c==2 ) {
    btn.removeEventListener( 'click', x ) 
}

document.getElementById('google').addEventListener('click', function() {
 window.location = ('https://google.com');
 win.focus();
})