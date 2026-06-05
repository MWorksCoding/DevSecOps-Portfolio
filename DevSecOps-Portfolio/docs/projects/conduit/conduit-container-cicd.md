---
sidebar_position: 1
---

# Conduit Container CI/CD

A complete Conduit demo application (Angular frontend + Django backend) packaged with Docker and Docker Compose, with a fully automated CI/CD pipeline using GitHub Actions, GitHub Container Registry (GHCR), and Docker Compose on a VPS.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Quick Start

```bash
# SSH
git clone git@github.com:MWorksCoding/conduit-container.git

# HTTPS
git clone https://github.com/MWorksCoding/conduit-container.git

cd conduit-container
cp example.env .env

cd conduit-backend-master
cp example.env .env
cd ..

docker compose up -d --build
```

- App: [http://localhost:8282](http://localhost:8282)
- Server: `http://<your-ip>:8282`

## Usage

### CI/CD Pipeline (GitHub Actions)

The pipeline runs on every push to any branch and can also be triggered manually.

**Pipeline steps:**
1. Checks out the repository
2. Builds backend and frontend Docker images
3. Logs in to GHCR
4. Pushes images to `ghcr.io/YOUR_USERNAME/YOUR_REPO-backend:latest` and `-frontend:latest`
5. SSHs into the VPS
6. Pulls the latest images
7. Restarts the Docker Compose stack (`down` → `up -d --pull always`)

**Required GitHub Secrets** (Settings → Secrets and variables → Actions):

| Secret | Description |
|---|---|
| `SSH_HOST` | Your server IP |
| `SSH_USER` | Linux user owning the deployment directory |
| `SSH_KEY` | Private SSH key matching `~/.ssh/authorized_keys` on the server |
| `GHCR_PAT` | GitHub Personal Access Token (Packages: Read & Write, Metadata: Read) |
| `GHCR_USERNAME` | Your GitHub username |

Generate a GHCR PAT under: **GitHub → Settings → Developer Settings → Personal access tokens (classic)**.

Test GHCR authentication locally:

```bash
echo "<YOUR_GHCR_PAT>" | docker login ghcr.io -u <YOUR_USERNAME> --password-stdin
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
| `docker compose build --no-cache` | Build from scratch |
| `docker compose up -d` | Start in background |
| `docker compose up --build -d` | Build and start |
| `docker compose stop` | Stop without removing |
| `docker compose down` | Stop and remove everything |
| `docker compose logs -f` | Follow logs |
| `docker compose ps` | List running containers |
