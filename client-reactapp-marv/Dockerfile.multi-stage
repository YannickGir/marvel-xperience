# Base image for development stage
FROM node:16-alpine as development

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Build TypeScript files
RUN npm run build

# Base image for production stage
FROM node:16-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Copy build files from development stage
COPY --from=development /app/build ./build

# Start the application
CMD ["npm", "start"]
