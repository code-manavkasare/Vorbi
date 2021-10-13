import { API_KEY, NEWS_URL, SOURCES } from './keys';

export async function getArticles(category) {
  try {
    const url = category
      ? `${NEWS_URL}?category=${category}`
      : `${NEWS_URL}?sources=${SOURCES}`;
    let articles = await fetch(url, {
      headers: {
        'X-API-KEY': API_KEY,
      },
    });

    let result = await articles.json();
    articles = null;
    return result.articles;
  } catch (error) {
    throw error;
  }
}
