// let allDay = 31

// let calendar = document.querySelector(".calendar")

function getDom(Dom){
    return(document.querySelector(`${Dom}`))
}
let allDay = 31
const calendar=getDom(".calendar")
for (let i = 1; i <= 30; i++){

if(i==14){
    calendar.innerHTML=`${calendar.innerHTML}<div class="calendar-day">
    <span>${i}</span>
    <div class="event event-birthday">生日</div>
</div>`
}
else if(i==7){
    calendar.innerHTML=`${calendar.innerHTML}<div class="calendar-day">
    <span>${i}</span>
    <div class="event event-meeting">會議</div>
</div>`
}
else if(i==28){
    calendar.innerHTML=`${calendar.innerHTML}<div class="calendar-day">
    <span>${i}</span>
    <div class="event event-holiday">假日</div>
</div>`
}
else{    calendar.innerHTML=`${calendar.innerHTML} <div class="calendar-day">
    <span>${i}</span>
    <div class="event"></div>
</div>`}
}
