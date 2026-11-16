# Documentação de Funcionalidades - SupPage

## Visão Geral

O SupPage é um painel administrativo para suporte de usuários e assinaturas, composto por:
- **Backend**: NestJS + Prisma 6.19.3 + PostgreSQL
- **Frontend**: React + Firebase Authentication
- **Autenticação**: Firebase Auth com controle de emails permitidos

---

## Arquitetura do Backend

### Bancos de Dados

O sistema utiliza dois schemas Prisma separados:

#### 1. Ponei Database (ponei-db)
- **Schema**: `prisma/ponei-db.prisma`
- **Variável de Ambiente**: `PONEI_DATABASE_URL`
- **Tabelas**:
  - `Users`: Armazena dados de usuários do sistema Ponei
    - `Id`: Identificador único
    - `IdPonyAccount`: ID da conta Pony
    - `SubscriptionId`: ID da assinatura associada

#### 2. Player Database (player-db)
- **Schema**: `prisma/player-db.prisma`
- **Variável de Ambiente**: `PLAYER_DATABASE_URL`
- **Tabelas**:
  - `AspNetUsers`: Usuários de autenticação
  - `Profiles`: Perfis de usuários (nome, CPF/CNPJ, telefone)
  - `UserAddresses`: Endereços de usuários (CEP, país)
  - `Subscriptions`: Assinaturas (tipo, status, cortesia, gateway, data início)
  - `SubscriptionDetails`: Detalhes históricos de assinaturas

### Serviços

#### PrismaService
- Localização: `src/database/prisma.service.ts`
- Expose duas instâncias:
  - `poneiDb`: Acesso ao banco Ponei
  - `playerDb`: Acesso ao banco Player

---

## Módulo de Usuários

### Endpoints API

#### 1. Buscar Usuários
- **Rota**: `POST /users/search`
- **Autenticação**: Firebase Auth (obrigatória)
- **Payload**:
  ```typescript
  {
    field: 'email' | 'cpf' | 'phone' | 'profileId',
    value: string
  }
  ```
- **Funcionalidade**:
  - Normaliza o valor de busca (remove espaços, pontos, traços)
  - Busca no banco Player (AspNetUsers, Profiles, UserAddresses)
  - Enriquece dados com informações do Ponei (User, Subscription)
  - Retorna até 50 resultados ordenados por ID descendente
- **Campos retornados**:
  - `id`: ID do usuário (AspNetUsers)
  - `name`: Nome do perfil
  - `email`: Email do usuário
  - `cpf`: CPF/CNPJ do perfil
  - `phone`: Telefone (AspNetUsers ou Profile)
  - `profile_id`: ID do perfil
  - `cep`: CEP do endereço
  - `country`: País do endereço
  - `id_do_poney_account`: ID da conta Ponei
  - `subscription`: Resumo da assinatura ativa
  - `subscription_details`: Lista de detalhes históricos

#### 2. Buscar Subscription por Poney Account ID
- **Rota**: `GET /users/poney-subscription/:poneyAccountId`
- **Autenticação**: Firebase Auth (obrigatória)
- **Parâmetro**: `poneyAccountId` (path parameter)
- **Funcionalidade**:
  - Busca usuário no banco Ponei pelo ID da conta Pony
  - Retorna o `SubscriptionId` associado
- **Resposta**:
  ```typescript
  {
    subscriptionId: string | null
  }
  ```

#### 3. Atualizar Email do Usuário
- **Rota**: `PUT /users/email`
- **Autenticação**: Firebase Auth (obrigatória)
- **Payload**:
  ```typescript
  {
    userId: string,
    newEmail: string (valid email format)
  }
  ```
- **Funcionalidade**:
  - Atualiza campos no banco Player:
    - `UserName` → novo email
    - `NormalizedUserName` → novo email em maiúsculas
    - `Email` → novo email
    - `NormalizedEmail` → novo email em maiúsculas
  - Retorna ID e email atualizados
- **Erros**:
  - `P2025`: User ID não encontrado (404)
  - Outros erros são propagados

---

## Módulo de Assinaturas

### Endpoints API

