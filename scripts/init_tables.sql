-- Table : user
CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(255) NOT NULL,
    name VARCHAR(255),
    password VARCHAR(255),
    role ENUM('agent', 'admin', 'citizen') NOT NULL,
    active BOOLEAN DEFAULT TRUE,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE(email)
);

-- Table : report
CREATE TABLE report (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    status ENUM('new', 'in_progress', 'resolved', 'rejected') NOT NULL,
    location VARCHAR(255),
    description TEXT,
    creation_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    processed_by INT,  -- ID of the agent who processed the report
    urgency_score FLOAT,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (processed_by) REFERENCES user(id)
);

-- Table : loyalty_points
CREATE TABLE loyalty_points (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    points INT NOT NULL,
    action_type VARCHAR(255),  -- For example, "report created", "badge unlocked", etc.
    action_points INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES user(id)
);

-- Table : badge
CREATE TABLE badge (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Table : user_badge (Relationship between users and badges)
CREATE TABLE user_badge (
    user_id INT,
    badge_id INT,
    PRIMARY KEY (user_id, badge_id),
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (badge_id) REFERENCES badge(id)
);

-- Table : recycling_center
CREATE TABLE recycling_center (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    address VARCHAR(255),
    latitude FLOAT,
    longitude FLOAT,
    is_open_now BOOLEAN DEFAULT TRUE
);

-- Table : collection_calendar
CREATE TABLE collection_calendar (
    id INT PRIMARY KEY AUTO_INCREMENT,
    recycling_center_id INT,
    collection_date DATETIME,
    waste_type VARCHAR(255), -- Types of waste collected (e.g., organic, paper, plastic)
    FOREIGN KEY (recycling_center_id) REFERENCES recycling_center(id)
);

-- Table : status_history (Record changes of the report status)
CREATE TABLE status_history (
    id INT PRIMARY KEY AUTO_INCREMENT,
    report_id INT,
    status ENUM('new', 'in_progress', 'resolved', 'rejected') NOT NULL,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (report_id) REFERENCES report(id)
);

-- Table : agent_assignment (Assigning agents to reports)
CREATE TABLE agent_assignment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    report_id INT,
    agent_id INT,
    assigned_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (report_id) REFERENCES report(id),
    FOREIGN KEY (agent_id) REFERENCES user(id)
);
