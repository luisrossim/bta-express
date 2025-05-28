/*
  Warnings:

  - A unique constraint covering the columns `[descricao]` on the table `etapas` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "etapas_descricao_key" ON "etapas"("descricao");
