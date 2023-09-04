function getDom(Dom) {
    return (document.querySelector(`${Dom}`))
}
let allDay = 31
const calendar = getDom(".calendar")
for (let i = 1; i <= 31; i++) {
    if (i==1) {
        calendar.innerHTML=`${calendar.innerHTML}<div class="calendar-day">
        <span>${i}</span>
        <div class="event event-holiday">元旦</div>
    </div>`
    }
    else{    calendar.innerHTML=`${calendar.innerHTML} <div class="calendar-day">
    <span>${i}</span>
    <div class="event"></div>
</div>`}
}