/*
  Warnings:

  - You are about to drop the column `is_ativo` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `ativo` on the `usuarios` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "clientes" DROP COLUMN "is_ativo";

-- AlterTable
ALTER TABLE "usuarios" DROP COLUMN "ativo",
ADD COLUMN     "is_ativo" BOOLEAN NOT NULL DEFAULT true;
