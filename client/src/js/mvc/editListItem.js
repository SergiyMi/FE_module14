import { notepad } from "./model";
import { NOTE_ACTIONS } from '../utils/constants';
import { notificationSaved } from '../utils/libraries';

function isEditListItem(note) {
    const li = note.closest('.note-list__item');
    const { id } = li.dataset;
    const notee = notepad.findNoteById(id);
    const title = li.querySelector('.note__title');
    const body = li.querySelector('.note__body');
    notee.title = title.textContent;
    notee.body = body.textContent;
        NOTE_ACTIONS.ISEDIT = false;
        title.setAttribute('contenteditable', false);
        body.setAttribute('contenteditable', false);
        title.style.backgroundColor = '#fff';
        body.style.backgroundColor = '#fff';
        title.style.color = '#6e636b';
        body.style.color = '#6e636b';
        note.style.backgroundColor = '#7c7879';
        notepad.updateNoteContent(id, notee)
        .then(() => {
            notificationSaved();
        })
}

function editListItem (note) {
    const li = note.closest('.note-list__item');
    const title = li.querySelector('.note__title');
    const body = li.querySelector('.note__body');
    if (NOTE_ACTIONS.ISEDIT){
        isEditListItem(note);
        return;
    }
    title.setAttribute('contenteditable', true);
    body.setAttribute('contenteditable', true);
    title.style.backgroundColor = '#080';
    body.style.backgroundColor = '#080';
    title.style.color = '#fff';
    body.style.color = '#fff';
    note.style.backgroundColor = '#080';
    NOTE_ACTIONS.ISEDIT = true;
}

export default editListItem;