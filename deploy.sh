#!/bin/bash

# Define color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
MAGENTA='\033[0;35m'
CYAN='\033[0;36m'
NC='\033[0m' # No Color

# Function to print timestamp
timestamp() {
    date "+%Y-%m-%d %H:%M:%S"
}

# Function to log messages with colors and timestamp
log() {
    local color=$1
    local message=$2
    echo -e "${color}[$(timestamp)] ${message}${NC}"
}

# Function to log errors
log_error() {
    log "${RED}" "ERROR: $1"
}

# Display header
log "${CYAN}╔════════════════════════════════════╗"
log "${CYAN}║         Frontend Deployment        ║"
log "${CYAN}╚════════════════════════════════════╝"

# Perform git pull from root directory
log "${BLUE}Changing directory to ./..."
cd ./ || {
    log_error "Failed to change directory to ./"
    exit 1
}

log "${YELLOW}Pulling latest changes from root repository..."
if ! git pull; then
    log_error "Git pull failed"
    exit 1
fi

# Frontend Deployment
log "${CYAN}╔════════════════════════════════════╗"
log "${CYAN}║        Frontend Deployment         ║"
log "${CYAN}╚════════════════════════════════════╝"

log "${BLUE}Changing directory to /frontend..."
cd ./frontend || {
    log_error "Failed to change directory to /frontend"
    exit 1
}

log "${MAGENTA}Installing dependencies..."
if ! npm install --force; then
    log_error "npm install failed"
    exit 1
fi

log "${YELLOW}Building the application..."
if ! npm run build; then
    log_error "Build failed"
    exit 1
fi

log "${BLUE}Changing directory to ../..."
cd ../ || {
    log_error "Failed to change directory to ./"
    exit 1
}

log "${GREEN}Frontend deployment completed successfully! ✨"

log "${GREEN}╔════════════════════════════════════╗"
log "${GREEN}║         All Tasks Completed        ║"
log "${GREEN}╚════════════════════════════════════╝"
