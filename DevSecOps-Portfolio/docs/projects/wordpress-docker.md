---
sidebar_position: 4
---

# WordPress Docker

A fully containerized WordPress environment using Docker and Docker Compose. Includes both the WordPress application and a MariaDB database. Ideal for development, testing, or learning how to deploy WordPress in a modern DevOps environment.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) (Docker Compose is included with Docker Desktop and Docker Engine)

## Quick Start

```bash
# SSH
git clone git@github.com:MWorksCoding/wordpress-docker.git

# HTTPS
git clone https://github.com/MWorksCoding/wordpress-docker.git

cd wordpress-docker
cp example.env .env
```

Docker Compose automatically loads `.env` files — no manual reference needed.

Build and start the containers:

```bash
docker compose build --no-cache
docker compose up
```

- Local: [http://localhost:8080](http://localhost:8080)
- Server: `http://<your-ip>:8080`

After first access, complete the WordPress setup wizard to configure site title, admin account, and settings.

## Usage

The `docker-compose.yaml` file defines how Docker builds, runs, and manages all services in one place.

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
