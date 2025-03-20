const addbtn = document.querySelector('.add');
const main = document.querySelector('#main');

addbtn.addEventListener('click', function(){
    addNote();
});

// save button fxn.
const saveNote = (note) => {
    //select text area
    const notes = document.querySelectorAll('.note .text');

    //select title area
    const title = document.querySelectorAll('.note .title');

    const data =[];

    notes.forEach((note, index) => {
        data.push({
            title: title[index].value,
            text: note.value
        });
    });
}

addNote = (text = "", title = "") => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="notes">
            <i class = "far fa-save" style="color:yellow"></i>
            <i class = "fas fa-trash-alt" style="color:red"></i>
        </div>
        <div class="title-div">
            <textarea class ="title" placeholder="write the title">${title}</textarea>
        </div>
        <textarea class="text" placeholder="write the note">${text}</textarea>
        `;
    function handleTrashClick() {
        note.remove();
        saveNote();
    }
    function handleSaveClick() {
        saveNote();
    }

    const trash = note.querySelector('.fa-trash-alt');
    const save = note.querySelector('.fa-save');
    const textArea = note.querySelectorAll('textarea');

    trash.addEventListener('click', handleTrashClick);
    save.addEventListener('click', handleSaveClick);
    main.appendChild(note);
    saveNote();
};

function loadNotes() {
    const titlesData = localStorage.getItem('titles');
    const textData = localStorage.getItem('notes');

    for (let i = 0; i < titlesData.length; i++) {
        addNote(textData[i], titlesData[i]);
    }
}
loadNotes();


	// &#xf2ed;// trash icon
    	// far fa-save	&#xf0c7;