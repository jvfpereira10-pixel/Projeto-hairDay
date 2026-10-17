# ✂️ Hair Day

Aplicação web para agendamento de cortes de cabelo. O usuário escolhe a data e o horário, informa o nome do cliente e acompanha os agendamentos do dia divididos por período (manhã, tarde e noite).

> Projeto de estudo desenvolvido para praticar JavaScript modular, consumo de API e empacotamento com Webpack.

<!-- Adicione aqui um print ou GIF da aplicação -->
<!-- ![Hair Day](./docs/preview.png) -->

## Funcionalidades

- Seleção de data (não permite escolher dias anteriores a hoje)
- Grade de horários das 9h às 21h, organizada em manhã, tarde e noite
- Horários já passados ou já ocupados aparecem como indisponíveis
- Cadastro de agendamento com o nome do cliente
- Listagem dos agendamentos do dia selecionado, separados por período
- Validação para impedir dois agendamentos no mesmo dia e horário

## Tecnologias

- **JavaScript** (ES Modules)
- **HTML5** e **CSS3**
- **[Webpack 5](https://webpack.js.org/)** para empacotar o projeto
- **[Babel](https://babeljs.io/)** para compatibilidade do JavaScript
- **[Day.js](https://day.js.org/)** para manipulação de datas
- **[json-server](https://github.com/typicode/json-server)** como API simulada

## Como rodar o projeto

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm (já vem com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/jvfpereira10-pixel/projeto-hairday.git

# 2. Entre na pasta
cd projeto-hairday

# 3. Instale as dependências
npm install
```

A aplicação precisa de **dois terminais** abertos ao mesmo tempo:

```bash
# Terminal 1: API simulada (http://localhost:3000)
npm run server
```

```bash
# Terminal 2: aplicação (http://localhost:3333)
npm run dev
```

O navegador abre automaticamente em `http://localhost:3333`.

### Scripts disponíveis

| Comando          | Descrição                                               |
| ---------------- | ------------------------------------------------------- |
| `npm run dev`    | Inicia o servidor de desenvolvimento do Webpack         |
| `npm run server` | Inicia o json-server na porta 3000                      |
| `npm run build`  | Gera a versão final na pasta `dist`                     |

## Estrutura do projeto

```
projeto-hairday/
├── src/
│   ├── assets/              # Ícones e imagens (SVG)
│   ├── libs/                # Configuração de bibliotecas (Day.js)
│   ├── modules/
│   │   ├── form/            # Formulário: data, horários e envio
│   │   ├── schedules/       # Carregamento e exibição dos agendamentos
│   │   └── page-load.js     # Inicialização da página
│   ├── services/            # Comunicação com a API
│   ├── styles/              # Arquivos CSS
│   ├── utils/               # Dados auxiliares (horários de funcionamento)
│   └── main.js              # Ponto de entrada
├── index.html
├── server.json              # Banco de dados do json-server
├── webpack.config.js
└── package.json
```

## Observações

- A aplicação consome a API em `http://localhost:3000`, então o **json-server precisa estar rodando** para os agendamentos funcionarem. Por isso, ela não funciona publicada apenas em hospedagem estática (como o GitHub Pages) sem uma API online.
- Os dados ficam salvos no arquivo `server.json`.

## Autor

**João Victor Feliciano**

[![GitHub](https://img.shields.io/badge/GitHub-jvfpereira10--pixel-181717?logo=github)](https://github.com/jvfpereira10-pixel)
