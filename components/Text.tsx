import React from "react";

function Text({ text }) {
  if (!text) {
    return null;
  }
  return text.map((value, index) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
    return (
      <span
        key={index}
        className={[
          bold ? "bold" : "",
          code ? "code" : "",
          italic ? "italic" : "",
          strikethrough ? "strikethrough" : "",
          underline ? "underline" : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
      >
        {text.link ? <a href={text.link.url}>{text.content}</a> : text.content}
      </span>
    );
  });
}

export default Text;
