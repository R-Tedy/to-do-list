const newnote = document.querySelector('.js-newNote')
const noteSubmit = document.querySelector('.js-subNote')
const contentBox = document.getElementById('contentBox')


function addNote() {
    if (newnote.value==='') {
    alert('You need to add a new note')
  } else{
    let li = document.createElement("li");
    li.innerHTML = newnote.value;
    contentBox.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  newnote.value="";
  storeData()
}

contentBox.addEventListener("click", (e)=>{
  if (e.target.tagName=== "LI") {
    e.target.classList.toggle('checked');
    storeData()
  } else if (e.target.tagName=== "SPAN"){
    e.target.parentElement.remove();
    storeData()
  }
})

function storeData() {
  localStorage.setItem("data", contentBox.innerHTML);
}

function getData() {
  contentBox.innerHTML=localStorage.getItem("data")
}
getData()