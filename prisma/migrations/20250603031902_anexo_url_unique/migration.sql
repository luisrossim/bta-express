/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `anexos` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "anexos_url_key" ON "anexos"("url");
