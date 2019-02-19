# Stage 1 - the build process
FROM node as build-deps
WORKDIR /app
COPY package.json yarn.lock ./
RUN npm install
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.12-alpine
COPY --from=build-deps /app/build /usr/share/nginx/html
EXPOSE 8085
CMD ["nginx", "-g", "daemon off;"]