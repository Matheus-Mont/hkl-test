# Aplicação CRUD com React, Material UI, React Hook Form, Context API e Zod

Esta é uma aplicação simples de CRUD que demonstra como criar, ler, atualizar e excluir registros utilizando recursos modernos do React e bibliotecas associadas. A aplicação se comunica com uma API mock e inclui um formulário para gerenciar dados usando React Hook Form, Material UI e Zod para validação de formulários.

## Funcionalidades

- Funcionalidade completa de CRUD (Criar, Ler, Atualizar, Excluir)
- Design responsivo utilizando componentes do Material UI
- Gerenciamento de formulários com React Hook Form
- Validação de formulários com Zod
- API mock criada com json-server (ou ferramenta similar)
- Busca e cache de dados utilizando React Query e Axios
- Listagem dinâmica de registros com opções de edição e exclusão inline

## Tecnologias Utilizadas

- **React**: Biblioteca principal para construir a interface de usuário
- **Material UI**: Framework de UI para design consistente e personalizável
- **React Hook Form**: Gerenciamento simples e eficiente de formulários
- **React Query (TanStack Query)**: Busca de dados, cache e sincronização
- **Zod**: Validação de formulários baseada em esquemas
- **Axios**: Cliente HTTP para comunicação com APIs
- **json-server**: Ferramenta para simular respostas de uma API

## Instalação

1. Clone este repositório:

```bash
   git clone git@github.com:Matheus-Mont/hkl-test.git
   cd hkl-test
```

2. Instale as dependências:

```bash
  pnpm install
  cd src
```

3. Inicie o servidor de API mock na pasta /src:

```bash
npx json-server db.json
```

4. Abra outro terminal e execute a aplicação:

```bash
npm run dev
```

A aplicação estará disponível em http://localhost:3001.

## Uso:

**Página Inicial**: Permite a escolha do usuário entre ir para a Página de Listagem ou Formulário de Adição.
**Formulário de Adição:** Permite que os usuários criem um registro. O formulário é construído utilizando React Hook Form e validado com Zod. Os seguintes campos são fornecidos:

- Nome (obrigatório)
- CPF (obrigatório)
- Email (obrigatório)
- Telefone (obrigatório)
- Endereço (opcional)

**Página de Listagem:** Exibe uma lista de registros obtidos da API mock. Você pode editar ou excluir qualquer registro diretamente desta lista.

## Estrutura do Projeto

src/
│
├── api/ # Instância do Axios e funções de serviço da API
├── hooks/ # Hooks personalizados (ex: para lógica de formulários ou API)
├── app/ # Componentes de páginas para roteamento

## API Mock

Esta aplicação utiliza o json-server para simular uma API RESTful. Os dados são armazenados no arquivo db.json, e os seguintes endpoints estão disponíveis:

- GET /registers: Buscar todos os registros
- POST /registers: Criar um novo registro
- PUT /registers/:id: Atualizar um registro existente
- DELETE /registers/:id: Excluir um registro

## Melhorias Futuras

- Adicionar autenticação e autorização de usuários
- Melhorar a validação de formulários com feedback mais detalhado
- Melhorar o tratamento de erros e estados de carregamento
- Implementar paginação para grandes conjuntos de dados
