# VF-Apparel
VF-Apparel mono-repo includes the following technologies:

- [node.js]
- [Express]
- [TypeScript]
- [React]
- [Redux]
- [Axios]
- [Bootstrap]
- [Kubernetes]
- [Skaffold]

## Installation

VF-Apparel dockerized version requires [docker](https://www.docker.com/) and enabling [Kubernetes](https://kubernetes.io/), if it's not already.


![k8](https://user-images.githubusercontent.com/73205794/186581296-1925d047-aee7-406d-9044-d044e5e5ac46.png)

Install [NGINX Ingress Controller](https://kubernetes.github.io/ingress-nginx/deploy/).

```sh
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.0/deploy/static/provider/cloud/deploy.yaml
```
Install [Skaffold](https://skaffold.dev/docs/install/#standalone-binary).


Clone the repository

```sh
gh repo clone hasancutcu/vf-apparel
```

Install the dependencies and devDependencies for the server and start the server.

```sh
cd vf-apparel/api
npm i
npm run dev
```

Install the dependencies and devDependencies for the client app and start the react app.

```sh
cd vf-apparel/client
npm i
npm run start
```

## Usage
Go to [http://localhost:3000/](http://localhost:3000/)
