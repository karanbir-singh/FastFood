<?php
// Dice a livello dello script che gli errori verranno mostrati
// e che non verrano loggati
ini_set('display_errors', 1);
ini_set('log_errors', 0);

// Parametri di configurazione
$host = '<your_host>';
$db = 'fastfood';
$user = '<your_username>';
$pass = '<your_password>';
$charset = 'utf8';

// Data Source Name
$dsn = "mysql:host=$host;dbname=$db;charset=$charset";

// Settaggi opzionali
$opt = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION, // Trasforma tutti gli errori SQL in eccezioni PHP

    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC // La query restituisce un array indicizzato
    // in base al nome della colonna come restituito nel set di risultati
];

// Oggetto che rappresenta la connessione al database
$pdo = new PDO($dsn, $user, $pass, $opt);

// Su qualsiasi pagine parte la sessione
session_start();

// Questo è il modo trovato per leggere i dati della richiesta POST
$_POST = json_decode(file_get_contents("php://input"), true);
