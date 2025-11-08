rm -rf ./dist
pnpm run build
docker build -t express-server .
docker run -d -p 4000:4000 --name express-container express-server
