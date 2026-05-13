---
sidebar_position: 1
---

# V-Server Setup

## Description

Step-by-step instructions for setting up an Ubuntu-based V-Server, including SSH key generation, hardening SSH access, installing NGINX, serving a custom web page, and connecting the server to GitHub via SSH.

## Prerequisites

Before you begin, ensure you have access to a virtual server (V-Server) and the necessary credentials — including its `ip_address`, `user_name`, and `password` — to establish an initial connection.

You will also need:
- A user account with `sudo` privileges
- A GitHub account for SSH key authentication

## Quick Start

Clone this repository to your local machine, then follow the setup steps described below.

```bash
# Clone using SSH (recommended if your GitHub SSH keys are configured)
git clone git@github.com:MWorksCoding/v-server-setup.git

# Clone using HTTPS (if you have not set up SSH keys)
git clone https://github.com/MWorksCoding/v-server-setup.git
```

## Generate SSH Keys

If you have not already created an SSH key, run the following command in your terminal:

```bash
ssh-keygen -t ed25519 -C "<your@email.com>" -f ~/.ssh/<name_of_your_key25519>
```

When asked for a passphrase, press **Enter** to skip or set one for additional security. Using a passphrase is strongly recommended.

This creates:
- `~/.ssh/<name_of_your_key25519>` — private key
- `~/.ssh/<name_of_your_key25519>.pub` — public key

## Copy Your SSH Key to the Server and Log In

Copy the public key to your server:

```bash
ssh-copy-id -i ~/.ssh/<name_of_your_key25519.pub> <your_server_user_name>@<ip_server_address>
```

Test the connection:

```bash
ssh -i ~/.ssh/<name_of_your_key25519> <your_server_username>@<ip_server_address>
```

## Server Setup: Disable Password Authentication

Open the SSH config file:

```bash
sudo nano /etc/ssh/sshd_config
```

Locate `#PasswordAuthentication yes`, uncomment it, and set it to `no`:

```diff
-#PasswordAuthentication yes
+PasswordAuthentication no
```

Restart the SSH service:

```bash
sudo systemctl restart ssh.service
```

## Install NGINX and Deploy a Custom Page

```bash
sudo apt update
sudo apt install nginx -y
```

Create the directory and HTML file for your custom page:

```bash
sudo mkdir /var/www/alternatives
sudo nano /var/www/alternatives/alternate-index.html
```

Create the NGINX site config at `/etc/nginx/sites-enabled/alternatives`:

```nginx
server {
    listen 8081;
    listen [::]:8081;

    root /var/www/alternatives;
    index alternate-index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Restart NGINX and navigate to `http://<your_v_server_ip>:8081`.

## Git Configuration on the V-Server

```bash
sudo apt update && sudo apt install git -y
git config --global user.name "<Your Name>"
git config --global user.email "<your@email.com>"
```

Generate a server-side SSH key for GitHub authentication:

```bash
ssh-keygen -t ed25519 -C "<your@email.com>" -f ~/.ssh/<v_server_example_name25519>
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/<meaningful_name25519>
```

Add the public key to GitHub under **Settings → SSH and GPG keys**, then test:

```bash
ssh -T git@github.com
```
