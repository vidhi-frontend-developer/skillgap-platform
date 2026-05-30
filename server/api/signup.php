<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$name = $data["name"];
$email = $data["email"];
$password = $data["password"];

$hashedPassword =
    password_hash(
        $password,
        PASSWORD_DEFAULT
    );

$checkEmail = $conn->prepare(
    "SELECT * FROM users WHERE email=?"
);

$checkEmail->bind_param(
    "s",
    $email
);

$checkEmail->execute();

$result =
    $checkEmail->get_result();

if ($result->num_rows > 0) {

    echo json_encode([
        "success" => false,
        "message" =>
            "Email already exists"
    ]);

    exit();
}

$sql = $conn->prepare(
    "INSERT INTO users
    (name,email,password)
    VALUES (?,?,?)"
);

$sql->bind_param(
    "sss",
    $name,
    $email,
    $hashedPassword
);

if ($sql->execute()) {

    echo json_encode([
        "success" => true,
        "message" =>
            "Signup successful"
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" =>
            "Signup failed"
    ]);
}

?>