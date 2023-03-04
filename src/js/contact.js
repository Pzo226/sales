// Card toggle state
var cardToggles = document.querySelectorAll(".card-toggle");
var cards = document.querySelectorAll(".card");
var cardContents = document.querySelectorAll(".card-content");
var isAnimating = false;

cardToggles.forEach(function (cardToggle) {
    cardToggle.addEventListener("click", function () {
        // Remove active class from all card toggles
        cardToggles.forEach(function (ct) {
            ct.classList.remove("active");
        });
        // Add active class to clicked card toggle
        this.classList.add("active");

        if (!isAnimating) {
            isAnimating = true;

            // Reset z-index and remove active class from all cards
            cards.forEach(function (card) {
                card.classList.remove("active");
                card.querySelector(".card-content").style.zIndex = 0;
            });

            // Add active class to clicked card and set z-index of siblings to 1
            var card = this.parentElement;
            var siblings = Array.from(card.parentElement.children).filter(function (sibling) {
                return sibling !== card;
            });
            siblings.forEach(function (sibling) {
                sibling.querySelector(".card-content").style.zIndex = 1;
            });

            setTimeout(function () {
                card.classList.add("active");
                card.querySelector(".card-content").addEventListener("transitionend", function () {
                    isAnimating = false;
                });
            }, 10);
        }
    });
});

// Add "filled" class to input parent on blur
var inputs = document.querySelectorAll("input, textarea");
inputs.forEach(function (input) {
    input.addEventListener("blur", function () {
        if (this.value) {
            this.parentElement.classList.add("filled");
        } else {
            this.parentElement.classList.remove("filled");
        }
    });
});

// Toggle active class on contact form
var contact = document.querySelector(".contact");
var contactForm = document.querySelector(".contact-form");
var closeButtons = document.querySelectorAll(".contact-form input[type=submit], .contact-form .close");

contact.addEventListener("click", function () {
    contactForm.classList.toggle("active");
});

closeButtons.forEach(function (closeButton) {
    closeButton.addEventListener("click", function (e) {
        e.preventDefault();
        contactForm.classList.toggle("active");
    });
});

// // Initialize the calendar with the current month
// let date = new Date();
// let year = date.getFullYear();
// let month = date.getMonth();
// let dates = [];

// // Update the month and dates displayed in the calendar
// function updateCalendar() {
//   let monthElem = document.getElementById("month");
//   let tbodyElem = document.querySelector("#dates tbody");

//   // Clear the existing dates
//   tbodyElem.innerHTML = "";

//   // Display the current month and year
//   monthElem.textContent = `${year}-${month + 1}`;

//   // Get the number of days in the current month
//   let daysInMonth = new Date(year, month + 1, 0).getDate();

//   // Add the dates to the calendar
//   for (let i = 1; i <= daysInMonth; i++) {
//     let date = new Date(year, month, i);
//     let dateStr = date.toISOString().substr(0, 10);
//     let checked = dates.includes(dateStr) ? "checked" : "";
//     let cell = `<td><input type="checkbox" ${checked} value="${dateStr}">${i}</td>`;
//     if (i === 1) {
//       // Add empty cells for the days before the first of the month
//       let firstDayOfWeek = date.getDay();
//       for (let j = 0; j < firstDayOfWeek; j++) {
//         tbodyElem.innerHTML += "<td></td>";
//       }
//     }
//     if (date.getDay() === 0) {
//       // Add a new row for each Sunday
//       tbodyElem.innerHTML += "<tr>" + cell;
//     } else if (i === daysInMonth) {
//       // Add empty cells for the days after the last of the month
//       let lastDayOfWeek = date.getDay();
//       for (let j = lastDayOfWeek + 1; j <= 6; j++) {
//         tbodyElem.innerHTML += "<td></td>";
//       }
//       tbodyElem.innerHTML += cell + "</tr>";
//     } else {
//       tbodyElem.innerHTML += cell;
//     }
//   }

//   // Update the list of available dates for removal
//   let selectElem = document.getElementById("remove-date");
//   selectElem.innerHTML = "";
//   for (let date of dates) {
//     selectElem.innerHTML += `<option value="${date}">${date}</option>`;
//   }
// }

// // Toggle the display of the calendar
// function toggleCalendar() {
//   let calendarElem = document.getElementById("calendar");
//   if (calendarElem.style.display === "none") {
//     calendarElem.style.display = "block";
//     updateCalendar();
//   } else {
//     calendarElem.style.display = "none";
//   }
// }

// // Add a new date to the calendar
// function addDate() {
//   let inputElem = document.getElementById("new-date");
//   let dateStr = inputElem.value;
//   if (dateStr && !dates.includes(dateStr)) {
//     dates.push(dateStr);
//     updateCalendar();
//   }
//   inputElem.value = "";
// }

// // Remove a date from the calendar
// function removeDate() {
//   let selectElem = document.getElementById("remove-date");
//   let dateStr = selectElem.value;
//   if (dateStr) {
//     dates = dates.filter((date) => date !== dateStr);
//     updateCalendar();
//   }
// }

let year, month, dates=[], date=new Date();

function updateCalendar() {
  document.getElementById("month").textContent = `${year}-${month+1}`;
  let daysInMonth = new Date(year, month+1, 0).getDate();
  let firstDayOfWeek = new Date(year, month, 1).getDay();
  let tbodyElem = document.querySelector("#dates tbody"), html = "";
  for (let i=1; i<=daysInMonth; i++) {
    let dateStr = new Date(year, month, i).toISOString().substr(0, 10);
    let checked = dates.includes(dateStr) ? "checked" : "";
    html += i===1 ? `<tr>${`<td></td>`.repeat(firstDayOfWeek)}` : "";
    html += `<td><input type="checkbox" ${checked} value="${dateStr}">${i}</td>`;
    html += i===daysInMonth ? `${`<td></td>`.repeat(6-new Date(year, month, daysInMonth).getDay())}</tr>` : "";
    if (i===daysInMonth && !html.endsWith("</tr>")) html += "</tr>";
  }
  tbodyElem.innerHTML = html;
  document.getElementById("remove-date").innerHTML = dates.map(date => `<option value="${date}">${date}</option>`).join("");
}

function toggleCalendar() {
  document.getElementById("calendar").style.display = document.getElementById("calendar").style.display === "none" ? "block" : "none";
  if (document.getElementById("calendar").style.display !== "none") updateCalendar();
}

function addDate() {
    let dateStr = document.getElementById("new-date").value;
    if (dateStr && !dates.includes(dateStr)) {
      dates.push(dateStr);
      updateCalendar();
      // Add this code to display the chosen date
      document.getElementById("chosen").textContent = dateStr;
    }
    document.getElementById("new-date").value = "";
  }
  

function removeDate() {
  let dateStr = document.getElementById("remove-date").value;
  if (dateStr) {
    dates = dates.filter(date => date !== dateStr);
    updateCalendar();
  }
}

function displayChosenDate() {
  let chosenDate = document.querySelector('input[type="checkbox"]:checked').value;
  let chosenTime = document.querySelector('input[type="radio"]:checked').value;
  let chosenDateTime = `${chosenDate} ${chosenTime}`;
  document.getElementById('chosen').textContent = chosenDateTime;
}
