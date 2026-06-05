---
sidebar_position: 2
---

# Baby Tools Shop

A Django web application packaged in a Docker container for easy deployment and portability. The instructions below explain how to build, run, and deploy the app on a V-Server.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)

## Quick Start

```bash
# SSH
git clone git@github.com:MWorksCoding/baby-tools-shop.git

# HTTPS
git clone https://github.com/MWorksCoding/baby-tools-shop.git
```

Create and activate a virtual environment:

```bash
python -m venv venv

# Mac / Linux
source venv/bin/activate

# Windows
.\venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Create a `.env` file in the project root (see `example.env` for required variables).

Build and run the Docker container:

```bash
docker build -t babyshop_app .
docker run -d -p 8025:8025 --env-file .env babyshop_app
```

Open the app at [http://127.0.0.1:8025](http://127.0.0.1:8025).

## Create a Superuser

Find the running container ID and create a superuser:

```bash
docker ps
docker exec -it <container_id_or_name> python manage.py createsuperuser
```

Log in at [http://127.0.0.1:8025/admin](http://127.0.0.1:8025/admin) to manage categories and products.

## Usage

### Dockerfile

The `Dockerfile` packages the Django application into a container image. A `.dockerignore` file reduces image size by excluding unnecessary files.

The production setup uses **Gunicorn** as the WSGI server and **WhiteNoise** to serve static files — replacing the need for a separate NGINX instance.

### Docker Management Commands

```bash
docker image ls              # List all images
docker rmi <image_id>        # Remove an image
docker ps                    # List running containers
docker stop <container_id>   # Stop a container
```
