let animeList = [
/*
    {
        name: "Naruto",
        imgLink: "https://i.imgur.com/9HSI4fT.jpeg"
    },
    {
        name: "Odd Taxi",
        imgLink: "https://animefire.net/img/animes/odd-taxi-large.webp?v=1"
    },
    {
        name: "Aria",
        imgLink: "https://pm1.narvii.com/6251/4227229f395b72d03953a2fd56e05400895bdb7a_hq.jpg"
    }
*/
];

for(let i = 0; i < animeList.length; i++)
{
    let element = document.getElementById("animeList");
    element.innerHTML = element.innerHTML + "<img class=\"anime\" src=" + animeList[i].imgLink + " />"; // inner : what's inside
}

function addAnime()
{
    let animeImgLink = document.getElementById("image").value;
    let animeName = document.getElementById("anime").value;

    if(testFormat(animeImgLink))
    {
        listAnime(animeImgLink);
        animeList.push({name: animeName, imgLink: animeImgLink});
    }
    else // link not valid
    {
        alert("Error: cannot get image from link. Example of a valid link:\nhttps://site.com/imageName.format");
    }

    document.getElementById("image").value = "";
    document.getElementById("anime").value = "";
}

let formatList = [".jpg", ".png", ".jpeg", ".gif", ".tif", ".tiff", ".bmp", ".eps", ".raw", ".cr2", ".nef", ".orf", ".sr2"];

function testFormat(animeImgLink)
{
    for(let i = 0; i < formatList.length; i++)
    {
        if(animeImgLink.endsWith(formatList[i]))
        {
            return true;
        }
    }

    return false;
}

function listAnime(animeImgLink)
{
    let element = document.getElementById("animeList");
    element.innerHTML = element.innerHTML + "<img class=\"anime\" src=" + animeImgLink + " />";
}