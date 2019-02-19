# # Use an official Python runtime as a parent image
# FROM node

# # Set the working directory to /app
# WORKDIR /app

# # Copy the current directory contents into the container at /app
# COPY . /app

# # Install any needed packages specified in requirements.txt
# RUN npm install

# # Make port 80 available to the world outside this container
# EXPOSE 80

# # Run app.py when the container launches
# CMD ["npm", "start"]

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