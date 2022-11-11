import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";


class NoteApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        notes: getInitialData(),
        search: '',
      };
      this.onNoteSearchHandler = this.onNoteSearchHandler.bind(this);
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onArchiveEventHandler = this.onArchiveEventHandler.bind(this);
      this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
      
    }
    onDeleteHandler(id) {
      const notes = this.state.notes.filter((note) => note.id !== id);
      this.setState({ notes });
    }
    onArchiveEventHandler(id) {
      const notes = this.state.notes.map((note) => (note.id === id ? { ...note, archived: !note.archived } : note));
      this.setState({ notes });
    }
    onAddNoteHandler({ title, body }) {
      this.setState((prevState) => {
        return {
          notes: [
            ...prevState.notes,
            {
              id: +new Date(),
              title,
              body,
              createdAt: +new Date(),
              archived: false,
            },
          ],
        };
      });
    }

    onNoteSearchHandler(event) {
        this.setState(() => {
          return {
            search : event.target.value
          }
        });
    }

    render() {
      const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()));
      const arsip = notes.filter((note) => {
        return note.archived === false;
      });
      const catatan = notes.filter((note) => {
        return note.archived === true;
      });
      return (
        <div>
          <NoteHeader search={this.state.search} onSearchChange={this.onNoteSearchHandler}/>
          <div className="note-app__body">
            <NoteInput addNote={this.onAddNoteHandler} />
            <h2>Catatan</h2>
            {arsip.length > 0 ? <NoteList keyword={this.state.keyword} notes={arsip} onDelete={this.onDeleteHandler} onArchive={this.onArchiveEventHandler} /> : <p className="notes-list__empty-message">Tidak Ada catatan</p>}
            <h2>arsip</h2>
            {catatan.length > 0 ? <NoteList keyword={this.state.keyword} notes={catatan} onDelete={this.onDeleteHandler} onArchive={this.onArchiveEventHandler} /> : <p className="notes-list__empty-message">Tidak Ada catatan</p>}
          </div>
        </div>
      );
    }
  }
  export default NoteApp;