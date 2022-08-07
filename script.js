const ROOM = ["Green", "Red", "Yan", "Jack"];
const DAYS = ["Time", "Monday", "Wednsday", "Saturday"];
const TIME = ["Time", "9:00", "10:00", "12:00", "15:00", "17:00"];
const PARTCIPANTS = ["Thor", "Deadpool", "Anna", "Elza"];

const meetingName = document.getElementById("meeting");
const roomName = document.getElementById("room");
const dayName = document.getElementById("day");
const timeName = document.getElementById("time");
const participantsName = document.getElementById("participants");
const button = document.getElementById("button");
const form = document.getElementById("form");
const wrapp = document.getElementById("wrapp");

function addOptions(arr, parent) {
    arr.forEach(item => {
        const option = document.createElement("option");
        option.innerText = item;
        parent.append(option);
    })
}

addOptions(ROOM, roomName);
addOptions(DAYS, dayName);
addOptions(TIME, timeName);
addOptions(PARTCIPANTS, participantsName);



button.addEventListener("click", e => e.preventDefault());
button.addEventListener("click", addMeetToCalendar);

function createData() {
    const meetData = {
        name: meetingName.value,
        room: roomName.value,
        day: dayName.value,
        time: timeName.value,
        participant: participantsName.value,
    };

    return meetData;
}

function addMeetToCalendar() {
    const data = createData();

    const room = document.querySelector(`.${data.room}`);
    const cellCalender = document.querySelector(`.${data.room} .${data.day}.time-${parseInt(data.time)}`);

    console.log(cellCalender);
    cellCalender.innerHTML = `<p>name: ${data.name}</p><p>who: ${data.participant}</p>`
}

function createTable() {
    const roomColors = ["green", "red", "yellow", "blue"];

    ROOM.forEach((room, index) => {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const table = document.createElement("table");

        h3.innerText = `${room} meeting room`;
        h3.style.color = roomColors[index];
        table.classList.add(room);

        createTableRows(table);
        
        div.append(h3);
        div.append(table);
        wrapp.append(div);
    })
}

function createTableRows(table) {
    TIME.forEach((time, iTr) => {
        const TRs = document.createElement("tr");

        DAYS.forEach((day, iTd) => {
            const TDs = document.createElement("td");
            TDs.classList.add(`time-${parseInt(time)}`);
            TDs.classList.add(day);

            if(iTr === 0) TDs.innerText = day;
            if(iTr !== 0 && iTd === 0) TDs.innerText = time;

            TRs.append(TDs);
        })
        table.append(TRs);
    })
}

createTable();