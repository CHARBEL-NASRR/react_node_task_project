# Use an official Node.js runtime as a parent image
FROM node:latest

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any dependencies
RUN npm install

# Copy the rest of your application's code
COPY . .

# Make port 1337 available to the world outside this container
EXPOSE 1337

# Define the command to run your app
CMD ["node", "server.js"]
