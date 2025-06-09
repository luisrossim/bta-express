### API para GERENCIAMENTO de ORDENS DE SERVIÇO

*[CASO REAL]*

API REST construída com **Express**, **Prisma** e **PostgreSQL**, projetada para o gerenciamento de **ordens de serviço**. Inclui infraestrura com **AWS RDS**, **AWS EC2**, **Docker** e recursos de **autenticação (JWT)**, **controle de acesso (Roles)**, **upload de arquivos** com **AWS S3**, além de **monitoramento de logs** com **AWS CloudWatch/Better Stack (Logtail)**.

---

#### 🤝 Prisma Migrate (seed)

- `npx prisma migrate dev`
- `npx prisma db seed`

---

#### ↪️ Gitflow workflow

- `main`
- `develop`
- `feature/...`
- `bugfix/...`
- `hotfix/...`
- `release/...`

---

#### 📦 Scripts NPM

- `npm run dev`: Inicia o servidor em modo de desenvolvimento com hot-reload (via `tsx`)
- `npm run test`: Executa os testes com Jest
- `npm run build`: Compila o projeto para javascript na pasta `dist`

---

#### 🚀 Tecnologias e Funcionalidades

- **Express.js**: Framework web rápido e minimalista.
- **Prisma**: ORM moderno para manipulação de banco de dados PostgreSQL.
- **PostgreSQL**: Banco de dados relacional.
- **TypeScript**: Tipagem estática para JavaScript.
- **Docker**: Conteinerização da aplicação.
- **AWS S3**: Armazenamento de arquivos.
- **AWS CloudWatch**: Monitoramento e armazenamento de logs.
- **Better Stack LogTail**: Plataforma gratuita para monitoramento de logs.
- **Winston**: Logger configurável com suporte a múltiplos transportes.
- **Jest**: Testes automatizados.
- **Bcrypt**: Hash de senhas.
- **JWT HTTPOnly**: Autenticação segura.
- **Refresh JWT Token**: Gerar novo access-token.
- **data fns**: Manipulação de datas.
- **express rate limit**: Proteção conta brute-force.
- **roles middleware**: Autorização por roles.
- **zod**: Alternativa moderna para validação de esquemas.
- **global exceptions handler**: Tratamento centralizado de erros.

---

#### ✅ Pipeline de CI (GitHub Actions)

A pipeline de CI (GitHub Actions) roda nas branches develop e main, testando contra múltiplas versões do Node.js (18, 20 e 22).

---

#### ⚙️ Variáveis de ambiente

Crie um arquivo `.env` com as seguintes variáveis (exemplo):

```
NODE_ENV=...
DATABASE_URL=postgresql://user:password@localhost:5432/mydb
JWT_SECRET=...
REFRESH_JWT_SECRET=...
AWS_S3_BUCKET_REGION=...
AWS_S3_BUCKET_NAME=...
AWS_ACCESS_KEY=...
AWS_SECRET_ACCESS_KEY=...
```