#! /bin/sh

set -e;

echo "=======Fish setup======="
sudo apt update && :; sudo apt install --yes fish
rm -rf ~/.config/fish
ln -sr .devcontainer/fish ~/.config/fish

echo -e "\n\n======Test  Jekyll======"
bundle exec jekyll --version