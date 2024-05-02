function generateCalendar() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    let firstDayOfMonth = new Date(year, month, 1).getDay();
    if (firstDayOfMonth === 0) {
        firstDayOfMonth = 7;
    }

    const calendarContainer = document.getElementById("calendar-container");
    calendarContainer.innerHTML = "";

    const calendarTable = document.createElement("table");
    const headerRow = document.createElement("tr");

    const weekdays = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
    weekdays.forEach(day => {
        const cell = document.createElement("th");
        cell.textContent = day;
        headerRow.appendChild(cell);
    });

    calendarTable.appendChild(headerRow);

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if ((i === 0 && j < firstDayOfMonth - 1) || date > daysInMonth) {
                const cell = document.createElement("td");
                row.appendChild(cell);
            } else {
                const cell = document.createElement("td");
                cell.textContent = date;
                
                if (date === now.getDate() && month === now.getMonth() && year === now.getFullYear()) {
                    cell.classList.add("current-day");
                }

                row.appendChild(cell);
                date++;
            }
        }

        calendarTable.appendChild(row);
    }

    calendarContainer.appendChild(calendarTable);

    const monthName = document.createElement("div");
    monthName.textContent = getMonthName(month) + " " + year;
    monthName.classList.add("month-name");
    calendarContainer.insertBefore(monthName, calendarTable);
}

function getMonthName(monthIndex) {
    const months = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];
    return months[monthIndex];
}

generateCalendar();

const users = [
    { username: "Ralf", password: "Test1234" },
    { username: "benutzer2", password: "passwort2" }
];

function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

    if (user) {
        document.getElementById("login").style.display = "none";
        document.getElementById("private-content").style.display = "block";
        window.open('private.html', '_blank');
    } else {
        alert("Falscher Benutzername oder falsches Passwort. Bitte versuche es erneut.");
    }
}

function getVisitorCount() {
    const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)visitorCount\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return parseInt(cookieValue) || 0;
}

function incrementVisitorCount() {
    const count = getVisitorCount() + 1;
    document.getElementById("count").textContent = count;
    document.cookie = `visitorCount=${count}`;
}

window.onload = function() {
    incrementVisitorCount();
};

function toggleAudioControl(audioId) {
    var audioElement = document.getElementById(audioId);
    
    if (audioElement.style.display === 'block') {
        audioElement.style.display = 'none'; 
    } else {
        var audioElements = document.getElementsByTagName('audio');
        for (var i = 0; i < audioElements.length; i++) {
            audioElements[i].style.display = 'none';
        }
        
        audioElement.style.display = 'block';
    }
}

