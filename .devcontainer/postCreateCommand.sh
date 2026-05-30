#! /bin/sh

set -e;

echo "==========Fish setup=========="
sudo apt update && :; sudo apt install --yes fish
rm -rf ~/.config/fish
ln -sr .devcontainer/fish ~/.config/fish

echo -e "\n\n======Pre-commit install======"
sudo apt install --yes python3-pip
python3 -m pip install pre-commit
pre-commit --version
pre-commit install-hooks
pre-commit run --all-files

echo -e "\n\n=========Test  Jekyll========="
bundle exec jekyll --version
