#!/bin/bash

echo "🚀 UNIFIED BUILD START"

# backend build
cd SaaS/afridigital-backend || exit 1
npm install

# frontend build
cd ../afridigital-frontend || exit 1
npm install
npm run build

# copy frontend into backend (single service mode)
rm -rf ../afridigital-backend/public/*
cp -r dist/* ../afridigital-backend/public/

echo "✅ SINGLE SERVICE READY"
