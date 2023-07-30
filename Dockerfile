FROM node:18-bookworm

ARG port=7860
ENV port=${port}

RUN apt update -y && apt install -y libc++-dev libc++abi-dev

WORKDIR /app

COPY . .

RUN yarn install

CMD npx cross-env yarn wrangler && \
yarn start --port ${port} 

EXPOSE ${port}
