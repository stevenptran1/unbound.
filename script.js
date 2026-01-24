document.querySelectorAll('.node').forEach(node => {
  let offsetX, offsetY, dragging = false;

  node.addEventListener('mousedown', e => {
    dragging = true;
    offsetX = e.clientX - node.offsetLeft;
    offsetY = e.clientY - node.offsetTop;
    node.style.zIndex = 1000; // bring to front
  });

  document.addEventListener('mousemove', e => {
    if (!dragging) return;
    node.style.left = e.clientX - offsetX + 'px';
    node.style.top = e.clientY - offsetY + 'px';
  });

  document.addEventListener('mouseup', () => {
    dragging = false;
    node.style.zIndex = '';
  });
});