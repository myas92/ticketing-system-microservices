# Client

## Install Packages

```
npm install react
npm install react-dom
npm install next
npm install axios
npm install bootstrap
```

## Docker Commands

```
docker build -t yaserahmadi/client .

docker push yaserahmadi/client
```

## If client pod dose not updated
```
kubectl get pods
kubectl delete [client name]
```
Note: automatically create client pod again