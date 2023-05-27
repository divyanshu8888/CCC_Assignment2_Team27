import React, { useState, useEffect, useRef } from "react";
const { tableau } = window;
function Events() {
  const handleClick = () => {
    // Perform any additional actions or logic before opening the link

    // Open the link
    window.open('https://drive.google.com/file/d/17AfyhBbYofQELFNNkeqQO9_AIYeQFBuf/view', '_blank');
  };

  return (
    <div>
      <a href="#" onClick={handleClick}>Open Link</a>
    </div>
  );
}
export default Events;