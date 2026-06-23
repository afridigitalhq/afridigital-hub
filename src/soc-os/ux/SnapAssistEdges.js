export function snapAssist(win, screen) {
  const snap = 24;

  if (win.x < snap) win.x = 0;
  if (win.y < snap) win.y = 0;

  if (Math.abs(win.x - screen.width / 2) < snap)
    win.x = screen.width / 2;

  if (Math.abs(win.y - screen.height / 2) < snap)
    win.y = screen.height / 2;

  return win;
}
