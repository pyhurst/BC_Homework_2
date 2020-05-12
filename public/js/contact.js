$(function () {
    const firstName = $("#first-name-input");
    const lastName = $("#last-name-input");
    const email = $("#email-input");
    const phoneNum = $("#phone-number-input");
    const category = $("#category-dropdown");
    const details = $("#details-input");


    $("#contact-submit").on("click", function (e) {
        e.preventDefault();
        // console.log(firstName.val());

        const userInfo = {
            firstName: firstName.val().trim()
        }

        $.ajax("/api/contact", {
            type: "POST",
            data: userInfo
        }).then(function (data) {
            console.log("saved");
        });
    });
});