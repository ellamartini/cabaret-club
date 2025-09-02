// HOVER REVEALS

const wildAcclaim = document.getElementById('wildAcclaim');
const wildAcclaimTextBox = document.getElementById('wildAcclaimTextBox');
const drunkIndicator = document.getElementById('drunkIndicator');
const drunkIndicatorTextBox = document.getElementById('drunkIndicatorTextBox');

wildAcclaim.addEventListener('mouseover', () => {
    wildAcclaimTextBox.style.visibility = 'visible';
})

wildAcclaim.addEventListener('mouseout', () => {
    wildAcclaimTextBox.style.visibility = 'hidden';
})

drunkIndicator.addEventListener('mouseover', () => {
    drunkIndicatorTextBox.style.visibility = 'visible';
})

drunkIndicator.addEventListener('mouseout', () => {
    drunkIndicatorTextBox.style.visibility = 'hidden';
})