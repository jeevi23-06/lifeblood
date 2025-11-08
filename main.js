// Modal logic
const openBtn = document.getElementById('open-register-modal');
const modal = document.getElementById('register-modal');
const closeBtn = document.getElementById('close-register-modal');
openBtn && (openBtn.onclick = () => modal && (modal.style.display = 'block'));
closeBtn && (closeBtn.onclick = () => modal && (modal.style.display = 'none'));
window.onclick = e => modal && e.target === modal && (modal.style.display = 'none');

// Blood group availability
const bloodAvailability = { "A+": true, "A-": false, "B+": false, "B-": true, "O+": false, "O-": true, "AB+": false, "AB-": false };
document.querySelectorAll('.blood-group-box').forEach(box => {
  box.onclick = () => {
    const group = box.getAttribute('data-group');
    const popup = document.getElementById('blood-status-popup');
    const text = document.getElementById('blood-status-text');
    const available = bloodAvailability[group];
    text.textContent = group + (available ? " Available" : " Not Available");
    popup.style.color = available ? "#1b8a1b" : "#e53935";
    popup.style.borderColor = popup.style.color;
    popup.style.display = "block";
    setTimeout(() => { popup.style.display = "none"; }, 1500);
  };
});
