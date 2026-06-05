---
sidebar_position: 2
---

# Conduit Container

A complete Conduit demo application featuring an Angular frontend and a Django backend, packaged with Docker and Docker Compose for simple, reproducible setup and deployment.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Quick Start

```bash
# SSH
git clone git@github.com:MWorksCoding/conduit-container.git

# HTTPS
git clone https://github.com/MWorksCoding/conduit-container.git

cd conduit-container

cd conduit-backend-master
cp example.env .env
cd ..

docker compose up -d --build
```

- App: [http://localhost:8282](http://localhost:8282)
- Server: `http://<your-ip>:8282`

## Usage

### Checking Docker Logs

```bash
# Frontend logs
docker logs conduit-container-frontend-1

# Backend logs
docker logs conduit-container-backend-1
```

### Create a Superuser

```bash
docker compose ps
docker exec -it <container_id_or_name> python manage.py createsuperuser
```

Admin panel: `http://<your-server-ip>:8000/admin`

### Docker Compose Commands

| Command | Description |
|---|---|
| `docker compose build` | Build the Docker image |
| `docker compose build --no-cache` | Build from scratch |
| `docker compose up` | Start containers (foreground) |
| `docker compose up -d` | Start containers (background) |
| `docker compose up --build -d` | Build and start in detached mode |
| `docker compose stop` | Stop without removing containers |
| `docker compose restart` | Restart all services |
| `docker compose down` | Stop and remove containers, networks, volumes |
| `docker compose logs -f` | Follow logs in real time |
| `docker compose ps` | List running containers |
