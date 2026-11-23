"""Собрать docs/reader/index.html из конспекта docs/ml-handbook."""

import html
import re
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parent
NOTES = ROOT.parent / "ml-handbook"
OUT = ROOT / "index.html"

CHAPTERS = [
    ("map", "Содержание", "Как главы связаны", "README.md"),
    ("13", "13. Производные и градиент", "Куда крутить параметр", "13-derivatives-and-gradient.md"),
    ("14", "14. Градиентный спуск", "Шаг против градиента", "14-gradient-descent.md"),
    ("15", "15. Линейная регрессия", "Предсказать число", "15-linear-regression.md"),
    ("16", "16. Масштабирование", "Одинаковые линейки", "16-feature-scaling.md"),
    ("17", "17. Признаки", "Подсказки без подглядывания", "17-feature-engineering.md"),
    ("18", "18. Регуляризация", "Штраф за сложность", "18-regularization.md"),
    ("19", "19. Логистическая регрессия", "Вероятность класса", "19-logistic-regression.md"),
    ("20", "20. SVM и Байес", "Зазор и вероятности слов", "20-svm-and-naive-bayes.md"),
    ("21", "21. KNN", "Спроси соседей", "21-knn.md"),
    ("22", "22. Кластеризация", "Группы без ответов", "22-clustering.md"),
    ("23", "23. PCA", "Сжать признаки", "23-pca.md"),
]

FILE_ANCHOR = {filename: f"ch-{key}" for key, _, _, filename in CHAPTERS}


def stash_math(text):
    slots = []

    def take(display, tex):
        slots.append((display, tex.strip()))
        kind = "D" if display else "I"
        return f"MATH{kind}{len(slots) - 1}END"

    text = re.sub(r"\$\$([\s\S]+?)\$\$", lambda m: take(True, m.group(1)), text)
    text = re.sub(r"(?<!\$)\$([^\$\n]+?)\$(?!\$)", lambda m: take(False, m.group(1)), text)
    for filename, anchor in FILE_ANCHOR.items():
        text = text.replace(f"]({filename})", f"](#{anchor})")
    return text, slots


def restore_math(rendered, slots):
    def display(m):
        tex = html.escape(slots[int(m.group(1))][1])
        return f'<div class="math math-display" data-display="1">{tex}</div>'

    def inline(m):
        tex = html.escape(slots[int(m.group(1))][1])
        return f'<span class="math" data-display="0">{tex}</span>'

    rendered = re.sub(r"<p>\s*MATHD(\d+)END\s*</p>", display, rendered)
    rendered = re.sub(r"MATHD(\d+)END", display, rendered)
    rendered = re.sub(r"MATHI(\d+)END", inline, rendered)
    rendered = rendered.replace("<table>", '<div class="table-wrap"><table>')
    rendered = rendered.replace("</table>", "</table></div>")
    rendered = re.sub(
        r'<a href="(https?://[^"]+)"',
        r'<a href="\1" target="_blank" rel="noopener"',
        rendered,
    )
    titles = {f"ch-{key}": title for key, title, _, _ in CHAPTERS}
    rendered = re.sub(
        r'<a href="#(ch-[^"]+)">[^<]+\.md</a>',
        lambda m: f'<a href="#{m.group(1)}">{html.escape(titles.get(m.group(1), "открыть"))}</a>',
        rendered,
    )
    return rendered


def render_chapter(filename):
    raw = (NOTES / filename).read_text(encoding="utf-8")
    text, slots = stash_math(raw)
    rendered = markdown.markdown(
        text,
        extensions=["tables", "fenced_code", "sane_lists"],
        output_format="html",
    )
    return restore_math(rendered, slots)


def main():
    articles = []
    nav = []
    options = []
    keys = [key for key, *_ in CHAPTERS]
    for index, (key, title, blurb, filename) in enumerate(CHAPTERS):
        anchor = f"ch-{key}"
        body = render_chapter(filename)
        prev_link = ""
        next_link = ""
        if index > 0:
            pk, pt, *_ = CHAPTERS[index - 1]
            prev_link = f'<a href="#ch-{pk}">← {html.escape(pt)}</a>'
        if index + 1 < len(CHAPTERS):
            nk, nt, *_ = CHAPTERS[index + 1]
            next_link = f'<a href="#ch-{nk}">{html.escape(nt)} →</a>'
        articles.append(
            f'<article class="chapter" id="{anchor}">\n{body}\n'
            f'<p class="pager"><span>{prev_link}</span><span>{next_link}</span></p>\n'
            f"</article>"
        )
        nav.append(
            f'<a href="#{anchor}" data-target="{anchor}">'
            f"{html.escape(title)}<small>{html.escape(blurb)}</small></a>"
        )
        options.append(f'<option value="#{anchor}">{html.escape(title)}</option>')

    page = f"""<!DOCTYPE html>
<html lang="ru">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Конспект ML Handbook, главы 13–23</title>
<link rel="stylesheet" href="katex.min.css">
<link rel="stylesheet" href="style.css">
</head>
<body>
<div class="layout">
  <aside class="nav">
    <p class="nav-kicker">ML Handbook</p>
    <h1>Конспект простыми словами</h1>
    <p class="nav-note">Главы 13–23. Формулы можно листать, объяснения идут сразу под ними.</p>
    <select class="jump" aria-label="Перейти к главе" onchange="if (this.value) location.hash = this.value.slice(1)">
      {''.join(options)}
    </select>
    <nav>
      {''.join(nav)}
    </nav>
  </aside>
  <main>
    {''.join(articles)}
  </main>
</div>
<script src="katex.min.js"></script>
<script>
document.querySelectorAll(".math").forEach(function (el) {{
  katex.render(el.textContent, el, {{
    displayMode: el.getAttribute("data-display") === "1",
    throwOnError: false
  }});
}});
var links = Array.prototype.slice.call(document.querySelectorAll(".nav a"));
var chapters = Array.prototype.slice.call(document.querySelectorAll(".chapter"));
function mark() {{
  var current = chapters[0];
  chapters.forEach(function (ch) {{
    if (ch.getBoundingClientRect().top < 140) current = ch;
  }});
  links.forEach(function (a) {{
    a.classList.toggle("active", a.getAttribute("data-target") === current.id);
  }});
}}
document.addEventListener("scroll", mark, {{ passive: true }});
mark();
</script>
</body>
</html>
"""
    OUT.write_text(page, encoding="utf-8")
    print(f"wrote {OUT} ({OUT.stat().st_size} bytes), chapters: {', '.join(keys)}")


if __name__ == "__main__":
    main()
