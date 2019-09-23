import * as api from "./api";

class Notepad {
    constructor(notes = []) {
      this._notes = notes;
    }
   
    getLocale() {
      return this._notes;
    }

    get() {
      return api.getNotes().then(notes => {
        this._notes = notes;
        return this._notes;
      })
    }

    findNoteById(id) {
      return (this._notes.find(el => el.id === id));
    }

    saveNote(note) {
      return api.saveNote(note).then(savedNote => {
        this._notes.push(savedNote);
        return savedNote;
      });
    }
  
    deleteNote(id) {
      return api.delNote(id).then(() => {
        this.getLocale();
      });
    }

    updateNoteContent(id, updatedContent) {
      return api.updateNote(id, updatedContent).then(() => {
        Object.assign(this.findNoteById(id), updatedContent);
        return(this);
      })
}

    updateNotePriority(id, updatePriority) {
      return api.updatePriority(id, updatePriority).then(() => {
        Object.assign(this.findNoteById(id), updatePriority);
        return(this);
      })
}

    filterNotesByQuery(query) {
      return this._notes.filter(el => el.title.toLowerCase().includes(query) ||
      el.body.toLowerCase().includes(query));
    }

    filterNotesByPriority(priority) {
      return this._notes.filter(el => el.priority === priority);
    }
  }

  export default Notepad;