<?php
// Configuration
$to_email = "franck.maury@lexafricaconsulting.ci";
$subject_prefix = "Nouveau message - Lex Africa Consulting";

// CORS headers for the frontend
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit();
}

// Get JSON data from request body
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate required fields
$required_fields = ['firstName', 'lastName', 'email', 'company', 'project'];
foreach ($required_fields as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(['success' => false, 'message' => "Le champ $field est requis"]);
        exit();
    }
}

// Sanitize inputs
$firstName = htmlspecialchars(strip_tags(trim($data['firstName'])));
$lastName = htmlspecialchars(strip_tags(trim($data['lastName'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$company = htmlspecialchars(strip_tags(trim($data['company'])));
$project = htmlspecialchars(strip_tags(trim($data['project'])));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Adresse email invalide']);
    exit();
}

// Validate field lengths
if (strlen($firstName) > 100 || strlen($lastName) > 100 || strlen($email) > 255 || strlen($company) > 200 || strlen($project) > 2000) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Un ou plusieurs champs dépassent la longueur maximale autorisée']);
    exit();
}

// Build email content
$subject = "$subject_prefix - $firstName $lastName";

$message = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #1a365d; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background-color: #f9f9f9; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #1a365d; }
        .value { margin-top: 5px; }
        .project-content { background-color: white; padding: 15px; border-left: 4px solid #1a365d; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Nouveau message de contact</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Nom complet :</div>
                <div class='value'>$firstName $lastName</div>
            </div>
            <div class='field'>
                <div class='label'>Email :</div>
                <div class='value'><a href='mailto:$email'>$email</a></div>
            </div>
            <div class='field'>
                <div class='label'>Entreprise :</div>
                <div class='value'>$company</div>
            </div>
            <div class='field'>
                <div class='label'>Description du projet :</div>
                <div class='project-content'>" . nl2br($project) . "</div>
            </div>
        </div>
    </div>
</body>
</html>
";

// Email headers
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Lex Africa Consulting <noreply@lexafricaconsulting.ci>\r\n";
$headers .= "Reply-To: $email\r\n";

// Send email
$mail_sent = mail($to_email, $subject, $message, $headers);

if ($mail_sent) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Email envoyé avec succès']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Erreur lors de l\'envoi de l\'email']);
}
?>
