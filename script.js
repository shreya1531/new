function showTab(e, id) {
  document.querySelectorAll('.tab').forEach(t => t.style.display = 'none');
  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));
  document.getElementById(id).style.display = 'grid';
  e.target.classList.add('active');
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}