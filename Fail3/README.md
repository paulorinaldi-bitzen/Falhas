# SupPage - Sistema de Suporte Administrativo

Sistema de painel administrativo para suporte de usuários, assinaturas e gerenciamento de poneimoedas.

## Tecnologias

### Backend
- NestJS
- Prisma 6.19.3
- PostgreSQL (2 bancos: ponei-db e player-db)
- JWT Authentication
- Firebase Authentication (configuração preparada)

### Frontend
- React + TypeScript
- Vite
- TailwindCSS
- Firebase Authentication (configuração preparada)

## Estrutura do Projeto

```
SupPageTHEEVOLUTION/
├── src/                          # Backend NestJS
│   ├── auth/                     # Módulo de autenticação
│   ├── users/                    # Módulo de usuários
│   ├── subscriptions/            # Módulo de assinaturas
│   ├── poneimoedas/              # Módulo de poneimoedas (NOVO)
│   ├── prisma/                   # Serviço Prisma
│   ├── app.module.ts
│   └── main.ts
├── prisma/                       # Schemas Prisma
│   ├── ponei-schema.prisma       # Schema do banco ponei-db
│   └── player-schema.prisma      # Schema do banco player-db
├── frontend/                     # Frontend React
│   ├── src/
│   │   ├── components/
│   │   │   ├── UsersTab.tsx
│   │   │   ├── SubscriptionsTab.tsx
│   │   │   └── PoneimoedasTab.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── index.html
│   └── package.json
├── .env                          # Variáveis de ambiente
├── package.json                  # Dependências do backend
└── tsconfig.json                 # Configuração TypeScript do backend
```

## Setup do Projeto

### 1. Configurar Banco de Dados PostgreSQL

Crie dois bancos de dados PostgreSQL:
- `ponei-db`: Para usuários e poneimoedas
- `player-db`: Para perfis e assinaturas

### 2. Configurar Variáveis de Ambiente

Copie o arquivo `.env.example` para `.env` e configure as variáveis:

```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas configurações:

```env
# Database URLs
PONEI_DATABASE_URL="postgresql://user:password@localhost:5432/ponei-db?schema=public"
PLAYER_DATABASE_URL="postgresql://user:password@localhost:5432/player-db?schema=public"

# Firebase (configure com suas credenciais)
FIREBASE_PROJECT_ID="your-project-id"
FIREBASE_CLIENT_EMAIL="your-client-email"
FIREBASE_PRIVATE_KEY="your-private-key"
FIREBASE_ALLOWED_EMAILS="admin@example.com,suporte@example.com"

# JWT
JWT_SECRET="your-secret-key-change-in-production"
JWT_EXPIRES_IN="1d"

# Server
PORT=3001
```

### 3. Instalar Dependências do Backend

```bash
npm install
```

### 4. Gerar Clientes Prisma

```bash
npm run prisma:generate
```

### 5. Executar Migrações do Banco de Dados (opcional)

Se precisar criar as tabelas no banco:

```bash
# Para o banco ponei-db
npx prisma db push --schema=prisma/ponei-schema.prisma

# Para o banco player-db
npx prisma db push --schema=prisma/player-schema.prisma
```

### 6. Instalar Dependências do Frontend

```bash
cd frontend
npm install
```

### 7. Executar o Backend

```bash
# Modo desenvolvimento
npm run dev

# Ou modo produção
npm run build
npm start
```

O backend estará rodando em `http://localhost:3001`

### 8. Executar o Frontend

```bash
cd frontend
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

## Funcionalidades

### Consulta de Usuários
- Buscar usuários por email, CPF, telefone ou profile ID
- Visualizar dados completos do usuário
- Editar email do usuário
- Auto-busca de assinatura associada

### Consulta de Assinaturas
- Buscar assinaturas por ID
- Visualizar detalhes da assinatura
- Atualizar data de término (EndDate)
- Atualizar data de início (StartDate)
- Visualizar histórico de períodos

### Poneimoedas (NOVO)
- Buscar poneimoedas do usuário
- Visualizar saldo de poneimoedas
- Listar episódios reproduzidos
- Adicionar novos episódios (aumenta quantidade de poneimoedas)
- Histórico completo de reproduções

## API Endpoints

### Autenticação
- `POST /auth/login` - Login com Firebase token
- `GET /auth/verify` - Verificar token JWT

### Usuários
- `GET /users/search?email=xxx` - Buscar usuário por email
- `GET /users/search?cpf=xxx` - Buscar usuário por CPF
- `GET /users/search?telefone=xxx` - Buscar usuário por telefone
- `GET /users/search?profileId=xxx` - Buscar usuário por profile ID
- `GET /users/:id/subscription` - Buscar assinatura do usuário
- `PUT /users/:id/email` - Atualizar email do usuário

### Assinaturas
- `GET /subscriptions/:id` - Buscar assinatura por ID
- `GET /subscriptions/profile/:profileId` - Buscar assinaturas por profile ID
- `PUT /subscriptions/:id/end-date` - Atualizar EndDate
- `PUT /subscriptions/:id/start-date` - Atualizar StartDate

### Poneimoedas
- `GET /poneimoedas/user/:userId` - Buscar poneimoedas do usuário
- `GET /poneimoedas/user/:userId/quantidade` - Obter quantidade de poneimoedas
- `GET /poneimoedas/user/:userId/episodios` - Listar episódios reproduzidos
- `POST /poneimoedas/user/:userId/episodios` - Adicionar episódio
- `PUT /poneimoedas/user/:userId/initialize` - Inicializar poneimoedas do usuário

## Tema

O frontend suporta tema claro e escuro, com alternância através do botão "Modo claro/Modo escuro" no header.

## Notas

- O sistema está configurado para usar 2 bancos de dados PostgreSQL separados
- A autenticação Firebase está preparada mas precisa ser configurada com suas credenciais
- O frontend está rodando em http://localhost:5173
- O backend está configurado para rodar em http://localhost:3001
- Para produção, configure as variáveis de ambiente adequadamente e use secrets seguros
