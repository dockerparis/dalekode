.PHONY: images images-push images-pull all build run

REPOSITORY := $(if $(REPOSITORY),$(REPOSITORY),'swaggy')

images:
	hack/images.sh build $(REPOSITORY)

images-push: images
	hack/images.sh push $(REPOSITORY)

images-pull:
	hack/images.sh pull $(REPOSITORY)

all: run

build:
	docker build -t $(REPOSITORY)/web .

run: build
	docker run -e DOCKER_URL=$(DOCKER_URL) \
						 -p 3000:3000 \
						 -ti $(REPOSITORY)/web \
						 rails server -p 3000
