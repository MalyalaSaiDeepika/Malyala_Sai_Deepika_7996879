function showConfirmation() {

    document.getElementById("outputMessage").innerHTML =
        "Registration Successful!";
}

function validatePhone(input) {

    if (input.value.length < 10) {

        alert("Phone number must be 10 digits");
    }
}

function showFee(value) {

    document.getElementById("fee").innerHTML =
        "Event Fee: ₹" + value;
}

function countChars(textarea) {

    let count = textarea.value.length;

    document.getElementById("charCount").innerHTML =
        "Characters: " + count;
}

function countFeedbackChars(textarea) {

    let count = textarea.value.length;

    document.getElementById("feedbackCount").innerHTML =
        "Characters Typed: " + count;
}

function enlargeImage(img) {

    img.style.width = "400px";
}

function videoReady() {

    alert("Video ready to play");
}

function confirmExit() {

    return "Form not submitted!";
}

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

localStorage.setItem(
    "preferredEvent",
    "Music Event"
);