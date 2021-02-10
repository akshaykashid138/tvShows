
movieName=document.getElementById('name')
genre=document.getElementById('genre')
language=document.getElementById('language')
img=document.getElementById('img')
summary=document.getElementById('summary')
rating=document.getElementById('rating')
info=document.getElementById('info')

document.getElementById("btnSearch").addEventListener("click", ev => {
    ev.preventDefault(); 
    //let url = `http://api.tvmaze.com/search/shows?q=`;
     let url=`http://api.tvmaze.com/singlesearch/shows?q=`
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);
   // console.log(url);

    async function getMovieDetail(url){
        var res=await fetch(url)
       data=await res.json()
       return data
    }
   
    
    val=getMovieDetail(url)
   
    val.then(response=>{
        if(response){
       info.setAttribute('class','d-flex justify-content-center')
    }
        
        
         console.log(response)
        // console.log(response[0].show.name)

        movieName.innerHTML=response.name
        genre.innerHTML=""
        for(var i=0;i<response.genres.length;i++)
        {
            genre.innerHTML+=response.genres[i]+"  "
        }
       // genere.innerHTML=response.genres[0]
        language.innerHTML=response.language
        image=response.image.original
        
        img.setAttribute("src",image)
        img.style=width="200px";
        img.style.height="290px"

        summary.innerHTML=response.summary
        rating.innerHTML=response.rating.average
        
    })
    
   
     .catch(err => {
        console.error(err);
      });
  });


