export NODE_OPTIONS=--openssl-legacy-provider
npm run build
rm -rf ./../../svelte/boxbox-world/static/games/beergame
cp -R dist ./../../svelte/boxbox-world/static/games/beergame

