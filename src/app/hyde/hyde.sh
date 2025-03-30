#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m' # no color

if [[ ! -f /etc/arch-release ]]; then
  echo -e "${RED}Hold on there, are you sure you're on Arch Linux?${NC}"
  exit 1
fi

echo -e "${YELLOW}Updating and installing git and base-devel...${NC}"
sudo pacman -S --needed --noconfirm git base-devel
if [[ $? -ne 0 ]]; then
  echo -e "${RED}Oops! Something went wrong installing git and base-devel. Did you use sudo?${NC}"
  exit 1
fi

echo -e "${YELLOW}Cloning HyDE...${NC}"
git clone --depth 1 https://github.com/HyDE-Project/HyDE ~/HyDE
if [[ $? -ne 0 ]]; then
  echo -e "${RED}Failed to clone HyDE. Check your internet connection and git setup.${NC}"
  exit 1
fi

echo -e "${YELLOW}Diving into the HyDE installation...${NC}"
cd ~/HyDE/Scripts
if [[ $? -ne 0 ]]; then
  echo -e "${RED}Couldn't navigate to the HyDE scripts directory.${NC}"
  exit 1
fi

./install.sh
if [[ $? -ne 0 ]]; then
  echo -e "${RED}HyDE installation script failed. Check the output for errors.${NC}"
  exit 1
fi

exit 0
