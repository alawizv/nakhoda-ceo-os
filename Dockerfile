# Nakhoda — production image for EasyPanel / Docker
FROM node:22-bookworm-slim AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .
ENV NITRO_PRESET=node-server
ENV NODE_ENV=production
RUN npm run build \
  && mkdir -p .output/public/assets \
  && if [ -d node_modules/.nitro/vite/services/ssr/assets ]; then \
       cp -f node_modules/.nitro/vite/services/ssr/assets/*.css .output/public/assets/ 2>/dev/null || true; \
     fi

FROM node:22-bookworm-slim
WORKDIR /app
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=3000

COPY --from=build --chown=node:node /app/.output ./.output

USER node
EXPOSE 3000
CMD ["node", ".output/server/index.mjs"]
