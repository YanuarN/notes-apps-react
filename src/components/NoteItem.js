import React from "react";
import NoteContent from "./NoteContent";
import NoteBtn from "./NoteBtn";


function NoteItem({ title, body, createdAt, id, archived, onDelete, onArchive }) {
    return (
      <div className="note-item">
        <NoteContent title={title} body={body} date={createdAt} />
        <NoteBtn id={id} archived={archived} onDelete={onDelete} onArchive={onArchive} />
      </div>
    );
  }

export default NoteItem;