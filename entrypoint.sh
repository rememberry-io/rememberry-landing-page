#!/bin/sh
npx prisma migrate deploy

# This will exec the CMD from your Dockerfile, i.e. "npm start"
exec "$@"
