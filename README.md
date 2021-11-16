# Portfolio

This repo holds my portfolio which is just a quick overview of who I am and the projects I've worked on. The application was built using react and is hosted decentrally on [IPFS](https://ipfs.io/).

## IPFS Hosting (This site will probably outlive me)

A Github action is set up to generate a new IPFS hash on every new build. It then pins the hash to pinata and updates my Cloudflare TXT record to point to the new hash. I then have my domain CNAME record pointing to Cloudflare's IPFS gateway and it's redirected to the latest build. You can test this by using an IPFS gateway or IPFS compatible browser such as Brave and going to [ipns://murovec.me](ipns://murovec.me). You can also just access it by going to [https://murovec.me](https://murovec.me) like any other site and it will automatically direct you through Cloudflares IPFS gateway. This is a common practice among decentralized applications and I thought why not host my portfolio like this 🤷‍♂️.
