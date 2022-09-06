# Install Dependencies


## Usefull Commands Typescript

- Typescript

```bash
npm i typescript ts-node-dev express @types/express
npm i node-typescript

tsc --init #Create tsconfig.json file
```

<hr>

## Useful Info About Kubernetes
1- [Install minikube](https://minikube.sigs.k8s.io/docs/start/)

2- [Install Ingress Nginx](https://kubernetes.github.io/ingress-nginx/deploy/)

```bash
# Get last version based on kubernetes version
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.0/deploy/static/provider/cloud/deploy.yaml
```

3- [Install Skaffold](https://skaffold.dev/docs/install/)

4- run project with `skaffold`
```
skaffold dev
```

### Useful Commands

- Ingress Nginx
```
kubectl get service -n ingress-nginx
kubectl get ingress ingress-srv
kubectl describe ingress ingress-srv
kubectl get pods -n ingress-nginx -w
```

- Get Info
```bash
kubectl get pods
kubectl get services
kubctl get depoloyment
````

- Update Pod based on Dockerhub Image
```bash
# docker build -t yaserahmadi/[name] .
# docker pull yaserahmadi[name]
kubectl rollout restart deployment [name-depl]
```

- Get location (Country)
```bash
curl ipconfig.io/country
```