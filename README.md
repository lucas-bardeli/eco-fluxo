# 🍃 Eco Fluxo

Sistema Eco Fluxo. Projeto desenvolvido nas aulas de Laboratório de Desenvolvimento Web.

### Swagger

- Documentação interativa da API disponível em `http://localhost:5000/docs` quando o backend está em execução.
- Com schemas reutilizáveis em `definitions` e tags + summaries nas rotas.

Exemplo do create de ecoponto:

```ts
(req, res) => {
  /* #swagger.tags = ['Ecopontos'] */
  /* #swagger.summary = 'Cria um ecoponto' */
  /* #swagger.parameters['body'] = {
    in: 'body',
    required: true,
    schema: { $ref: '#/definitions/Ecoponto' }
  } */

  return EcopontoController.create(req, res);
},
```

### Comandos Prisma:

```bash
# Cria uma migration a partir das alterações no schema e a aplica no banco de desenvolvimento.
npx prisma migrate dev --name <nome_da_migration>

# Apaga o banco e reaplica as migrations existentes. É destrutivo: os dados são perdidos.
npx prisma migrate reset

# Gera o Prisma Client com base no schema atual; não altera o banco.
npx prisma generate

# Aplica as migrations já existentes, geralmente em ambientes de produção.
npx prisma migrate deploy
```
