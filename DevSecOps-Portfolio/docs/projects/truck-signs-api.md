---
sidebar_position: 3
---

# Truck Signs API

A full Django backend project packaged with Docker. The application runs with PostgreSQL in a separate container. All containers communicate on the same Docker network, and the backend is exposed via Gunicorn WSGI on port 8020.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Quick Start

```bash
# SSH
git clone git@github.com:MWorksCoding/truck_signs_api.git

# HTTPS
git clone https://github.com/MWorksCoding/truck_signs_api.git

cd truck_signs_api
cp example.env .env
```

## Usage

### Create Docker Network

All containers must be on the same network to communicate by name:

```bash
docker network create truck-signs-net
```

### Run PostgreSQL Container

```bash
docker volume create truck-signs-db-data

docker run -d \
  --name db \
  --network truck-signs-net \
  --restart unless-stopped \
  -e POSTGRES_DB=truckdb \
  -e POSTGRES_USER=truckuser \
  -e POSTGRES_PASSWORD=truckpassword \
  -v truck-signs-db-data:/var/lib/postgresql/data \
  postgres:15
```

Replace the environment values with those from your `.env` file.

### Build and Run Backend Container

```bash
docker build -t truck-signs-api .

docker run -d \
  --name truck-signs-api \
  --network truck-signs-net \
  --restart unless-stopped \
  --env-file .env \
  -p 8020:8020 \
  truck-signs-api
```

The backend automatically: waits for PostgreSQL, runs migrations, creates a superuser if absent, and starts Gunicorn on port 8020.

### Verify

```bash
docker ps
docker logs -f truck-signs-api
```

- App: [http://localhost:8020](http://localhost:8020)
- Admin: [http://localhost:8020/admin](http://localhost:8020/admin)

### Docker Management Commands

| Command | Description |
|---|---|
| `docker build -t truck-signs-api .` | Build the Docker image |
| `docker rm -f truck-signs-api` | Stop and remove the backend container |
| `docker restart truck-signs-api` | Restart the backend container |
| `docker logs -f truck-signs-api` | Follow backend logs in real time |
| `docker ps` | List running containers |
| `docker network ls` | List Docker networks |
| `docker volume ls` | List Docker volumes |
