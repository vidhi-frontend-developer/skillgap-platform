CREATE DATABASE IF NOT EXISTS skillgap_db;

USE skillgap_db;

-- ====================================
-- USERS TABLE
-- ====================================

CREATE TABLE users (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(100) UNIQUE NOT NULL,

    password VARCHAR(255) NOT NULL,

    role VARCHAR(100),

    skills TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

-- ====================================
-- ANALYSIS TABLE
-- ====================================

CREATE TABLE analysis_history (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_email VARCHAR(100),

    job_role VARCHAR(100),

    matched_skills TEXT,

    missing_skills TEXT,

    percentage INT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);