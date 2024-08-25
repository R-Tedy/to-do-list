const newnote = document.querySelector('.js-newNote')
const noteSubmit = document.querySelector('.js-subNote')
const contentBox = document.getElementById('contentBox')


function addNote() {
    if (newnote.value==='') {
    alert('You need to add a new note')
  } else{
    let para = document.createElement("li");
    para.innerHTML = newnote.value;
    contentBox.appendChild(para);
  }
  newnote.value="";
}