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

-  For **Desktop Docker**

```bash
# Get last version based on kubernetes version
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.3.0/deploy/static/provider/cloud/deploy.yaml

#Update /etc/hosts
127.0.0.1 name.com
```
- For [**Minikube**](https://kubernetes.io/docs/tasks/access-application-cluster/ingress-minikube/)
```bash
minikube addons enable ingress

# run below command to get ip
minikube ip
# 192.168.49.2
#Update /etc/hosts with upper ip
192.168.49.2 name.com
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



# Start 

```bash
minikube start
skaffold dev
```

## Create Containers from Local
```bash
1: Inspect image from docker image
2: Copy RepoDigests address
3: Paste into Image field of depl
# Check auth-mongo-depl.yalm
```





## Secret
1- Create Secret Key
```
kubectl create secret generic jwt-secret --from-literal=JWT_key=asdf
```
2- List of secret
```
kubectl get secrets
```
30 example in auth-depl.yaml
```
containers:
  - name: auth
    image: yaserahmadi/auth
    env:
     - name: JWT_KEY
       valueFrom:
        secretKeyRef:
         name: jwt-secret
         key: JWT_KEY
```
[jwt secret solution](https://stackoverflow.com/questions/66328425/jwt-argument-of-type-string-undefined-is-not-assignable-to-parameter-of-typ)


## Transform Output of Mongoose Model
```js
{
    toJSON:{
        transform(doc, ret){
            ret.id = ret._id,
            delete ret._id,
            delete ret.password,
            delete ret.__v
        }
    }
}
```




## Error In minikube
To connect your Docker CLI to the docker daemon inside the VM, (just current terminal)
```
eval $(minikube docker-env)
```
Pull to mongo in minbikube docker if you have error (can not pull the image yaserahmadi/mongo)
```
git pull yaserahmadi/mongo
```

## Check Ingress status befor run the project
```
kubectl get pods -n ingress-nginx
````
If the there is a error about `ImagePullBackOff` in `ingress-nginx-controller`, pull image in minikube docker like above example
```
eval $(minikube docker-env)
docker pull k8s.gcr.io/ingress-nginx/controller:v1.2.1@sha256:5516d103a9c2ecc4f026efbd4b40662ce22dc1f824fb129ed121460aaa5c47f8
```
## Define Environment variable in Kubber
```
kubectl create secret generic jwt-secret --from-literal=JWT_KEY=asdf
kubectl create secret generic env --from-literal=NODE_ENV=KUBER
```
update `auth-depl.yaml` file

```
env:
- name: JWT_KEY
  valueFrom:
  secretKeyRef:
    name: jwt-secret
    key: JWT_KEY
- name: NODE_ENV
  valueFrom:
  secretKeyRef:
    name: env
    key: NODE_ENV
```