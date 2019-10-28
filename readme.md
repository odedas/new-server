docker images - view all images
docker container ls  - or - docker ps - view running containers, docker ps -a - show all containers ran
docker containers ls - a  - view all containers
docker pull busybox - pull an image from docker registry (local or on web) -docker hub
// run commands inside a running docker
docker run busybox echo "hello"
docker run -it busybox sh
// -it flags attaches us to an interactive tty in the container.
use exit to EXIT
// GETTING HELP
docker COMMAND --HELP
// deleting containers
docker rm 305297d7a235 ff0a5c3750b9
docker rm $(docker ps -a -q -f status=exited) or docker container prune
// deleting images
docker rmi [image id,...]
https://hub.docker.com/?ref=login
odedas  docker1234
Hit Ctrl+C to stop the container.
docker image build -t bulletinboard:1.0 .
docker container run --publish 8000:8080 --detach --name bb bulletinboard:1.0


