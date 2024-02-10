const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pour analyser les données JSON des requêtes POST
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res)=>{
    res.send("Bienvenue ggg") 
})
// Endpoint pour recevoir les commentaires
app.post('/comment', (req, res) => {
  const { name, email, message } = req.body;

  // Configuration de nodemailer pour envoyer un e-mail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kossiwinnerawouno@gmail.com',
      pass: 'winner@3002'
    }
  });

  const mailOptions = {
    from: document.getElementById("email").value,
    to: 'kossiwinnerawouno@gmail.com', // Remplacez par votre adresse e-mail
    subject: document.getElementById("message").value,
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // Envoi de l'e-mail
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Erreur lors de l\'envoi du commentaire.');
    } else {
      console.log('E-mail envoyé: ' + info.response);
      res.status(200).send('Commentaire envoyé avec succès.');
    }
  });
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
