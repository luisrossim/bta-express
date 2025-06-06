import { prisma } from "@/config/database.js";

async function seed(){
  await prisma.role.createMany({
    data: [
      { id: 1, descricao: 'Admin'},
      { id: 2, descricao: 'Técnico'},
      { id: 3, descricao: 'Assistente'}
    ]
  })

  await prisma.usuario.upsert({
    where: { email: 'bruno@bta.com.br' },
    update: {},
    create: {
      nome: 'Bruno',
      email: 'bruno@bta.com.br',
      password: '$2a$12$nc5vxpwbZ6XghqJDk3qOFe5i5PtePZIb2aIEXx2b4DoPpIc2g5cQ6',
      telefone: '27999999999',
      role: {
        connect: {
          descricao: 'Admin'
        }
      }
    }
  })

  await prisma.etapa.createMany({
    data: [
      { id: 1, descricao: "Medição" },
      { id: 2, descricao: "Projeto" },
      { id: 3, descricao: "Lançamento de orçamento" },
      { id: 4, descricao: "Análise de orçamento" },
      { id: 5, descricao: "Apresentação do projeto" },
      { id: 6, descricao: "Negociação" },
      { id: 7, descricao: "Painel elétrico" },
      { id: 8, descricao: "Separação e entrega" },
      { id: 9, descricao: "Montagem" },
      { id: 10, descricao: "Assistência" }
    ]
  });

  await prisma.tipoEnergia.createMany({
    data: [
      { id: 1, descricao: "Monofásico" },
      { id: 2, descricao: "Trifásico"}
    ]
  })

  await prisma.etapaUsuario.createMany({
    data: [
      {etapaId: 1, usuarioId: 1}
    ]
  })
}

seed()
  .then(() => {
    console.log("Seeded.");
  })
  .catch((err) => {
    console.error("Erro ao rodar seed:", err);
  })
  .finally(() => {
    prisma.$disconnect();
  });