.PHONY: images images-push images-pull

REPOSITORY := $(if $(REPOSITORY),$(REPOSITORY),'swaggy')

images:
	hack/images.sh build $(REPOSITORY)

images-push: images
	hack/images.sh push $(REPOSITORY)

images-pull:
	hack/images.sh pull $(REPOSITORY)
