<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];

    // Informations de connexion à la base de données
    $servername = "localhost"; // Nom du serveur MySQL (peut varier)
    // $username = "if0_35284203"; // Votre nom d'utilisateur MySQL
    // $password = "winner@3002"; // Votre mot de passe MySQL
    $username = "root"; // Votre nom d'utilisateur MySQL
    $password = ""; // Votre mot de passe MySQL
    $database = "if0_35284203_messages"; // Nom de la base de données

    // Créer une connexion à la base de données
    $conn = new mysqli($servername, $username, $password, $database);

    // Vérifier la connexion à la base de données
    if ($conn->connect_error) {
        die("Échec de la connexion à la base de données : " . $conn->connect_error);
    }

    // Préparation de la requête d'insertion
    $sql = "INSERT INTO messages (name, email, phone, message) VALUES (?, ?, ?, ?)";

    // Préparation de la déclaration SQL
    $stmt = $conn->prepare($sql);

    // Vérifier si la préparation a réussi
    if ($stmt) {
        // Lier les paramètres à la requête
        $stmt->bind_param("ssss", $name, $email, $phone, $message);

        // Exécuter la requête
        if ($stmt->execute()) {
            echo "Message envoyé avec succès";
        } else {
            echo "Erreur lors de l'envoi du message : " . $stmt->error;
        }

        // Fermer la déclaration
        $stmt->close();
    } else {
        echo "Erreur lors de la préparation de la requête : " . $conn->error;
    }

    // Fermer la connexion à la base de données
    $conn->close();
}
