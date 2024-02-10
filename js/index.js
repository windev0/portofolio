import {nodemailer} from 'nodemailer';
document.addEventListener("DOMContentLoaded", function () {
    // Sélectionnez le formulaire et le bouton d'envoi
    var form = document.getElementById("contactForm");
    var submitBtn = document.getElementById("submitBtn");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêche la soumission par défaut du formulaire

        // Récupérez les valeurs des champs
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        var phone = document.getElementById("phone").value;

        // Envoyez les données au serveur pour traitement et envoi d'e-mail
        const data = {
            name: name,
            email: email,
            phone: phone,
            message: message
        };
        console.log(data)
        // const nodemailer = require('nodemailer'); 

        // Configuration pour le service d'e-mail (Gmail dans cet exemple)
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'kossiwinnerawouno@gmail.com',
                pass: 'winner@3002'
            }
        });

        // Options pour l'e-mail
        const mailOptions = {
            from: data.email,
            to: 'kossiwinnerawouno@gmail.com',
            subject: 'Nouveau message',
            text: JSON.stringify(data) // Conversion des données JSON en chaîne de caractères
        };

        // Envoi de l'e-mail
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log('Erreur lors de l\'envoi de l\'e-mail : ' + error);
            } else {
                console.log('E-mail envoyé : ' + info.response);
            }
        });

        // // Exemple de requête AJAX vers un serveur
        // var xhr = new XMLHttpRequest();
        // xhr.open("POST", "/votre-endpoint-de-traitement", true);
        // xhr.setRequestHeader("Content-Type", "application/json");
        // xhr.send(JSON.stringify(data));

        // Réinitialisez le formulaire ou affichez un message de confirmation ici
        alert('Message envoyé !');
        form.reset();
    });

});