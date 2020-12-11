import {API_KEY, NEWS_URL, SOURCES} from './keys'

export async function getArticles(){
    try{
       let articles = await fetch(`${NEWS_URL}?sources=${SOURCES}`,{
           headers: {
               'X-API-KEY': API_KEY
           }
       });

       let result = await articles.json();
       articles = null;
       return result.articles;
    }
    catch(error){
        throw error;
    }
}