export function snapToEdges(x, y, vw, vh) {
  const threshold = 40;

  let snappedX = x;
  let snappedY = y;

  // left
  if (x < threshold) snappedX = 0;

  // right
  if (x > vw - threshold) snappedX = vw - 400;

  // top
  if (y < threshold) snappedY = 0;

  return { x: snappedX, y: snappedY };
}
