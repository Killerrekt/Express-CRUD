# Use an official Node.js runtime as the base image
FROM node:21-alpine
# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app's source code to the container
COPY . .

# Expose the port that the app will run on
EXPOSE 3000

# Use PM2 as the command to run the app, with automatic restart on failure
CMD ["node", "main.js"]