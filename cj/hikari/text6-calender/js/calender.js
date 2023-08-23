let allDay = 31


let calender = document.querySelector(".calender")
console.log(calender)

for (let i = 1; i <= 31; i++) {
  calender.innerHTML += `   <div class="calender-day">
  <span>${i}</span>
  <div class="event "></div>
</div>`
}

