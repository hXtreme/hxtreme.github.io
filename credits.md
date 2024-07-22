---
layout: default
title: Credits
section_url: /credits
---

## Assets Used

{% for asset in site.data.credits.assets.images %}
- {{asset.desc}}: [{{ asset.name }}](/assets/img/{{asset.location}}) by [{{ asset.author }}]({{asset.src}})
{% endfor %}