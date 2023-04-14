/*
  Warnings:

  - You are about to drop the column `magic_link` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `magic_link_expired` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `magic_link`,
    DROP COLUMN `magic_link_expired`;
