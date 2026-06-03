function showConfirmation() {

    document.getElementById("outputMessage").innerHTML =
        "Registration Successful!";
}

/* Phone Validation */

function validatePhone(input) {

    if (input.value.length < 10) {

        alert("Phone number must be 10 digits");
    }
}

/* Event Fee Display */

function showFee(value) {

    document.getElementById("fee").innerHTML =
        "Event Fee: ₹" + value;

    localStorage.setItem(
        "preferredEvent",
        value
    );
}

/* Message Character Count */

function countChars(textarea) {

    let count = textarea.value.length;

    document.getElementById("charCount").innerHTML =
        "Characters: " + count;
}

/* Feedback Character Count */

function countFeedbackChars(textarea) {

    let count = textarea.value.length;

    document.getElementById("feedbackCount").innerHTML =
        "Characters Typed: " + count;
}

/* Double Click Image */

function enlargeImage(img) {

    img.style.width = "400px";
}

/* Video Ready */

function videoReady() {

    alert("Video ready to play");
}

/* Exit Warning */

function confirmExit() {

    return "Form not submitted!";
}

/* Geolocation */

function findLocation() {

    navigator.geolocation.getCurrentPosition(

        function(position) {

            document.getElementById("location").innerHTML =

                "Latitude: " +
                position.coords.latitude +

                "<br>Longitude: " +
                position.coords.longitude;
        },

        function(error) {

            alert("Location access denied");
        },

        {
            enableHighAccuracy: true,
            timeout: 5000
        }
    );
}

/* Load Saved Preference */

window.onload = function () {

    let savedEvent =
        localStorage.getItem("preferredEvent");

    if (savedEvent) {

        document.getElementById("eventType").value =
            savedEvent;
    }
}

/* Clear Preferences */

function clearPreferences() {

    localStorage.clear();

    sessionStorage.clear();

    alert("Preferences Cleared");
}