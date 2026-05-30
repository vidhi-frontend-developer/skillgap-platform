<?php

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

include("../config/db.php");

$data = json_decode(
    file_get_contents("php://input"),
    true
);

$user_email =
    $data["user_email"];

$job_role =
    $data["job_role"];

$matched_skills =
    json_encode(
        $data["matched_skills"]
    );

$missing_skills =
    json_encode(
        $data["missing_skills"]
    );

$percentage =
    $data["percentage"];

$sql = $conn->prepare(
    "INSERT INTO analysis_history
    (
        user_email,
        job_role,
        matched_skills,
        missing_skills,
        percentage
    )
    VALUES
    (?,?,?,?,?)"
);

$sql->bind_param(
    "ssssi",
    $user_email,
    $job_role,
    $matched_skills,
    $missing_skills,
    $percentage
);

if ($sql->execute()) {

    echo json_encode([
        "success" => true
    ]);

} else {

    echo json_encode([
        "success" => false
    ]);
}

?>