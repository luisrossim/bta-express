-- CreateTable
CREATE TABLE "clientes" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "is_ativo" BOOLEAN NOT NULL DEFAULT true,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enderecos" (
    "id" SERIAL NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "hectare" INTEGER,
    "coordenadas_geograficas" TEXT,
    "km_loja_cliente" INTEGER,
    "referencia" TEXT,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "enderecos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "roleId" INTEGER NOT NULL,
    "atualizado_em" TIMESTAMP(3) NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "sigla" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "anexos" (
    "id" TEXT NOT NULL,
    "historico_os_id" TEXT NOT NULL,
    "tipo_anexo_id" INTEGER NOT NULL,
    "url" TEXT NOT NULL,
    "descricao" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "anexos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "etapas" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "etapas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "etapa_usuario" (
    "etapa_id" INTEGER NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "etapa_usuario_pkey" PRIMARY KEY ("etapa_id","usuario_id")
);

-- CreateTable
CREATE TABLE "ordem_servico" (
    "id" TEXT NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "has_automacao" BOOLEAN,
    "has_orcamento_banco" BOOLEAN,
    "has_projeto_plantio" BOOLEAN,
    "quantidade_setores" INTEGER,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ordem_servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assistencias" (
    "ordem_servico_id" TEXT NOT NULL,
    "problema" TEXT,
    "tipo_energia_id" INTEGER,
    "motobomba_id" INTEGER,
    "polegadas_valvulas_registro" INTEGER,
    "diametro_adutora_mestre" TEXT,
    "observacoes" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "assistencias_pkey" PRIMARY KEY ("ordem_servico_id")
);

-- CreateTable
CREATE TABLE "historico_os" (
    "id" TEXT NOT NULL,
    "ordem_servico_id" TEXT NOT NULL,
    "etapa_id" INTEGER NOT NULL,
    "observacoes" TEXT,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "historico_os_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "atribuicoes" (
    "historico_os_id" TEXT NOT NULL,
    "usuario_id" INTEGER NOT NULL,

    CONSTRAINT "atribuicoes_pkey" PRIMARY KEY ("historico_os_id","usuario_id")
);

-- CreateTable
CREATE TABLE "tipo_anexo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tipo_anexo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipo_energia" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "tipo_energia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "motobombas" (
    "id" SERIAL NOT NULL,
    "codigo_identificacao" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "marca_id" INTEGER NOT NULL,
    "cv" TEXT NOT NULL,
    "is_ativo" BOOLEAN NOT NULL DEFAULT true,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "motobombas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "marcas" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "marcas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "clientes_cpf_key" ON "clientes"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE UNIQUE INDEX "roles_sigla_key" ON "roles"("sigla");

-- AddForeignKey
ALTER TABLE "enderecos" ADD CONSTRAINT "enderecos_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "usuarios" ADD CONSTRAINT "usuarios_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anexos" ADD CONSTRAINT "anexos_historico_os_id_fkey" FOREIGN KEY ("historico_os_id") REFERENCES "historico_os"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "anexos" ADD CONSTRAINT "anexos_tipo_anexo_id_fkey" FOREIGN KEY ("tipo_anexo_id") REFERENCES "tipo_anexo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "etapa_usuario" ADD CONSTRAINT "etapa_usuario_etapa_id_fkey" FOREIGN KEY ("etapa_id") REFERENCES "etapas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "etapa_usuario" ADD CONSTRAINT "etapa_usuario_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ordem_servico" ADD CONSTRAINT "ordem_servico_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "clientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assistencias" ADD CONSTRAINT "assistencias_ordem_servico_id_fkey" FOREIGN KEY ("ordem_servico_id") REFERENCES "ordem_servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assistencias" ADD CONSTRAINT "assistencias_tipo_energia_id_fkey" FOREIGN KEY ("tipo_energia_id") REFERENCES "tipo_energia"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "assistencias" ADD CONSTRAINT "assistencias_motobomba_id_fkey" FOREIGN KEY ("motobomba_id") REFERENCES "motobombas"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_os" ADD CONSTRAINT "historico_os_ordem_servico_id_fkey" FOREIGN KEY ("ordem_servico_id") REFERENCES "ordem_servico"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historico_os" ADD CONSTRAINT "historico_os_etapa_id_fkey" FOREIGN KEY ("etapa_id") REFERENCES "etapas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atribuicoes" ADD CONSTRAINT "atribuicoes_historico_os_id_fkey" FOREIGN KEY ("historico_os_id") REFERENCES "historico_os"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "atribuicoes" ADD CONSTRAINT "atribuicoes_usuario_id_fkey" FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "motobombas" ADD CONSTRAINT "motobombas_marca_id_fkey" FOREIGN KEY ("marca_id") REFERENCES "marcas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
