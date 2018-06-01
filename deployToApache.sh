#!/bin/bash
cd "$(dirname ${BASH_SOURCE[0]})"
sudo rm -rf /var/www/html/*
sudo cp -r dist/* -t /var/www/html/
