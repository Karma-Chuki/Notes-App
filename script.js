const addbtn = document.querySelector('#add');
const main = document.querySelector('#main');

addbtn.addEventListener('click', function(){
    alert('Button clicked!');
    addNote();
});

// save button fxn.
const saveNote = () => {
    const notes = document.querySelectorAll('.note .text');
    const titles = document.querySelectorAll('.note .title');

    const data = [];

    notes.forEach((note, index) => {
        data.push({ title: titles[index].value, text: note.value });
    });

    localStorage.setItem('notes', JSON.stringify(data));
};

addNote = (text = "", title = "") => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="notes">
            <span>
                <i class = "far fa-save" style="color:yellow"></i>
            </span>
            <span>
                <i class = "fas fa-trash-alt" style="color:red"></i>
            </span>
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
    const data = JSON.parse(localStorage.getItem('notes')) || [];

    data.forEach(note => {
        addNote(note.text, note.title);
    });
}

loadNotes();


// &#128465; &#xf0c7;