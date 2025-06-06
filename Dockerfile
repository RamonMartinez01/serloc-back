# Usa una imagen oficial de Node.js
FROM node:24-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y lock
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto que usa Express
EXPOSE 8080

# Comando para iniciar el servidor
CMD ["node", "src/server.js"]
