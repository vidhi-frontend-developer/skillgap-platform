<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$email = $data["email"];
$password = $data["password"];

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

    $user = $result->fetch_assoc();

    if (
        password_verify(
            $password,
            $user["password"]
        )
    ) {

        echo json_encode([
            "success" => true,
            "user" => [
                "name" =>
                    $user["name"],

                "email" =>
                    $user["email"],

                "role" =>
                    $user["role"],

                "skills" =>
                    $user["skills"]
            ]
        ]);

    } else {

        echo json_encode([
            "success" => false,
            "message" =>
                "Invalid password"
        ]);
    }

} else {

    echo json_encode([
        "success" => false,
        "message" =>
            "User not found"
    ]);
}

?>