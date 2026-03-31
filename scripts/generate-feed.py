#!/usr/bin/env python3
"""
Generate RSS 2.0 feed for AI 前沿精读 site.
Scans all markdown articles, extracts frontmatter, and produces feed.xml.
"""

import os
import re
import sys
from datetime import datetime
from xml.etree.ElementTree import Element, SubElement, tostring, ElementTree
from xml.dom.minidom import parseString
from pathlib import Path

DOCS_DIR = Path(__file__).resolve().parent.parent / "docs"
OUTPUT_PATH = DOCS_DIR / "public" / "feed.xml"
SITE_URL = "https://sherconan.github.io/ai-frontiers-cn"
SITE_TITLE = "AI 前沿精读"
SITE_DESC = "全球顶尖 AI 实验室博客的中文翻译与深度解读"
MAX_ITEMS = 50


def extract_frontmatter(filepath: Path) -> dict:
    """Extract YAML frontmatter from a markdown file."""
    try:
        text = filepath.read_text(encoding="utf-8")
    except Exception:
        return None

    # Match YAML frontmatter between --- delimiters
    match = re.match(r'^---\s*\n(.*?)\n---\s*\n', text, re.DOTALL)
    if not match:
        return None

    fm_text = match.group(1)
    body = text[match.end():]

    # Simple YAML parsing for title, description, date
    title = None
    description = None
    date = None

    for line in fm_text.split('\n'):
        line = line.strip()
        if line.startswith('title:'):
            title = line[6:].strip().strip('"').strip("'")
        elif line.startswith('description:'):
            description = line[12:].strip().strip('"').strip("'")
        elif line.startswith('date:'):
            date = line[5:].strip().strip('"').strip("'")

    if not title:
        return None

    # If no description, extract first 200 chars from body
    if not description:
        # Remove markdown formatting for clean text
        clean = re.sub(r'[#*`\[\]()>]', '', body)
        clean = re.sub(r'\n+', ' ', clean).strip()
        description = clean[:200] + '...' if len(clean) > 200 else clean

    # Build URL from file path relative to docs/
    rel = filepath.relative_to(DOCS_DIR)
    # Convert .md to clean URL path
    url_path = str(rel).replace('.md', '').replace('\\', '/')
    if url_path.endswith('/index'):
        url_path = url_path[:-6]

    return {
        "title": title,
        "description": description,
        "date": date,
        "url": f"{SITE_URL}/{url_path}",
        "filepath": str(filepath),
    }


def get_file_date(filepath: Path, date_str: str) -> datetime:
    """Get date from frontmatter or file mtime."""
    if date_str:
        for fmt in ('%Y-%m-%d', '%Y/%m/%d', '%Y-%m-%dT%H:%M:%S'):
            try:
                return datetime.strptime(date_str, fmt)
            except ValueError:
                continue
    # Fallback to file modification time
    return datetime.fromtimestamp(filepath.stat().st_mtime)


def scan_articles() -> list:
    """Scan all markdown articles under docs/."""
    articles = []
    skip_dirs = {'node_modules', '.vitepress', 'public'}

    for md_file in DOCS_DIR.rglob('*.md'):
        # Skip index files and special directories
        parts = md_file.relative_to(DOCS_DIR).parts
        if any(p in skip_dirs for p in parts):
            continue

        # Skip top-level index.md and pure index pages
        if md_file.name == 'index.md':
            continue

        fm = extract_frontmatter(md_file)
        if fm:
            fm['date_obj'] = get_file_date(md_file, fm.get('date'))
            articles.append(fm)

    # Sort by date descending
    articles.sort(key=lambda a: a['date_obj'], reverse=True)
    return articles[:MAX_ITEMS]


def generate_rss(articles: list) -> str:
    """Generate RSS 2.0 XML string."""
    rss = Element('rss', version='2.0')
    rss.set('xmlns:atom', 'http://www.w3.org/2005/Atom')

    channel = SubElement(rss, 'channel')
    SubElement(channel, 'title').text = SITE_TITLE
    SubElement(channel, 'link').text = SITE_URL
    SubElement(channel, 'description').text = SITE_DESC
    SubElement(channel, 'language').text = 'zh-CN'
    SubElement(channel, 'lastBuildDate').text = datetime.now().strftime(
        '%a, %d %b %Y %H:%M:%S +0800'
    )
    SubElement(channel, 'generator').text = 'AI 前沿精读 RSS Generator'

    # Atom self-link
    atom_link = SubElement(channel, 'atom:link')
    atom_link.set('href', f'{SITE_URL}/feed.xml')
    atom_link.set('rel', 'self')
    atom_link.set('type', 'application/rss+xml')

    for article in articles:
        item = SubElement(channel, 'item')
        SubElement(item, 'title').text = article['title']
        SubElement(item, 'link').text = article['url']
        SubElement(item, 'description').text = article.get('description', '')
        SubElement(item, 'guid', isPermaLink='true').text = article['url']

        pub_date = article['date_obj'].strftime('%a, %d %b %Y %H:%M:%S +0800')
        SubElement(item, 'pubDate').text = pub_date

    # Pretty print
    rough = tostring(rss, encoding='unicode')
    xml_str = '<?xml version="1.0" encoding="UTF-8"?>\n'
    xml_str += parseString(rough).toprettyxml(indent='  ', encoding=None)
    # Remove the extra xml declaration from toprettyxml
    lines = xml_str.split('\n')
    if lines[0].startswith('<?xml') and lines[1].startswith('<?xml'):
        lines = lines[1:]
    xml_str = '\n'.join(lines)

    return xml_str


def main():
    print(f"Scanning articles in {DOCS_DIR}...")
    articles = scan_articles()
    print(f"Found {len(articles)} articles")

    if not articles:
        print("No articles found, skipping feed generation.")
        sys.exit(0)

    rss_xml = generate_rss(articles)

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(rss_xml, encoding='utf-8')
    print(f"RSS feed written to {OUTPUT_PATH}")
    print(f"Latest article: {articles[0]['title']}")
    print(f"Oldest article: {articles[-1]['title']}")


if __name__ == '__main__':
    main()
