# DevOps na Prática – Fase 2

Projeto desenvolvido para a disciplina **DevOps na Prática**, contemplando a implementação de Integração Contínua (CI), Entrega Contínua (CD), containerização e orquestração utilizando serviços da AWS.

## Tecnologias Utilizadas

- Node.js 18
- Express
- Jest
- Supertest
- Docker
- GitHub Actions
- Amazon ECR
- Amazon ECS Fargate
- Terraform
- AWS CloudWatch

## Estrutura do Projeto

```
DEVOPS-PRATICA-FASE2
├── .github/workflows
├── terraform
├── Tests
├── Dockerfile
├── app.js
├── package.json
└── README.md
```

## Executando Localmente

### Instalar dependências

```bash
npm install
```

### Executar a aplicação

```bash
node app.js
```

A aplicação ficará disponível em:

```text
http://localhost:3000
```

## Executando os testes

```bash
npm test
```

## Gerando cobertura de testes

```bash
npm test -- --coverage
```

## Executando com Docker

### Build da imagem

```bash
docker build -t devops-pratica-fase2 .
```

### Executar o container

```bash
docker run -p 3000:3000 devops-pratica-fase2
```

## Pipeline CI/CD

O pipeline foi implementado utilizando GitHub Actions.

Fluxo:

1. Push ou Pull Request na branch `main`;
2. Execução dos testes automatizados;
3. Build da imagem Docker;
4. Push da imagem para o Amazon ECR;
5. Atualização do serviço no Amazon ECS;
6. Rolling Update da aplicação em produção.

## Repositório

https://github.com/Leladeira/devops-pratica-fase2