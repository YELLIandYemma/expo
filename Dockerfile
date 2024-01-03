# Use the official Node.js LTS (Long Term Support) image as the base image
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Nuxt 3 app
RUN npm run build

# Expose the port on which the app will run (adjust if needed)
EXPOSE 3000

# Command to start the Nuxt 3 app
CMD ["npm", "run","dev"]
    