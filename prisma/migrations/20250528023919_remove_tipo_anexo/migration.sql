/*
  Warnings:

  - You are about to drop the column `tipo_anexo_id` on the `anexos` table. All the data in the column will be lost.
  - You are about to drop the `tipo_anexo` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipo` to the `anexos` table without a default value. This is not possible if the table is not empty.
  - Made the column `descricao` on table `anexos` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "anexos" DROP CONSTRAINT "anexos_tipo_anexo_id_fkey";

-- AlterTable
ALTER TABLE "anexos" DROP COLUMN "tipo_anexo_id",
ADD COLUMN     "tipo" TEXT NOT NULL,
ALTER COLUMN "descricao" SET NOT NULL;

-- DropTable
DROP TABLE "tipo_anexo";
