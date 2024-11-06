export const getGifs = async (category) => {
    const api_key = "3C1FJp2Ux3dUSxibDiNdzLht3zc4O2D0";
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=${api_key}&limit=10`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gifs = data.map((img) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    return gifs;

  };