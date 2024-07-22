---
layout: dev-log
heading: "Dev Log Template"
date: 2024-07-22 04:57:00 -0400
author: Harsh Parekh
tags:
  - jekyll
  - html
  - shell
---

A sign of good product or software is that is becomes forgotten.
The product is so intutive that you don't have to actively learn or remember how to use it but instead you internalize it.
Making such software is extremely difficult, but there still are some like that. The first example that comes to mind is vim.
Vim is by no means an easy software to learn and definitely not to master, yet once you learn the basics, most behaviour is very intutive.

Now, why am I blabbing about that here? Well, it's because I know that the system I've setup to create these dev-log posts
is by no means as elegant of well engineered to be intutive, but after a few rounds of trial and error it is at least efficient
in terms of letting me create simple new logs. Hence, it is required to write a little bit about how to go about creating a log entry.

{% include image.html image="/assets/img/dev-log/there_i_fixed_it-dave_walker.jpg" caption="Yeah, it kinda works" %}

At some point in the future I should write a small script that helps create new log entry auto-populating fields
but, till then here's the instructions.

The `_config.yaml` file has the general description of the `dev-log` collection that contains all the log entries. The folder `_dev-log`
acts as the source of all the items in the collection. Each file in `_dev-log` is one entry and the file name is in the following format:
`%Y-%m-%d-{title}.md`. Each dev-log comes with some amount of front-matter, ideally you want the provide atleast the following:

```yaml
layout: dev-log
heading: "Heading of the Dev Log"
date: 2024-07-21 23:24:00 -0400 # $TZ=EST date +'%Y-%m-%d %T %z'
tags: ["some", "helpful", "tags"]
```

Alternatively you can copy over this file to a new file in `_dev-log` folder and edit it to jump-start.

```sh
read -p 'Title: '
TITLE="$(echo -n $REPLY |  tr -Cs '[:alnum:]' '-')"
DATE="$(TZ=EST date +'%Y-%m-%d %T %z')"
DEST="_dev-log/$(echo $DATE | cut -d' ' -f1)-$TITLE.md"
cp '{{ page.path }}' "$DEST"
sed -i "1s|date: .*|date: $DATE|g" "$DEST"
$EDITOR "$DEST"
```
