export function magneticDock(windows) {
  const strength = 0.15;

  for (let i = 0; i < windows.length; i++) {
    for (let j = 0; j < windows.length; j++) {
      if (i === j) continue;

      const a = windows[i];
      const b = windows[j];

      const dx = b.x - a.x;
      const dy = b.y - a.y;

      a.x += dx * strength;
      a.y += dy * strength;
    }
  }

  return windows;
}
