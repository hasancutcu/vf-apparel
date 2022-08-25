# VF-Apparel
## _💥👉If you want to check dockerized version of this app check 'dev' branch [here](https://github.com/hasancutcu/vf-apparel/tree/dev) which includes latest changes👈💥_

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
Install [Skaffold](https://skaffold.dev/docs/install/#standalone-binary). Skaffold deploys to your local Kubernetes cluster.


Clone the repository and checkout the dev branch which includes the latest changes related with Kubernetes.

```sh
gh repo clone hasancutcu/vf-apparel
cd vf-apparel
git checkout dev
```

Run Skaffold to deploy to your local Kubernetes cluster and watch changes of the code. Make sure your current context is set to the cluster you want to deploy to. In this case it's the local cluster (docker-desktop).

```sh
skaffold dev
```

## Usage
Go to [http://localhost/](http://localhost/)
