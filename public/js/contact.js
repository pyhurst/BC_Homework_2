$(function () {
    const firstName = $("#first-name-input");
    const lastName = $("#last-name-input");
    const email = $("#email-input");
    const phoneNum = $("#phone-number-input");
    const category = $("#category-dropdown");
    const details = $("#details-input");
    const display = $("#submit-message");


    $("#contact-submit").on("click", function (e) {
        e.preventDefault();

        const userInfo = {
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim(),
            email: email.val().trim(),
            phone: phoneNum.val().trim(),
            type: category.val(),
            details: details.val().trim()
        }

        if (firstName.val() === "" || lastName.val() === "" || email.val() === "" || phoneNum.val() === "" || details.val() === ""){
            display.empty();
            display.append($("<p>").attr("style", "color: red;").text("Oops! All fields must have a value!"));
            setTimeout(function() {
                display.empty();
            }, 5000);
        } else {
        $.ajax("/api/contact", {
            type: "POST",
            data: userInfo
        }).then(function (data) {
            console.log("saved");
            display.empty();
            display.append($("<p>").attr("style", "color: green;").text("Successfully submitted!"));
            setTimeout(function() {
                display.empty();
            }, 5000);
        });

        $(".clear").val("");
    }
    });
});