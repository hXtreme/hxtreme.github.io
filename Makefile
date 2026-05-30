SHELL := /bin/bash

# Use Bundler if available
JEKYLL := bundle exec jekyll
BUILD_DIR := _site

.PHONY: help install build serve clean

help: ## Show this help
	@echo "Usage: make [target]"
	@echo
	@echo "Targets:"
	@echo "  install   Install Ruby dependencies (bundle install)"
	@echo "  build     Build the site into _site"
	@echo "  serve     Serve locally with live reload"
	@echo "  clean     Remove built files and caches"

install: ## Install Ruby dependencies
	@echo "Running: bundle install"
	bundle install

build: ## Build the site into $(BUILD_DIR)
	@echo "Running: $(JEKYLL) build"
	$(JEKYLL) build --config _config.yml

serve: ## Serve the site locally with live reload
	@echo "Running: $(JEKYLL) serve (press Ctrl+C to stop)"
	$(JEKYLL) serve --config _config.yml --livereload

clean: ## Remove built files and caches
	@echo "Removing $(BUILD_DIR), .jekyll-cache, .sass-cache, .bundle"
	rm -rf $(BUILD_DIR) .jekyll-cache .sass-cache .bundle
