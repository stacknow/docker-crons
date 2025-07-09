# Stage 1: Use a standard Node.js image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Expose the port the app runs on (for the web service)
EXPOSE 3000

# Default command to run when the container starts.
# This will be used for the Web Service deployment.
# For Cron Jobs, this will be overridden by the 'command' you provide.
CMD ["npm", "run", "start"]
