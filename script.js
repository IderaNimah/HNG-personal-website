document.addEventListener('DOMContentLoaded', () => {
    function updateTimeAndDay() {
        const now = new Date();

        // UTC time and formatting
        const utcTime = now.toUTCString();
        document.getElementById('currentTimeUTC').textContent = utcTime;

        // Current day of the week
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDay = daysOfWeek[now.getUTCDay()];
        document.getElementById('currentDay').textContent = currentDay;
    }

    // Update time and day immediately
    updateTimeAndDay();

    // Update time and day every second
    setInterval(updateTimeAndDay, 1000);
});