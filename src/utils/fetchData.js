export const exerciseOptions = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '0cd7ae95c9msh4c91f625e82058fp180300jsn024e87d1211a',
      'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  
  }
  };
  
  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
    },
  };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
  


