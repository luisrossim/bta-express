-- AlterTable
ALTER TABLE "ordem_servico" ALTER COLUMN "has_automacao" DROP NOT NULL,
ALTER COLUMN "has_orcamento_banco" DROP NOT NULL,
ALTER COLUMN "has_projeto_plantio" DROP NOT NULL;
