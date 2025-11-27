---
layout: page
title: research
permalink: /projects/
description:

My research advances the security and resilience of intelligent cyber-physical systems (CPS) as they evolve into embodied, AI-driven agents that perceive, decide, and act in the physical world. As AI/ML becomes deeply embedded in vehicles, robots, and critical infrastructure, these systems face fundamentally new risks—arising from cyberattacks, adversarial manipulation of ML models, and vulnerabilities created at the intersection of sensing, networking, and decision-making. My research aims to ensure that such embodied intelligent systems remain **safe**, **trustworthy**, and **dependable** under real-world uncertainty and adversarial conditions. To address this, I pursue two complementary directions—**AI for security** and **security of AI**—with an emphasis on securing the next generation of embodied, intelligent, and autonomous CPS.

nav: true
nav_order: 2
display_categories: [work, fun]
horizontal: false
---

<!-- pages/projects.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
