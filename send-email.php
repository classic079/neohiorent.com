<?php
// NEO Rental Agent - Contact Form Handler
// Sends form submissions to Kim's email

// Set headers for JSON response
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Configuration
$to_email = 'Kstrader@neorentalagent.com';
$bcc_email = 'john@h8s.us';
$site_name = 'NEO Rental Agent';

// Get form data and sanitize
$name = isset($_POST['name']) ? htmlspecialchars(trim($_POST['name'])) : '';
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL) : '';
$phone = isset($_POST['phone']) ? htmlspecialchars(trim($_POST['phone'])) : '';
$type = isset($_POST['type']) ? htmlspecialchars(trim($_POST['type'])) : '';
$interest = isset($_POST['interest']) ? htmlspecialchars(trim($_POST['interest'])) : '';
$properties = isset($_POST['properties']) ? htmlspecialchars(trim($_POST['properties'])) : '';
$area = isset($_POST['area']) ? htmlspecialchars(trim($_POST['area'])) : '';
$message = isset($_POST['message']) ? htmlspecialchars(trim($_POST['message'])) : '';
$form_type = isset($_POST['form_type']) ? htmlspecialchars(trim($_POST['form_type'])) : 'contact';

// Validate required fields
$errors = [];

if (empty($name)) {
    $errors[] = 'Name is required';
}

if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'Valid email is required';
}

if (empty($phone)) {
    $errors[] = 'Phone is required';
}

if ($form_type === 'contact' && empty($message)) {
    $errors[] = 'Message is required';
}

// If there are errors, return them
if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => implode(', ', $errors)]);
    exit;
}

// Build email subject
if ($form_type === 'landlord') {
    $subject = "New Landlord Consultation Request - $name";
} else {
    $subject = "New Contact Form Submission - $name";
}

// Build email body
$email_body = "You have received a new message from the $site_name website.\n\n";
$email_body .= "=================================\n";
$email_body .= "CONTACT INFORMATION\n";
$email_body .= "=================================\n";
$email_body .= "Name: $name\n";
$email_body .= "Email: $email\n";
$email_body .= "Phone: $phone\n";

if (!empty($type)) {
    $email_body .= "Type: $type\n";
}

if (!empty($interest)) {
    $email_body .= "Interest: $interest\n";
}

if (!empty($properties)) {
    $email_body .= "Number of Properties: $properties\n";
}

if (!empty($area)) {
    $email_body .= "Area of Interest: $area\n";
}

$email_body .= "\n=================================\n";
$email_body .= "MESSAGE\n";
$email_body .= "=================================\n";
$email_body .= "$message\n\n";

$email_body .= "=================================\n";
$email_body .= "Sent from: neohiorent.com\n";
$email_body .= "Time: " . date('Y-m-d H:i:s') . "\n";

// Email headers
$headers = "From: noreply@neohiorent.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "Bcc: $bcc_email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Send email
$mail_sent = mail($to_email, $subject, $email_body, $headers);

if ($mail_sent) {
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent. We will get back to you within 24 hours.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Sorry, there was an error sending your message. Please try calling us instead.']);
}
?>
