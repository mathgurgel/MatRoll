let animeList = [
    "https://i.imgur.com/9HSI4fT.jpeg",
    "https://animefire.net/img/animes/odd-taxi-large.webp?v=1",
    "https://pm1.narvii.com/6251/4227229f395b72d03953a2fd56e05400895bdb7a_hq.jpg"
];
  
for(let i = 0; i < animeList.length; i++)
{
    document.write("<img class=\"anime\" src=" + animeList[i] + ">");
}
  