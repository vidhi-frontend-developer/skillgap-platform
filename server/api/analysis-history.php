<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$email = $_GET["email"];

$sql = $conn->prepare(
    "SELECT * FROM analysis_history
    WHERE user_email=?
    ORDER BY created_at DESC"
);

$sql->bind_param(
    "s",
    $email
);

$sql->execute();

$result =
    $sql->get_result();

$history = [];

while (
    $row = $result->fetch_assoc()
) {

    $history[] = $row;
}

echo json_encode([
    "success" => true,
    "history" => $history
]);

?>