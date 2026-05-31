---
layout: default
title: Credits
section_url: /credits
---

## Assets Used

{% for asset in site.data.credits.assets.images %}
- {{asset.desc}}: [{{ asset.name }}](/assets/img/{{asset.location}}) by [{{ asset.author }}]({{asset.src}})
{% endfor %}

## Software Used

{% for asset in site.data.credits.assets.softwares %}
- [{{ asset.name }}]({{ asset.src }}) by [{{ asset.author }}]({{ asset.author_src }}) for {{ asset.usage }}.
{% endfor %}
