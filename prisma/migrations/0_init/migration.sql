-- CreateTable
CREATE TABLE `cocktails` (
    `cocktail_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cocktail_name` VARCHAR(75) NOT NULL,
    `cocktail_price` DECIMAL(5, 2) NOT NULL,
    `ingredients` VARCHAR(255) NOT NULL,
    `category` VARCHAR(50) NOT NULL,
    `cart_image_url` VARCHAR(200) NOT NULL,
    `image_url` VARCHAR(200) NOT NULL,
    `cocktail_history` TEXT NULL,

    PRIMARY KEY (`cocktail_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `line_items` (
    `line_item_id` INTEGER NOT NULL AUTO_INCREMENT,
    `order_id` INTEGER NOT NULL,
    `order_amount` INTEGER NOT NULL,
    `cocktail_name` VARCHAR(75) NOT NULL,
    `single_price` DECIMAL(5, 2) NOT NULL,
    `sum_price` DECIMAL(5, 2) NULL,

    INDEX `order_id`(`order_id`),
    PRIMARY KEY (`line_item_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `order_id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `order_date` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `order_sum_price` DECIMAL(5, 2) NULL,

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`order_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(100) NOT NULL,
    `last_name` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `phone` VARCHAR(50) NULL,
    `magic_link` VARCHAR(255) NULL,
    `magic_link_expired` BOOLEAN NULL DEFAULT false,

    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `line_items` ADD CONSTRAINT `line_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders`(`order_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users`(`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

