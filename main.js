document.body.classList.add('dark');
document.getElementById('btn').addEventListener('click',() => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
})
