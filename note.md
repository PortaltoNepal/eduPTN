---
layout: page
title: "Notes"
permalink: "/note/"
---

<ul class="posts">
  {% for post in site.note %}
  <li>
      <a href="{{ post.url | relative_url }}">
        {{ post.title }}
      </a>

    {{ post.content |truncate_words:20}}
  </li>
  {% endfor %}
</ul>


<div class="pagination">
  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ paginator.next_page_path | relative_url }}">Older</a>
  {% else %}
    <span class="pagination-item older">Older</span>
  {% endif %}
  {% if paginator.previous_page %}
    {% if paginator.page == 2 %}
      <a class="pagination-item newer" href="{{ '/' | relative_url }}">Newer</a>
    {% else %}
      <a class="pagination-item newer" href="{{ paginator.previous_page_path | relative_url }}">Newer</a>
    {% endif %}
  {% else %}
    <span class="pagination-item newer">Newer</span>
  {% endif %}
</div>