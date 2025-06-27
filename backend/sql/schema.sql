-- Table d'authentification
CREATE TABLE IF NOT EXISTS authentification (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role ENUM('citizen', 'agent', 'admin') NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table user
CREATE TABLE IF NOT EXISTS user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    auth_id INT UNIQUE,
    pseudo VARCHAR(255),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    district VARCHAR(255),
    loyalty_points INT DEFAULT 0,
    FOREIGN KEY (auth_id) REFERENCES authentification(id)
);

-- Table admin_request
CREATE TABLE IF NOT EXISTS admin_request (
    id CHAR(36) PRIMARY KEY,
    hashed_token VARCHAR(255) NOT NULL,
    related_user_id INT NOT NULL,
    status ENUM('PENDING', 'CONFIRMED', 'EXPIRED') NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    expires_at DATETIME,
    FOREIGN KEY (related_user_id) REFERENCES user(id)
);

-- Table agent
CREATE TABLE IF NOT EXISTS agent (
    user_id INT PRIMARY KEY,
    agent_number VARCHAR(50) NOT NULL UNIQUE,
    created_by INT,
    center_id INT,
    team_id INT,
    sector VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (created_by) REFERENCES user(id)
);

-- Table admin
CREATE TABLE IF NOT EXISTS admin (
    user_id INT PRIMARY KEY,
    center_id INT,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Table badge
CREATE TABLE IF NOT EXISTS badge (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255)
);

-- table user_badge
CREATE TABLE IF NOT EXISTS user_badge (
    user_id INT NOT NULL,
    badge_id INT NOT NULL,
    obtained_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, badge_id),
    FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE,
    FOREIGN KEY (badge_id) REFERENCES badge(id) ON DELETE CASCADE
);
