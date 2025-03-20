const addbtn = document.querySelector('#add');
const main = document.querySelector('#main');

addbtn.addEventListener('click', function(){
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

// const saveNote = (note) => {
//     //select text area
//     const notes = document.querySelectorAll('.note .text');

//     //select title area
//     const title = document.querySelectorAll('.note .title');

//     const data =[];

//     notes.forEach((note, index) => {
//         data.push({title: title[index].value, text: note.value});
//         });
//     const titlesData = data.map((note) => note.title);
//     console.log(titlesData);
//     localStorage.setItem(
//         'titles', JSON.stringify(titlesData)
//     );

//     const textData = data.map((item) => item.text);
//     localStorage.setItem(
//         "notes", JSON.stringify(textData)
//     );
// };

addNote = (text = "", title = "") => {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
        <div class="notes">
            <i class = "far fa-save" style="color:yellow">&#128465;</i>
            <i class = "fas fa-trash-alt" style="color:red">&#xf0c7;</i>
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

// function loadNotes() {
//     const titlesData = localStorage.getItem('titles');
//     const textData = localStorage.getItem('notes');

//     for (let i = 0; i < titlesData.length; i++) {
//         addNote(textData[i], titlesData[i]);
//     }
// }
function loadNotes() {
    const titlesData = JSON.parse(localStorage.getItem('titles')) || [];
    const textData = JSON.parse(localStorage.getItem('notes')) || [];

    if (titlesData && textData) {
        for (let i = 0; i < titlesData.length; i++) {
            addNote(textData[i], titlesData[i]);
        }
    }
}

loadNotes();


	// &#xf2ed;// trash icon
    	// far fa-save	&#xf0c7;