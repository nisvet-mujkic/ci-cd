import React from "react";

interface NoteProps {
  content: string;
}

const Note: React.FC<NoteProps> = ({ content }) => {
  return (
    <div>
      <h1>{content}</h1>
    </div>
  );
};

export default Note;
