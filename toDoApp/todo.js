
// const todos = document.getElementById('todos');
// const submit = document.getElementById('submitbtn');
// const input = document.getElementById('input');

// // function addList() {
// //     const input = document.getElementById('input');
// //     const list = document.createElement('li');
// //     list.innerHTML = input.value;

// //     todos.append(list);
// // }
// let div;
// let del;

// todos.addEventListener('click',deleteCheck);

// function cutList(itemid) {
//     var element = document.getElementById( itemid );
//     itemid.remove;
//   }
// function addItem(){
//     var ul = document.getElementById('todos'); 
    
//     div= document.createElement('div');
//     var box = document.createElement('input');
//     del= document.createElement('button');
//     del.textContent = 'remove';
//     del.classList.add('trash-btn');
    
    
//     box.type = 'checkbox';
//     div.id = 'container';
//     var li = document.createElement('li');
//     li.id='listContent';
//     li.innerHTML = input.value;

   
//     div.append(li);
//     div.append(box);
//     div.append(del);
//     // division.append(Image())
    
//     ul.append(div);
    
// }

// function deleteCheck(e){
//   const item = e.target;

//   if(item.classList[0] === 'trash-btn');
//   const todo = item.parentElement;
//   todo.remove
// }


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
} 