/******************************************
 * Refle
 *
 * Bootstrap 4 Login Page
 *
 * @author          Alif Triadi Agung Wicaksono
 * @uri 			https://www.alftri.xyz/
 * @copyright       Copyright (c) 2018 Alif Triadi Agung Wicaksono
 * @license         Refle is licensed under the MIT license.
 * @github          https://github.com/aliftrd/refle-login-template
 * @version         v1.0.0
 *
 * 
 ******************************************/

'use strict';

// author badge :)
var author = '<div style="position: fixed;bottom: 0;right: 20px;background-color: #fff;box-shadow: 0 4px 8px rgba(0,0,0,.05);border-radius: 3px 3px 0 0;font-size: 12px;padding: 5px 10px;">By <a href="https://instagram.com/alftri.dev">@alftri.dev</a></div>';
$("body").append(author);

// Bootstrap 4 Validation
window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
}, false);

// Password show
$(".toggle-password").click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("id"));
    if (input.attr("type") == "password") {
        input.attr("type", "text");
    } else {
        input.attr("type", "password");
    }
});