#### 1. Buscar Assinatura por ID
- **Rota**: `GET /subscriptions/:id`
- **Autenticação**: Firebase Auth (obrigatória)
- **Parâmetro**: `id` (path parameter)
- **Funcionalidade**:
  - Busca assinatura base no banco Player
  - Busca detalhes ativos (não excluídos) da assinatura
  - Retorna dados completos da assinatura
- **Resposta**:
  ```typescript
  {
    base: {
      Id: string,
      PlanType: string | null,
      Status: string | null,
      Courtesy: boolean | null,
      GatewayId: string | null,
      StartDate: Date | null
    },
    detailsBySubscriptionId: [
      {
        Id: string,
        SubscriptionId: string | null,
        PlanType: string | null,
        Courtesy: boolean | null,
        StartDate: Date | null,
        EndDate: Date | null,
        GatewayTransactionId: string | null,
        Store: string | null,
        StoreProductId: string | null,
        Excluded: boolean | null,
        CreatedAt: Date | null
      }
    ]
  }
  ```
- **Erros**:
  - Assinatura não encontrada (404)

#### 2. Atualizar Data de Término (End Date)
- **Rota**: `PUT /subscriptions/end-date`
- **Autenticação**: Firebase Auth (obrigatória)
- **Payload**:
  ```typescript
  {
    subscriptionId: string,
    newEndDate: string (ISO date format, e.g., "2024-12-31")
  }
  ```
- **Funcionalidade**:
  - Adiciona hora 23:59:59 à data fornecida
  - Atualiza `EndDate` em todos os detalhes ativos da assinatura
  - Retorna sucesso e detalhes atualizados
- **Erros**:
  - Subscription ID não encontrado (404)

#### 3. Atualizar Data de Início (Start Date)
- **Rota**: `PUT /subscriptions/start-date`
- **Autenticação**: Firebase Auth (obrigatória)
- **Payload**:
  ```typescript
  {
    subscriptionId: string,
    newStartDate: string (ISO date format)
  }
  ```
- **Funcionalidade**:
  - Atualiza `StartDate` na tabela `Subscriptions`
  - Atualiza `StartDate` em todos os detalhes ativos
  - Retorna assinatura atualizada
- **Erros**:
  - Subscription ID não encontrado (404)

---

## Frontend - React

### Autenticação

- **Método**: Firebase Authentication
- **Configuração**: Variáveis de ambiente em `frontend/.env`
  - `VITE_FIREBASE_API_KEY`
  - `VITE_FIREBASE_AUTH_DOMAIN`
  - `VITE_FIREBASE_PROJECT_ID`
  - `VITE_FIREBASE_APP_ID`
- **Controle de Acesso**: Emails permitidos configurados no backend (`ADMIN_ALLOWED_EMAILS`)

### Interface Principal

#### Tela de Login
- Formulário com email e senha
- Botão para alternar tema claro/escuro
- Validação de configuração Firebase
- Mensagens de erro em caso de falha

#### Painel Administrativo

**Header**:
- Logo da marca
- Título "Suporte Administrativo"
- Botão de alternar tema
- Botão de logout

**Navegação por Abas**:

##### 1. Aba "Consulta de Usuários"

**Formulário de Busca**:
- Seleção de campo: Email, CPF, Telefone, Profile ID
- Campo de valor para pesquisa
- Botão "Buscar"

**Resultados da Busca**:
- Cards para cada usuário encontrado
- Informações exibidas:
  - Nome e ID
  - Email (com botão de copiar)
  - CPF (com botão de copiar)
  - Telefone (com botão de copiar)
  - Profile ID (com botão de copiar)
  - ID do Poney Account (com botão de copiar)
  - CEP (com botão de copiar)
  - País (com botão de copiar)

**Seção de Assinatura** (se usuário tiver):
- Tipo de plano
- Plataforma (store ou gateway)
- Cortesia (Sim/Não)
- Status
- ID da transação
- Start Date (formatado pt-BR)
- End Date (formatado pt-BR)
- Todos os campos com botão de copiar

**Tabela de Detalhes da Assinatura**:
- Plano
- Cortesia
- Período (StartDate - EndDate)
- Transação
- Linhas com botões de copiar

