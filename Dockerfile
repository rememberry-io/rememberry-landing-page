FROM node:20-alpine
ENV NODE_ENV=production
COPY entrypoint.sh .
WORKDIR /app
COPY . .
RUN npm i -g @nestjs/cli
RUN npm ci
RUN npm run build
ENTRYPOINT ["/entrypoint.sh"]
CMD ["npm", "run", "start:prod"]