FROM node:18-slim

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile

COPY . .

ENV PORT=4000

EXPOSE 4000

CMD ["node", "dist/index.js"]
