import { notepad } from "./model";
import { PRIORITY_TYPES } from '../utils/constants';
import { notificationChangePriority } from '../utils/libraries';

function addListItemPriority(note) {
    const li = note.closest('.note-list__item');
    const { id } = li.dataset;
    const notee = notepad.findNoteById(id);
    const span = li.querySelector('.note__priority');
    if (notee.priority < PRIORITY_TYPES.HIGH) {
        notee.priority += 1;
        span.textContent = `Priority: ${notee.priority}`;
        notepad.updateNotePriority(id, notee)
        .then(() => {
            notificationChangePriority();
        })
    }
}

export default addListItemPriority;