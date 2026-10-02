/* ================= NIGHT / MORNING ================= */

function toggleMood() {
    const body = document.body;
    const button = document.getElementById("moodButton");

    if (body.classList.contains("morning")) {
        body.classList.remove("morning");
        button.innerHTML = "🌙 NIGHT";
    } else {
        body.classList.add("morning");
        button.innerHTML = "🌅 MORNING";
    }
}


/* ================= TABLE BOOKING ================= */

function bookTable(event) {
    event.preventDefault();

    const name = document.getElementById("bookingName").value;
    const phone = document.getElementById("bookingPhone").value;
    const date = document.getElementById("bookingDate").value;
    const time = document.getElementById("bookingTime").value;
    const guests = document.getElementById("bookingGuests").value;

    const subject = "Kakatiya Grand - Table Booking";

    const body =
`Hi Kakatiya Grand,

I would like to book a table.

Name: ${name}
Phone: ${phone}
Date: ${date}
Time: ${time}
Number of Guests: ${guests}

Thank you.`;

    const emailURL =
        "mailto:Sindhuchowdary2508@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

    window.location.href = emailURL;
}
