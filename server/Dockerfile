# Use an official Node.js LTS image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your server code
COPY . .

# Expose the WebSocket server port
EXPOSE 4000

# Run the WebSocket server
CMD ["node", "wsServer.js"]

