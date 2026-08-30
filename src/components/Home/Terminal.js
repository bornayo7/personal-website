import React from "react";

function Terminal() {
  return (
    <div className="terminal hero-visual" aria-hidden="true">
      <div className="terminal-bar">
        <span></span>
        <span></span>
        <span></span>
        <div className="terminal-bar-title">yash@utd — zsh</div>
      </div>
      <div className="terminal-body">
        <span className="t-line">
          <span className="t-prompt">$ </span>
          <span className="t-cmd">whoami</span>
          <span className="t-out">CS senior @ UT Dallas · graduating Dec 2026</span>
        </span>
        <span className="t-line">
          <span className="t-prompt">$ </span>
          <span className="t-cmd">ls experience/</span>
          <span className="t-out">
            <span className="t-hl">nokia-ai-co-op/</span> <span className="t-hl">mashfrog-swe-intern/</span>
          </span>
        </span>
        <span className="t-line">
          <span className="t-prompt">$ </span>
          <span className="t-cmd">cat focus.txt</span>
          <span className="t-out">LLM evaluation · full-stack web · automation</span>
        </span>
        <span className="t-line">
          <span className="t-prompt">$ </span>
          <span className="t-cmd">./whats-next.sh</span>
          <span className="t-out">
            → polishing VisionTranslate{"\n"}→ finishing senior year{"\n"}→ open to what comes after
          </span>
        </span>
        <span className="t-line">
          <span className="t-prompt">$ </span>
          <span className="terminal-cursor"></span>
        </span>
      </div>
    </div>
  );
}

export default Terminal;
