<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$email = $_GET["email"];

$sql = $conn->prepare(
    "SELECT * FROM users
    WHERE email=?"
);

$sql->bind_param(
    "s",
    $email
);

$sql->execute();

$result =
    $sql->get_result();

if ($result->num_rows > 0) {

    $user =
        $result->fetch_assoc();

    echo json_encode([
        "success" => true,
        "user" => $user
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" =>
            "User not found"
    ]);
}

?>