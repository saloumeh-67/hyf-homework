CREATE Table `customer_master` (
customer_number INT(10) AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(10)NOT NULL,
middle_name VARCHAR(10)NULL,
last_name VARCHAR(10)NOT NULL,
customer_city VARCHAR(10)NOT NULL,
customer_contact_number INT(10) NOT NULL,
customer_date_of_birth DATETIME NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE Table `account_master`(
    account_number INT(10) AUTO_INCREMENT PRIMARY KEY,
    customer_number INT(10) NOT NULL,
    branch_id INT(10)NOT NULL,
    opening_balance DATETIME NOT NULL,
    account_type VARCHAR(200) NOT NULL,
    account_opening_date DATETIME NOT NULL,
    CONSTRAINT `FK_customer_number` FOREIGN KEY (customer_number)
    REFERENCES customer_master(customer_number),
    CONSTRAINT `FK_branch_id` FOREIGN KEY (branch_id)
    REFERENCES branch_master(branch_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE Table `transaction_details`(
    transaction_number INT(10) AUTO_INCREMENT PRIMARY KEY,
    account_number INT(10) NOT NULL,
    date_of_transaction DATETIME NOT NULL,
    transaction_amount INT(10) NOT NULL,
    CONSTRAINT `FK_account_number` FOREIGN KEY (account_number)
    REFERENCES account_master(account_number)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE Table `branch_master`( 
    branch_id INT(10) AUTO_INCREMENT PRIMARY KEY,
    branch_name VARCHAR(200) NOT NULL,
    branch_city VARCHAR(20) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
CREATE Table `loan_details`(
    customer_number INT(10) NOT NULL,
    branch_id INT(10)NOT NULL,
    loan_amount INT(100),
    CONSTRAINT `FK_customer_number2` FOREIGN KEY (customer_number)
    REFERENCES customer_master(customer_number),
    CONSTRAINT `FK_branch_id2` FOREIGN KEY (branch_id)
    REFERENCES branch_master(branch_id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;