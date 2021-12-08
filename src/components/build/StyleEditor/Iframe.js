import React, { useState } from "react";
import { createPortal } from "react-dom";
import { StyleSheetManager } from "styled-components";

const Iframe = ({ children, title, ...props }) => {
  const [contentRef, setContentRef] = useState(null);
  const doc = contentRef?.contentWindow?.document;
  const mountNode = doc?.body;
  const insertionTarget = doc?.createElement("link");
  if (insertionTarget) {
    doc.head.append(insertionTarget);
  }

  return (
    <iframe
      {...props}
      frameBorder="0"
      title="Preview Iframe"
      ref={setContentRef}
    >
      {mountNode &&
        createPortal(
          <StyleSheetManager target={insertionTarget}>
            {children}
          </StyleSheetManager>,
          mountNode
        )}
    </iframe>
  );
};

export default Iframe;
