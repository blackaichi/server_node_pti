## 1 - RESTART & REBUILD: $sudo docker-compose up --build
## if top command dont work try to $sudo docker-copmpose down first, the repeat 1
## -
## 2 - ONLYUP: $sudo docker-compose up
## -
## 3- STOP: $sudo docker-compose stop


## PETITIONS ##
# 1 GET AUTH TOKEN # $curl -X POST http://localhost:8000/insert -H 'Cache-Control: no-cache' -H 'Content-Type: application/x-www-form-urlencoded' -d 'pass=<PASSWORD>'
## -
## $curl -X POST http://localhost:8000/insert -H 'Cache-Control: no-cache' -H 'Content-Type: application/x-www-form-urlencoded' -H 'authorization: <AUTH_TOKEN>' -d 'user=useer&pass=password'
