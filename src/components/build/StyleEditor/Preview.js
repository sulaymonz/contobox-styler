import React, { useState } from "react";
import { createPortal } from "react-dom";

const Preview = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const mountHead = contentRef?.contentWindow?.document?.head;
  const mountNode = contentRef?.contentWindow?.document?.body;

  return (
    <iframe
      {...props}
      frameBorder="0"
      ref={setContentRef}
      title="Preview iframe"
    >
      {mountHead && createPortal(props.head, mountHead)}
      {mountNode && createPortal(children, mountNode)}
    </iframe>
  );
};

export default Preview;
