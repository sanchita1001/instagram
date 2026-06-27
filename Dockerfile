# Use official Node.js runtime as parent image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy root package files
COPY package*.json ./

# Install backend dependencies
RUN npm ci --only=production

# Copy the rest of the application
COPY . .

# Install frontend dependencies and build frontend
RUN npm install --prefix frontend && npm run build --prefix frontend

# Expose port 4000
EXPOSE 4000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=4000

# Start server
CMD ["node", "server.js"]
