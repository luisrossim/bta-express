/*
  Warnings:

  - Made the column `has_automacao` on table `ordem_servico` required. This step will fail if there are existing NULL values in that column.
  - Made the column `has_orcamento_banco` on table `ordem_servico` required. This step will fail if there are existing NULL values in that column.
  - Made the column `has_projeto_plantio` on table `ordem_servico` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "historico_os" ADD COLUMN     "atualizado_em" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "ordem_servico" ALTER COLUMN "has_automacao" SET NOT NULL,
ALTER COLUMN "has_orcamento_banco" SET NOT NULL,
ALTER COLUMN "has_projeto_plantio" SET NOT NULL;
