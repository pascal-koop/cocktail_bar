-- AlterTable
ALTER TABLE `credentials` ADD COLUMN `last_login_date` DATETIME(0) NULL DEFAULT CURRENT_TIMESTAMP(0);
