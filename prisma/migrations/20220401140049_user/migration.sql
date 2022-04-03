/*
  Warnings:

  - You are about to drop the column `comment` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `post` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "comment",
DROP COLUMN "post";
