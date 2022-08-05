# Hashed template quasar vue 3 (hashed-template-quasar-vue3)

This is a template developed by HASHED

## Install the dependencies
```bash
yarn
```
## Create .env file using .env.example
Local endpoints can change the following environment variable
**WSS** 
Is the endpoint to connect to the Chain (Polkadot JS extension)
**IPFS_URL**
 is the endpoint used by the Private service to Upload the documents in IPFS
**PRIVATE_URI**
 Is the endpoint for the private service, is used to connect and retrieve the private documents from the service. More info: 
* [Private Server](https://github.com/Afloat-Inc/private-server)
* [Private JS library](https://github.com/Afloat-Inc/private-client-api)

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
