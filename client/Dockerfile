# Build stage
FROM node:18-alpine AS installer
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:latest AS deployer
COPY --from=installer /app/build /usr/share/nginx/html
