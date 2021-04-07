const button = document.querySelector('button');

button.addEventListener('click', getVisitorCount);


async function getVisitorCount() {
    const response = await fetch('/visitors');
    const visitors = await response.json();
    const visitorDiv = document.getElementById('visitor-div');
    visitorDiv.innerHTML = visitors + ' besökare har varit här'
}