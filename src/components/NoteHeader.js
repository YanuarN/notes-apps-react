import React from "react";
import NoteSearch from "./NoteSearch";

function NoteHeader({ search, onSearchChange }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <NoteSearch search={search} onSearchChange={onSearchChange} />
    </div>
  );
}
export default NoteHeader;