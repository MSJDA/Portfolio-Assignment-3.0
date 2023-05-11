const text = document.getElementById('text-1');
const textj = document.getElementById('text-2');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    if (textj.classList.contains('text-r')) {
        textj.classList.add('text');
        textj.classList.remove('text-r');
        text.classList.add('text-r');
        text.classList.remove('text');
    } else {
        textj.classList.add('text-r');
        textj.classList.remove('text');
        text.classList.add('text');
        text.classList.remove('text-r');
    }
})

