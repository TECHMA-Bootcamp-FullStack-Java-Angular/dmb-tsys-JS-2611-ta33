const updateClock = () => {
    let now = new Date();
    hours.textContent = now.getHours().toString().padStart(2, '0');
    minutes.textContent = now.getMinutes().toString().padStart(2, '0');
    seconds.textContent = now.getSeconds().toString().padStart(2, '0');
}

setInterval(updateClock, 1000);

