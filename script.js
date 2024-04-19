window.onload = count;

async function count() {
    const counterElement = document.getElementById('number');
    if (!counterElement) {
        console.error('Counter element not found');
        return;
    }

    for(let i = 0; i <= 185; i++){
        counterElement.textContent = i;
        await new Promise((resolve) => setTimeout(resolve, 10));
    }
}