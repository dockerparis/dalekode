# Swaggy

[Live preview](http://swaggy.herokuapp.com/)

Is your code swag enough?

With Swaggy, you can check code style on your favorite GitHub repositories!


## Prerequisite

### Build linter images

    make images

If you want you can also pull official
images:

    make images-pull

If you want to push these images to your own repository:

    REPOSITORY="<you repository>" make images-push

### Set Docker remote API url

You need to specify a docker remote API url to connect with.

    export DOCKER_URL="http://127.0.0.1:2375"

If your are using Docker API through `https`, your `DOCKER_CERT_PATH` will be
mounted has a volume inside the container.

>Be careful: boot2docker enforces tls verification since version 1.3.

## Launch the web application

    make run

The web app should now be listening on port 3000 on your docker daemon (if you
are  using boot2docker, `boot2docker ip` will tell you its address).
