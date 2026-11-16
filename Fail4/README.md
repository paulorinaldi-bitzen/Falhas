# SupPage

Sistema de gerenciamento de usuários com autenticação Firebase e interface administrativa.

## 🚀 Tecnologias

### Frontend
- React 18
- TypeScript
- Vite
- TailwindCSS
- React Router
- Firebase Auth
- Lucide Icons

### Backend
- NestJS
- TypeScript
- Prisma ORM
- PostgreSQL
- Class Validator

## 📋 Pré-requisitos

- Node.js 18+
- PostgreSQL
- Conta Firebase (para autenticação)

## 🔧 Configuração

### Backend

1. **Instalar dependências:**
```bash
cd backend
npm install
```

2. **Configurar variáveis de ambiente:**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais:

```env
# Database URLs - PostgreSQL
PLAYER_DATABASE_URL=postgresql://usuario:senha@localhost:5432/ni-player-api
PONEI_DATABASE_URL=postgresql://usuario:senha@localhost:5432/ni-poneiconta

# Firebase Authentication Configuration (Backend)
FIREBASE_PROJECT_ID=seu-project-id
FIREBASE_CLIENT_EMAIL=seu-service-account@project-id.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nSUA_CHAVE_PRIVADA_AQUI\n-----END PRIVATE KEY-----\n"
```

3. **Gerar cliente Prisma:**
```bash
npx prisma generate
```

4. **Executar o servidor:**
```bash
npm run start:dev
```

O backend estará rodando em `http://localhost:3000`

### Frontend

1. **Instalar dependências:**
```bash
cd frontend
npm install
```

2. **Configurar variáveis de ambiente:**
```bash
cp .env.example .env
```

Edite o arquivo `.env` com suas credenciais do Firebase:

```env
VITE_FIREBASE_API_KEY=sua-api-key
VITE_FIREBASE_AUTH_DOMAIN=seu-projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu-project-id
VITE_FIREBASE_STORAGE_BUCKET=seu-projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu-sender-id
VITE_FIREBASE_APP_ID=seu-app-id
```

3. **Executar o servidor:**
```bash
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

## 🔐 Configuração Firebase

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto ou selecione um existente
3. Habilite "Email/Password" em Authentication > Sign-in method
4. Crie um app Web em Project Settings > General
5. Copie as credenciais para o `frontend/.env`
6. Para o backend, baixe a service account key em Project Settings > Service accounts

## 📁 Estrutura do Projeto

```
SupPageProject/
├── backend/
│   ├── src/
│   │   ├── modules/
│   │   │   ├── users/          # Módulo de usuários
│   │   │   └── subscriptions/  # Módulo de assinaturas
│   │   ├── database/          # Configuração Prisma
│   │   └── main.ts            # Entry point
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   ├── contexts/          # Contextos (Auth, Theme)
│   │   ├── pages/             # Páginas da aplicação
│   │   ├── services/          # Serviços API e Firebase
│   │   └── types/             # Tipos TypeScript
│   └── package.json
└── README.md
```

## 🎯 Funcionalidades

### Frontend
- ✅ Autenticação com Firebase
- ✅ Busca de usuários por email, CPF, telefone ou ID
- ✅ Edição de usuários (email, CPF, telefone, datas)
- ✅ Página de relatórios
- ✅ Página de configurações
- ✅ Tema dark/light
- ✅ Roteamento protegido

### Backend
- ✅ API RESTful com NestJS
- ✅ Busca de usuários
- ✅ Atualização de usuários (PATCH)
- ✅ Integração com múltiplos bancos PostgreSQL
- ✅ Validação de DTOs
- ✅ CORS configurado

## 📡 API Endpoints

### Usuários

- `POST /users/search` - Buscar usuários
- `GET /users/:id` - Buscar usuário por ID
- `PATCH /users/:id` - Atualizar usuário

## 🔒 Segurança

- Autenticação Firebase no frontend
- Rotas protegidas com ProtectedRoute
- CORS configurado
- Validação de DTOs no backend

## 🚀 Deploy

### Backend
```bash
cd backend
npm run build
npm start
```

### Frontend
```bash
cd frontend
npm run build
```

Os arquivos buildados estarão em `frontend/dist`

## 📝 Licença

Todos os direitos reservados © 2024 Bitzen
