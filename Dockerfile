# Use an official Python runtime as a parent image
FROM python:3.11-slim
# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Run the command to install any necessary dependencies
RUN pip install --no-cache-dir -U lodestone sqlite3 fastapi uvicorn rich slowapi
ENV NODE_VERSION=18.18.2
RUN apt-get update
RUN apt-get -qq -y install curl
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
RUN . "$NVM_DIR/nvm.sh" && nvm install ${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm use v${NODE_VERSION}
RUN . "$NVM_DIR/nvm.sh" && nvm alias default v${NODE_VERSION}
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
RUN python -m javascript --install mineflayer
RUN python -m javascript --install prismarine-viewer
RUN python -m javascript --install minecraft-data
RUN python -m javascript --install mineflayer-pathfinder
RUN python -m javascript --install mineflayer-collectblock
EXPOSE 5000
EXPOSE 5001
ENV RUN_DOCKER Yes
CMD ["python", "main.py"]