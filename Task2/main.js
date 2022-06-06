function setHight() {
    const textArea = document.querySelector('#textArea');

    textArea.addEventListener('input', (event) => {
        const height = event.target.scrollHeight;
        event.target.style.height = `${height}px`
    })
}
setHight();