**Indicador de Assinatura Grátis**:
- Exibido quando não há assinatura ativa
- Status verde: "Assinatura grátis (sem assinatura ativa)"

**Formulário de Edição de Email**:
- Campo User ID
- Campo Novo Email
- Botão "Preencher formulário de edição" (preenche automaticamente a partir do resultado selecionado)
- Botão "Atualizar email"
- Após atualização, refaz a busca automaticamente

**Auto-busca de Assinatura**:
- Quando usuário tem `id_do_poney_account`, busca automaticamente:
  - Subscription ID via `/users/poney-subscription/{id}`
  - Detalhes da assinatura via `/subscriptions/{id}`
  - Preenche os campos da aba de assinaturas automaticamente

##### 2. Aba "Consulta de Assinaturas"

**Indicador de Subscription ID do Poney**:
- Exibido quando veio da busca de usuário
- Botão para copiar

**Formulário de Busca**:
- Campo Subscription ID
- Botão "Buscar"

**Resultado da Assinatura**:
- Informações base da assinatura
- Tabela de detalhes ativos
- Formatação de datas em pt-BR
- Botões de copiar em todos os campos

**Formulário de Atualização de End Date**:
- Campo Subscription ID (preenchido automaticamente)
- Campo New End Date
- Botão "Atualizar End Date"
- Após atualização, refaz a busca automaticamente

**Formulário de Atualização de Start Date**:
- Campo Subscription ID
- Campo New Start Date
- Botão "Atualizar Start Date"
- Após atualização, refaz a busca automaticamente

### Funcionalidades Gerais

**Tema**:
- Alternância entre modo claro e escuro
- Gradientes animados de fundo
- Cores adaptativas (cyan/slate)

**Cópia para Clipboard**:
- Botões de copiar em todos os campos importantes
- Ícone SVG de copiar
- Feedback visual ao passar o mouse

**Tratamento de Erros**:
- Mensagens de erro em vermelho/rose
- Erros de sessão expirada
- Erros de configuração Firebase
- Erros de validação

**Loading States**:
- Indicadores de busy durante operações assíncronas
- Botões desabilitados durante carregamento

**Refresh de Token**:
- Renovação automática do token Firebase antes de cada requisição
- Tratamento de sessão expirada

---

## Variáveis de Ambiente

### Backend (.env)

```env
PORT=3000
FRONTEND_URL=http://localhost:5173

# Firebase
FIREBASE_PROJECT_ID=suppage-bitzen
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-fbsvc@suppage-bitzen.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----..."

# Controle de Acesso
ADMIN_ALLOWED_EMAILS=pauloricardoodev@gmail.com,paulorinaldibitzen@gmail.com

# Bancos de Dados
PONEI_DATABASE_URL=postgresql://...
PLAYER_DATABASE_URL=postgresql://...
```

### Frontend (.env)

```env
VITE_FIREBASE_API_KEY=...
VITE_FIREBASE_AUTH_DOMAIN=...
VITE_FIREBASE_PROJECT_ID=...
VITE_FIREBASE_APP_ID=...

VITE_API_BASE_URL=http://localhost:3000
```

---

## Scripts NPM

### Backend

```json
{
  "build": "nest build",
  "start": "nest start",
  "start:dev": "nest start --watch",
  "start:debug": "nest start --debug --watch",
  "start:prod": "node dist/main",
  "prisma:generate": "prisma generate --schema=prisma/ponei-db.prisma && prisma generate --schema=prisma/player-db.prisma"
}
```

---

## Guardas e Middlewares

### FirebaseAuthGuard
- Localização: `src/common/guards/firebase-auth.guard.ts`
- Valida token JWT do Firebase
- Aplicado em todos os endpoints de usuários e assinaturas
- Verifica permissões de email

---

## Fluxos de Uso Típicos

### Fluxo 1: Suporte ao Usuário

1. **Login** no painel com credenciais Firebase
2. **Aba "Consulta de Usuários"**
3. Buscar usuário por email/CPF/telefone/profile ID
4. Visualizar dados completos do usuário
5. Se necessário, **atualizar email** do usuário
6. Visualizar assinatura associada (se houver)
7. Copiar informações relevantes para clipboard

