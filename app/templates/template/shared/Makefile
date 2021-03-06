CWD := $(shell pwd)
TAG := stable
IMAGE := "<%= imageName %>:$(TAG)"
SOME_CONTAINER := $(shell echo some-$(IMAGE) | sed 's/[^a-zA-Z0-9]//g')
DOCKERFILE := $(CWD)/$(TAG)/Dockerfile

.PHONY: all
all: clean deps build

.PHONY: build
build:
	@docker build -t $(IMAGE) -f $(DOCKERFILE) $(CWD)
	@echo ::: BUILD :::

.PHONY: pull
pull:
	@docker pull $(IMAGE)
	@echo ::: PULL :::

.PHONY: up
up:
	@docker-compose -f $(TAG)/docker-compose.yml up

.PHONY: info
info:
	@docker inspect -f '{{.Config.Labels}}' $(IMAGE)

.PHONY: push
push:
	@docker push $(IMAGE)
	@echo ::: PUSH :::

.PHONY: run
run:
	@docker run --name run$(SOME_CONTAINER) --rm -p <%= port %>:<%= port %> $(IMAGE)

.PHONY: ssh
ssh:
	@docker run --name ssh$(SOME_CONTAINER) --rm -it --entrypoint /bin/sh $(IMAGE)

.PHONY: essh
essh:
	@docker exec -it run$(SOME_CONTAINER) /bin/sh

.PHONY: clean
clean:
	-@ rm -rf ./stuff/to/clean &>/dev/null || true
	@echo ::: CLEAN :::

.PHONY: deps
deps: docker
	@echo ::: DEPS :::
.PHONY: docker
docker:
	@if ! o=$$(which docker); then curl -L https://get.docker.com | bash; fi
	@echo ::: DOCKER :::
