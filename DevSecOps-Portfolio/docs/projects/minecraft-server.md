---
sidebar_position: 5
---

# Minecraft Server

A Docker-powered Minecraft server environment built manually rather than using ready-made Minecraft containers.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (Docker Compose is included with Docker Desktop and Docker Engine)

## Quick Start

```bash
# SSH
git clone git@github.com:MWorksCoding/minecraft-server.git

# HTTPS
git clone https://github.com/MWorksCoding/minecraft-server.git

cd minecraft-server
```

Download the Minecraft server JAR from the official Minecraft website and copy the `.jar` file into the project root directory.

Copy the environment variables:

```bash
cp example.env .env
```

Build and start the server:

```bash
docker compose build --no-cache
docker compose up
```

Follow server logs:

```bash
docker logs -f minecraft-server
```

To reset and rebuild from scratch:

```bash
docker compose down
```

## Usage

### Checking Server Status

Use the `mcstatus` Python library to query the server:

```bash
python -m venv venv
source venv/bin/activate   # Mac / Linux
pip install -r requirements.txt
python minecraft_server_status
```

The `minecraft_server_status.py` script connects to the server port and retrieves its current status.

### Docker Compose Commands

| Command | Description |
|---|---|
| `docker compose build` | Build the Docker image |
| `docker compose build --no-cache` | Build from scratch without cached layers |
| `docker compose up` | Start containers (foreground) |
| `docker compose up -d` | Start containers (background) |
| `docker compose up --build -d` | Build and start in detached mode |
| `docker compose stop` | Stop without removing containers |
| `docker compose restart` | Restart all services |
| `docker compose down` | Stop and remove containers, networks, volumes |
| `docker compose logs -f` | Follow logs in real time |
| `docker compose ps` | List running containers |
| `docker exec -it minecraft-server /bin/sh` | Open an interactive shell in the container |
