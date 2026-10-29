# 🍃 Eco Fluxo

Sistema Eco Fluxo. Projeto desenvolvido nas aulas de Laboratório de Desenvolvimento Web.

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
