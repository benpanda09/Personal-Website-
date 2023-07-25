const TCJbut = document.getElementById('TCJbut');
const TCJmask = document.getElementById('TCJmask');
const TCJmodal = document.getElementById('TCJmodal');

TCJbut.addEventListener('click', () => {
  TCJmask.classList.remove('TCJhidden');
  TCJmodal.classList.remove('TCJhidden');
});

TCJmask.addEventListener('click', () => {
  TCJmask.classList.add('TCJhidden');
  TCJmodal.classList.add('TCJhidden');
});