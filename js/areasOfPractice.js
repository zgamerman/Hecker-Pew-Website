const selectBox = (ev) => {
  let selected = ev.currentTarget;
  const areasOfPractice = Array.from(document.getElementById('areasGrid').children);
  areasOfPractice.forEach(area => {
    if (area !== selected)
      area.style.display = 'none';
  })
}
