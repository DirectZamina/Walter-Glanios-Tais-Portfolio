document.body.classList.add('dark');
document.getElementById('btn').addEventListener('click',() => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
})

document.querySelector('.burger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});