### Fluxo 2: Suporte de Assinatura

1. **Login** no painel
2. **Aba "Consulta de Assinaturas"**
3. Buscar assinatura por Subscription ID
   - OU usar o ID vindo da busca de usuário
4. Visualizar detalhes da assinatura
5. **Atualizar End Date** se necessário (extensão)
6. **Atualizar Start Date** se necessário (ajuste)
7. Copiar informações para registro

### Fluxo 3: Diagnóstico Completo

1. **Login** no painel
2. Buscar usuário por email
3. Sistema **auto-busca** assinatura associada
4. Alternar para aba "Consulta de Assinaturas" (já preenchida)
5. Analisar histórico de detalhes
6. Fazer ajustes nas datas se necessário
7. Documentar alterações

---

## Tecnologias Utilizadas

### Backend
- **Framework**: NestJS 11.0.1
- **ORM**: Prisma 6.19.3
- **Banco de Dados**: PostgreSQL
- **Validação**: class-validator, class-transformer
- **Firebase**: firebase-admin 13.8.0
- **Linguagem**: TypeScript 5.7.3

### Frontend
- **Framework**: React 18
- **Build**: Vite
- **Estilização**: TailwindCSS
- **Autenticação**: Firebase SDK
- **Linguagem**: TypeScript

---

## Notas Importantes

1. **Renomeação de Schemas**: O sistema foi migrado de `users-db/subscriptions-db` para `ponei-db/player-db`
2. **Repository Pattern**: Ambos os módulos usam pattern de repository para abstração do banco
3. **Separação de Dados**: Usuários e assinaturas estão em bancos separados
4. **Auto-refresh**: Token Firebase é renovado automaticamente antes de cada requisição
5. **Normalização**: CPF e telefone são normalizados (remoção de espaços, pontos, traços)
6. **Limites**: Busca de usuários retorna até 50 resultados
7. **Timezone**: End Date é definido para 23:59:59 do dia informado

---

## Estrutura de Diretórios

```
SupPage/
├── backend/
│   ├── src/
│   │   ├── common/
│   │   │   ├── guards/
│   │   │   │   └── firebase-auth.guard.ts
│   │   │   └── interceptors/
│   │   ├── database/
│   │   │   └── prisma.service.ts
│   │   ├── modules/
│   │   │   ├── users/
│   │   │   │   ├── users.controller.ts
│   │   │   │   ├── users.service.ts
│   │   │   │   ├── users.repository.ts
│   │   │   │   └── dto/
│   │   │   └── subscriptions/
│   │   │       ├── subscriptions.controller.ts
│   │   │       ├── subscriptions.service.ts
│   │   │       ├── subscriptions.repository.ts
│   │   │       └── dto/
│   │   ├── generated/
│   │   │   ├── ponei-db/
│   │   │   └── player-db/
│   │   └── main.ts
│   ├── prisma/
│   │   ├── ponei-db.prisma
│   │   └── player-db.prisma
│   ├── .env
│   ├── nest-cli.json
│   ├── tsconfig.json
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── App.tsx
│   ├── .env
│   ├── index.html
│   ├── package.json
│   └── vite.config.ts
└── DOCUMENTACAO_FUNCIONALIDADES.md
```

---

## Configuração de Desenvolvimento

### Pré-requisitos

- Node.js 18+
- PostgreSQL
- Conta Firebase configurada
- Variáveis de ambiente configuradas

### Instalação

**Backend**:
```bash
cd backend
npm install
npm run prisma:generate
npm run start:dev
```

**Frontend**:
```bash
cd frontend
npm install
npm run dev
```

---

## Deploy

### Backend

1. Configurar variáveis de ambiente de produção
2. Build do projeto: `npm run build`
3. Executar: `npm run start:prod`

### Frontend

1. Configurar variáveis de ambiente de produção
2. Build do projeto: `npm run build`
3. Deploy do diretório `dist` em servidor web estático

---

## Suporte e Manutenção

Para questões relacionadas ao desenvolvimento ou bugs, entre em contato com a equipe de desenvolvimento.

---

**Versão**: 1.0.0  
**Última atualização**: Maio 2026
