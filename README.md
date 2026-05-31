# DevSecOps Portfolio

This portfolio documents my practical work throughout the Developer Akademie DevSecOps programme. It covers containerised application deployments, infrastructure automation, Linux server administration, and hands-on security testing with OWASP Juice Shop - all implemented and documented in a self-hosted, local environment for educational purposes. The site is built with Docusaurus and deployed via GitHub Pages.

> **Disclaimer:** All security-related content in this portfolio is intended purely for educational purposes. Techniques demonstrated against OWASP Juice Shop were performed exclusively against a self-hosted local instance. None of the methods described may be applied to any real system without explicit written authorisation.

---

## Table of Contents

- [Live Site](#live-site)
- [Projects](#projects)
  - [V-Server Setup](#v-server-setup)
  - [Baby Tools Shop](#baby-tools-shop)
  - [Truck Signs API](#truck-signs-api)
  - [Minecraft Server](#minecraft-server)
  - [WordPress Docker](#wordpress-docker)
  - [Conduit](#conduit)
- [OWASP Juice Shop Challenges](#owasp-juice-shop-challenges)
  - [Challenge 1 - Login Admin (SQL Injection)](#challenge-1--login-admin-sql-injection)
  - [Challenge 2 - Admin Registration (Mass Assignment)](#challenge-2--admin-registration-mass-assignment)
  - [Challenge 3 - Meta Geo Stalking (OSINT)](#challenge-3--meta-geo-stalking-osint)
  - [Challenge 4 - Client-Side XSS Protection (Stored XSS)](#challenge-4--client-side-xss-protection-stored-xss)
- [Quickstart](#quickstart)
- [Deployment](#deployment)
- [Security Notes](#security-notes)
- [Project Checklist](#project-checklist)

---

## Live Site

[https://mworkscoding.github.io/DevSecOps-Portfolio/](https://mworkscoding.github.io/DevSecOps-Portfolio/)

---

## Projects

### V-Server Setup

Initial setup and hardening of a Linux V-Server - covering SSH key authentication, firewall configuration, and basic server administration.

→ [Documentation](./docs/projects/v-server-setup.md)

---

### Baby Tools Shop

A Django web application containerised with Docker, served via Gunicorn and WhiteNoise. Deployable on any V-Server with a single `docker run` command.

**Stack:** Python · Django · Docker

→ [Documentation](./docs/projects/baby-tools-shop.md)

---

### Truck Signs API

A full Django REST backend with a dedicated PostgreSQL container, networked via Docker Compose and exposed via Gunicorn.

**Stack:** Python · Django REST Framework · PostgreSQL · Docker

→ [Documentation](./docs/projects/truck-signs-api.md)

---

### Minecraft Server

A Docker-powered Minecraft server built manually from the official JAR - no ready-made images used. Includes a Python `mcstatus` checker to query server state via script.

**Stack:** Docker · Shell scripting · Python · YAML

→ [Documentation](./docs/projects/minecraft-server.md)

---

### WordPress Docker

A fully containerised WordPress + MariaDB environment using Docker Compose. One command to build, one to start - ready for local development or production on a V-Server.

**Stack:** Docker Compose · YAML · Shell scripting

→ [Documentation](./docs/projects/wordpress-docker.md)

---

### Conduit

CI/CD pipeline implementation for the Conduit application using containers and automated workflows.

**Stack:** Docker · GitHub Actions · YAML

→ [Documentation](./docs/projects/conduit/conduit-container-cicd.md)

---

## OWASP Juice Shop Challenges

All challenges were solved against a self-hosted local instance of [OWASP Juice Shop](https://github.com/juice-shop/juice-shop). No real user data, credentials, or external systems were involved at any point.

---

### Challenge 1 - Login Admin (SQL Injection)

**Category:** A03 – Injection | **Severity:** Critical

The login form passes unsanitised user input directly into a SQL query. Injecting `' OR 1=1 --` as the email value manipulates the query logic to bypass authentication entirely and log in as the administrator without valid credentials.

**Risk:** SQL Injection allows attackers to bypass authentication, extract or destroy entire databases, and in some configurations execute arbitrary OS commands - making it one of the most critical vulnerability classes in web applications.

→ [Documentation](./docs/owasp-juice-shop/login-admin.md)

---

### Challenge 2 - Admin Registration (Mass Assignment)

**Category:** A04 – Insecure Design / A01 – Broken Access Control | **Severity:** Critical

The registration API returns the full internal user object including the `role` field. By intercepting the request and injecting `"role": "admin"`, any anonymous visitor can create an account with full administrator privileges - no prior access required.

**Risk:** Mass Assignment vulnerabilities allow attackers to overwrite internal object properties that were never intended to be user-controlled. In the worst case this means full privilege escalation from anonymous visitor to platform administrator in a single request.

→ [Documentation](./docs/owasp-juice-shop/admin-registration.md)

---

### Challenge 3 - Meta Geo Stalking (OSINT)

**Category:** A07 – Identification and Authentication Failures | **Severity:** High

A user's email is found via public product reviews. Their uploaded image on the Photo Wall contains GPS coordinates in the EXIF metadata. Extracting the coordinates with `exiftool` and resolving them in Google Maps reveals the answer to their security question, enabling a full password reset without any technical exploitation.

**Risk:** Metadata in uploaded files can silently expose precise geolocation, device information, and timestamps. Combined with public profile data this enables full account takeover without any traditional "hacking" - illustrating that OSINT is often the most effective attack vector.

→ [Documentation](./docs/owasp-juice-shop/meta-geo-stalking.md)

---

### Challenge 4 - Client-Side XSS Protection (Stored XSS)

**Category:** A03 – Injection (XSS) | **Severity:** Critical

The registration UI validates the email field client-side only. By intercepting the POST request and replacing the email with an XSS iframe payload, the server stores the malicious value without server-side validation. The payload executes in every administrator's browser when they visit the admin panel - enabling session theft and account takeover from an unauthenticated starting position.

**Risk:** Stored XSS persists in the database and executes for every user who loads the affected page - including administrators. This enables session hijacking, credential theft, and can serve as a launchpad for further attacks against internal infrastructure.

→ [Documentation](./docs/owasp-juice-shop/client-side-xss.md)

---

## Quickstart

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm or yarn

### 1. Clone the repository

With SSH (if SSH keys are configured in GitHub):

```bash
git clone git@github.com:MWorksCoding/DevSecOps-Portfolio.git
```

Classic HTTPS:

```bash
git clone https://github.com/MWorksCoding/DevSecOps-Portfolio.git
```

### 2. Navigate to the project directory

```bash
cd DevSecOps-Portfolio
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the local development server

```bash
npm start
```

Opens `http://localhost:3000/DevSecOps-Portfolio/` in your browser with live reload. Most changes are reflected without restarting the server.

### 5. Build for production (optional)

```bash
npm run build
```

Generates the static site into the `build/` directory, which can be served by any static hosting service.

---

## Deployment

This site is deployed to GitHub Pages. To deploy your own fork, set your GitHub username and run:

```bash
GIT_USER=<your-github-username> npm run deploy
```

Or with SSH:

```bash
USE_SSH=true npm run deploy
```

This builds the site and pushes it to the `gh-pages` branch of your repository automatically.

---

## Security Notes

- All security testing was conducted exclusively against a self-hosted local instance of OWASP Juice Shop
- No real personal data, credentials, or external systems were used or targeted
- No SSH keys, passwords, tokens, or usernames are stored in this repository
- No IP addresses or other sensitive infrastructure information are stored in this repository
- JWT tokens visible in documentation originate from the local test environment only
- The techniques described are illegal when applied to systems without explicit written authorisation

## Project Checklist

You can find a detailed checklist for this project in PDF format:

- [Download the Checklist](./docs/checklist.pdf)