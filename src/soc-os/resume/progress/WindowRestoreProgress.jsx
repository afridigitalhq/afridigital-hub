import React, { useEffect, useState } from "react";

export default function WindowRestoreProgress({ window }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 10;
      });
    }, 80);

    return () => clearInterval(interval);
  }, [window]);

  return (
    <div className="restore-progress">
      <div className="label">{window.name}</div>
      <div className="bar">
        <div
          className="fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
