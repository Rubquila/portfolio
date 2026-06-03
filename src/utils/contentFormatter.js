export const formatContent = (text) => {
  if (!text) {
    return '';
  }

  return text
    .split('\n\n')
    .map((paragraph) => {
      if (paragraph.trim() === '') {
        return '';
      }

      if (paragraph.trim().match(/^(-|•|\d+\.)/m)) {
        const items = paragraph.split('\n').filter((line) => line.trim());
        return `<ul class="article-content-list">${items
          .map((item) => {
            const cleanItem = item.replace(/^(-|•|\d+\.)/, '').trim();
            return `<li class="article-content-list-item">${cleanItem}</li>`;
          })
          .join('')}</ul>`;
      }

      return `<p class="article-content-paragraph">${paragraph.trim()}</p>`;
    })
    .filter((p) => p !== '')
    .join('');
};
