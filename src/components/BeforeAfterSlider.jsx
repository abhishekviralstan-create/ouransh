import { useState } from "react";

export default function BeforeAfterSlider({ src, title }) {
  const [position, setPosition] = useState(50);
  return (
    <div className="before-after" style={{ "--compare-position": `${position}%` }}>
      <div className="before-after-panel before-after-before" style={{ backgroundImage: `url(${src})` }} role="img" aria-label={`${title} before treatment`} />
      <div className="before-after-panel before-after-after" style={{ backgroundImage: `url(${src})` }} role="img" aria-label={`${title} after treatment`} />
      <span className="before-after-label before-label">Before</span>
      <span className="before-after-label after-label">After</span>
      <div className="before-after-divider"><span>‹›</span></div>
      <input type="range" min="0" max="100" value={position} onInput={(event) => setPosition(event.currentTarget.value)} onChange={(event) => setPosition(event.target.value)} aria-label={`Compare before and after ${title}`} />
    </div>
  );
}
