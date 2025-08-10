# Etapa base
FROM node:20-alpine

# Directorio de la app
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código
COPY . .

# Puerto de la app (Node)
EXPOSE 8080

# Variable de entorno para el puerto
ENV PORT=8080

# Comando de inicio
CMD ["node", "index.js"]
