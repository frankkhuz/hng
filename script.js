document.addEventListener('DOMContentLoaded', () => {
    // Function to update the current time in UTC
    function updateUTCTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        document.getElementById('utcTime').textContent = utcTime;
    }

    // Function to update the current day
    function updateCurrentDay() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()];
        document.getElementById('currentDay').textContent = currentDay;
    }

    // Initial update
    updateUTCTime();
    updateCurrentDay();

    // Update the time every second
    setInterval(updateUTCTime, 1000);
});
