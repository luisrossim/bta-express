/*
  Warnings:

  - You are about to drop the column `historico_os_id` on the `anexos` table. All the data in the column will be lost.
  - Added the required column `ordem_servico_id` to the `anexos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "anexos" DROP CONSTRAINT "anexos_historico_os_id_fkey";

-- AlterTable
ALTER TABLE "anexos" DROP COLUMN "historico_os_id",
ADD COLUMN     "ordem_servico_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "anexos" ADD CONSTRAINT "anexos_ordem_servico_id_fkey" FOREIGN KEY ("ordem_servico_id") REFERENCES "ordem_servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
