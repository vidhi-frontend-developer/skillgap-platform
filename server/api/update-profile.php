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
$role = $data["role"];
$skills = $data["skills"];

$sql = $conn->prepare(
    "UPDATE users
    SET
    name=?,
    role=?,
    skills=?
    WHERE email=?"
);

$sql->bind_param(
    "ssss",
    $name,
    $role,
    $skills,
    $email
);

if ($sql->execute()) {

    echo json_encode([
        "success" => true,
        "message" =>
            "Profile updated"
    ]);

} else {

    echo json_encode([
        "success" => false,
        "message" =>
            "Update failed"
    ]);
}

?>