# Use a specific Node.js version
ARG NODE_VERSION=18.18.0
FROM node:${NODE_VERSION}-alpine

# Set development environment to install all dependencies
ENV NODE_ENV development

WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the app files
COPY . .

# Expose the Vite development server port
EXPOSE 5173

# Run the app
CMD ["yarn", "dev"]
