# Commands
docker run --name ejabberd -p 5222:5222 ejabberd/ecs


# Creating users
docker exec -it ejabberd bin/ejabberdctl register admin localhost password
docker exec -it ejabberd bin/ejabberdctl register hussein localhost password

# Creating room
bin/ejabberdctl create_room testRoom conference.localhost localhost

