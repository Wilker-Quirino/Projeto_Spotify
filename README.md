# 🎧 Spotify Clone - Projeto Fullstack

Este projeto é um clone simplificado do Spotify, desenvolvido com **React no Front-End**, **Node.js + Express no Back-End** e **MongoDB** para persistência de dados. Ele permite listar artistas e músicas, visualizar detalhes e tocar faixas com um player integrado.

---

## 🔗 Funcionalidades

- 🎨 Interface visual moderna e responsiva inspirada no Spotify
- 🎵 Listagem de músicas e artistas
- 🔍 Páginas individuais para artistas e músicas
- ▶️ Player de áudio com controle (play, pause, próxima, aleatória)
- 🌐 API REST para consumir dados de músicas e artistas

---

## 🧱 Tecnologias

### Front-End:

- React 19
- Vite 6
- React Router DOM
- FontAwesome
- Axios
- ESLint (com React Hooks e Fast Refresh)

### Back-End:

- Node.js
- Express
- MongoDB (MongoDB Atlas)
- Axios

---

## 🚀 Como Executar o Projeto

### 1. Clone o repositório:

git clone https://github.com/Wilker-Quirino/Projeto_Spotify

### 2. Instale as dependências do Back-End:

cd back-end
npm install

### 3. Inicie o servidor Back-End:

node server.js

> A API ficará disponível em: `http://localhost:4000`

### 4. Em outra aba do terminal, instale o Front-End:

cd ../front-end
npm install

### 5. Inicie o Front-End:

npm run dev

> A interface ficará disponível em: `http://localhost:3000`

## 📡 Rotas da API

- `GET /songs`: Lista todas as músicas
- `GET /artists`: Lista todos os artistas

## 📁 Estrutura de Pastas

/
├── front-end/
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/database/
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ ├── package.json
│ ├── vite.config.js
├── back-end/
│ ├── api.js
│ ├── conect.js
│ ├── insertMany.js
│ ├── server.js
│ ├── package.json

## ⚙️ Scripts

### Front-End (com Vite):

- `npm run dev` — Inicia o servidor de desenvolvimento (`http://localhost:3000`)
- `npm run build` — Gera a versão de produção na pasta `dist`
- `npm run preview` — Pré-visualiza a versão de produção
- `npm run lint` — Executa o ESLint

### Back-End:

- `node server.js` — Inicia a API em `http://localhost:4000`

## 📃 Licença

Este projeto está licenciado sob a licença MIT.
