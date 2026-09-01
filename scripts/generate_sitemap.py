#!/usr/bin/env python3
"""
Sitemap Generator for RunJS
Generates a comprehensive public/sitemap.xml with:
- Top-level static routes (Home, Learn, Problems, Playgrounds, About)
- All 175 JavaScript curriculum lessons
- All coding interview problems
"""

import os
import re
from datetime import datetime, timezone

BASE_URL = "https://runjs.rigial.com"
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITEMAP_PATH = os.path.join(PROJECT_ROOT, "public", "sitemap.xml")
ROBOTS_PATH = os.path.join(PROJECT_ROOT, "public", "robots.txt")

STATIC_ROUTES = [
    ("", 1.0, "daily"),
    ("learn", 0.95, "daily"),
    ("problems", 0.9, "daily"),
    ("js", 0.85, "weekly"),
    ("ts", 0.85, "weekly"),
    ("react", 0.85, "weekly"),
    ("html", 0.85, "weekly"),
    ("interview", 0.8, "weekly"),
    ("about", 0.6, "monthly"),
]

def extract_lesson_slugs():
    curriculum_path = os.path.join(PROJECT_ROOT, "src", "learn", "data", "curriculum.ts")
    slugs = []
    with open(curriculum_path, "r", encoding="utf-8") as f:
        content = f.read()
    blocks = re.findall(r'"lessonSlugs":\s*\[(.*?)\]', content, re.DOTALL)
    for b in blocks:
        for s in re.findall(r'"([a-z0-9\-]+)"', b):
            if s not in slugs:
                slugs.append(s)
    return slugs

def extract_problem_slugs():
    problems_path = os.path.join(PROJECT_ROOT, "src", "problem-engine", "data", "problems.ts")
    slugs = []
    with open(problems_path, "r", encoding="utf-8") as f:
        content = f.read()
    matches = re.findall(r"slug:\s*'([a-z0-9\-]+)'", content)
    for m in matches:
        if m not in slugs:
            slugs.append(m)
    return slugs

def generate():
    today = datetime.now(timezone.utc).strftime("%Y-%m-%d")
    urls = []

    # 1. Static Routes
    for path, priority, freq in STATIC_ROUTES:
        loc = f"{BASE_URL}/{path}".rstrip("/")
        urls.append(f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>{freq}</changefreq>
    <priority>{priority:.2f}</priority>
  </url>""")

    # 2. Curriculum Lessons
    lesson_slugs = extract_lesson_slugs()
    print(f"Extracted {len(lesson_slugs)} curriculum lesson slugs.")
    for slug in lesson_slugs:
        loc = f"{BASE_URL}/learn/{slug}"
        urls.append(f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.80</priority>
  </url>""")

    # 3. Problem Challenges
    problem_slugs = extract_problem_slugs()
    print(f"Extracted {len(problem_slugs)} problem challenge slugs.")
    for slug in problem_slugs:
        loc = f"{BASE_URL}/problems/{slug}"
        urls.append(f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>""")

    xml_content = f"""<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
{chr(10).join(urls)}
</urlset>
"""

    with open(SITEMAP_PATH, "w", encoding="utf-8") as f:
        f.write(xml_content)
    print(f"Wrote {len(urls)} URLs to {SITEMAP_PATH}")

    # Update robots.txt
    robots_content = f"""User-agent: *
Allow: /

# Sitemaps
Sitemap: {BASE_URL}/sitemap.xml
"""
    with open(ROBOTS_PATH, "w", encoding="utf-8") as f:
        f.write(robots_content)
    print(f"Updated {ROBOTS_PATH}")

if __name__ == "__main__":
    generate()
