import React from "react";
import "../styles/styles.css";

const Loading = () => {
  return (
    <div>
      <div className="spinPadre">
        <div className="spinHijo">
          <div class="spinner-border" role="status"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
