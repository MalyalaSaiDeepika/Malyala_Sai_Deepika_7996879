console.log("Welcome to the Community Portal");

window.onload = function () {

    alert("Page Fully Loaded");

    loadEvents();
};

/* Event Data */

const events = [

    {
        name: "Music Event",
        date: "2026-12-20",
        seats: 50,
        category: "Music",
        location: "Hyderabad"
    },

    {
        name: "Tech Workshop",
        date: "2026-11-10",
        seats: 30,
        category: "Technology",
        location: "Bangalore"
    },

    {
        name: "Food Festival",
        date: "2026-10-05",
        seats: 20,
        category: "Food",
        location: "Chennai"
    },

    {
        name: "Dance Event",
        date: "2026-09-15",
        seats: 25,
        category: "Dance",
        location: "Mumbai"
    },

    {
        name: "Art Exhibition",
        date: "2026-08-18",
        seats: 15,
        category: "Art",
        location: "Delhi"
    },

    {
        name: "Sports Meetup",
        date: "2026-07-22",
        seats: 40,
        category: "Sports",
        location: "Pune"
    }
];

/* Closure Example */

function registrationTracker() {

    let totalRegistrations = 0;

    return function () {

        totalRegistrations++;

        console.log(
            "Total Registrations:",
            totalRegistrations
        );
    };
}

const trackRegistration =
    registrationTracker();

/* Load Events */

function loadEvents() {

    const container =
        document.getElementById(
            "eventsContainer"
        );

    container.innerHTML = "";

    events.forEach((event, index) => {

        const card =
            document.createElement("div");

        card.className = "eventCard";

        card.innerHTML = `

            <h3>${event.name}</h3>

            <p>Date: ${event.date}</p>

            <p>Seats: ${event.seats}</p>

            <p>Location: ${event.location}</p>

            <button onclick=
            "registerUser(${index})">

                Register

            </button>
        `;

        container.appendChild(card);
    });
}

/* Register User */

function registerUser(index) {

    try {

        if (events[index].seats <= 0) {

            throw new Error(
                "No Seats Available"
            );
        }

        events[index].seats--;

        trackRegistration();

        alert(
            "Registration Successful"
        );

        loadEvents();
    }

    catch (error) {

        alert(error.message);
    }
}

/* Event Fee */

function showFee(value) {

    document.getElementById(
        "fee"
    ).innerHTML =

        "Event Fee: ₹" + value;
}

/* Character Counter */

function countChars(textarea) {

    document.getElementById(
        "charCount"
    ).innerHTML =

        "Characters: " +
        textarea.value.length;
}

/* Phone Validation */

function validatePhone(input) {

    if (input.value.length < 10) {

        alert(
            "Phone Number must contain 10 digits"
        );
    }
}

/* Feedback Counter */

function countFeedbackChars(textarea) {

    document.getElementById(
        "feedbackCount"
    ).innerHTML =

        "Characters Typed: " +
        textarea.value.length;
}

/* Image Enlarge */

function enlargeImage(img) {

    img.style.width = "400px";
}

/* Geolocation */

function findLocation() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            function (position) {

                document.getElementById(
                    "location"
                ).innerHTML =

                    "Latitude: " +
                    position.coords.latitude +

                    "<br>Longitude: " +
                    position.coords.longitude;
            },

            function () {

                alert(
                    "Location Permission Denied"
                );
            }
        );
    }
}

/* Filter Events */

function filterEventsByCategory() {

    const category =
        document.getElementById(
            "categoryFilter"
        ).value;

    const container =
        document.getElementById(
            "eventsContainer"
        );

    container.innerHTML = "";

    const filtered =
        events.filter(
            event =>
            event.category === category
        );

    filtered.forEach((event, index) => {

        const card =
            document.createElement("div");

        card.className = "eventCard";

        card.innerHTML = `

            <h3>${event.name}</h3>

            <p>Date: ${event.date}</p>

            <p>Seats: ${event.seats}</p>

            <p>Location: ${event.location}</p>

            <button onclick=
            "registerUser(${index})">

                Register

            </button>
        `;

        container.appendChild(card);
    });
}

/* Submit Registration */

function submitRegistration() {

    const loading =
        document.getElementById(
            "loading"
        );

    loading.innerHTML =
        "Submitting Registration...";

    setTimeout(() => {

        loading.innerHTML =
            "Registration Successful";

    }, 2000);
}

/* Form Handling */

document.getElementById(
    "registrationForm"
).addEventListener(

    "submit",

    function (event) {

        event.preventDefault();

        alert(
            "Form Submitted Successfully"
        );
    }
);

/* Keyboard Event */

document.addEventListener(

    "keydown",

    function (e) {

        console.log(
            "Key Pressed:",
            e.key
        );
    }
);

/* Object Constructor */

function Event(
    name,
    date,
    seats
) {

    this.name = name;

    this.date = date;

    this.seats = seats;
}

/* Prototype */

Event.prototype.checkAvailability =
function () {

    return this.seats > 0
        ? "Available"
        : "Full";
};

/* Object Entries */

const sampleEvent =
    new Event(
        "Workshop",
        "2026-12-01",
        20
    );

console.log(
    Object.entries(sampleEvent)
);

/* Spread Operator */

const copiedEvents = [...events];

console.log(copiedEvents);

/* Destructuring */

const {

    name,
    date,
    seats

} = events[0];

console.log(
    name,
    date,
    seats
);

/* Default Parameters */

function greetUser(
    username = "Guest"
) {

    console.log(
        "Welcome",
        username
    );
}

greetUser();

/* map() */

const eventNames =
    events.map(

        event =>
        "Workshop on " +
        event.name
    );

console.log(eventNames);

/* push() */

events.push({

    name: "Coding Contest",

    date: "2026-06-30",

    seats: 35,

    category: "Technology",

    location: "Hyderabad"
});

/* Fetch API */

fetch(
    "https://jsonplaceholder.typicode.com/posts"
)

.then(response =>
    response.json()
)

.then(data => {

    console.log(data);
})

.catch(error => {

    console.log(error);
});

/* Async Await */

async function fetchEvents() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const data =
            await response.json();

        console.log(data);
    }

    catch (error) {

        console.log(error);
    }
}

fetchEvents();

/* POST Request */

async function sendRegistration() {

    const userData = {

        name: "Deepika",

        event: "Music Event"
    };

    try {

        const response =
            await fetch(

                "https://jsonplaceholder.typicode.com/posts",

                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                        "application/json"
                    },

                    body: JSON.stringify(
                        userData
                    )
                }
            );

        const data =
            await response.json();

        console.log(data);
    }

    catch (error) {

        console.log(error);
    }
}

sendRegistration();

/* jQuery */

$(document).ready(function () {

    $("#registerBtn").click(function () {

        $(".eventCard").fadeOut(500);

        $(".eventCard").fadeIn(500);
    });
});