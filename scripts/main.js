async function apiCall(url) {
    try{
         let res= await fetch(url);
         let data=await res.json();

         return data;
    }
    catch(error){
        console.log("err",error)
    }
    
    //add api call logic here


}


function appendArticles(articles,main) {
    var lengthh=articles.length;
    
    Array.from(articles).forEach(element=>{
      
        let div=document.createElement('div');

        let title=document.createElement("h2");
        title.textContent=element.title;

        let image=document.createElement('img');
        image.src=element.urlToImage;

        let description=document.createElement('p');
        description.textContent=element.description;

        if(lengthh==1){
            var display=document.createElement("p");
            display.textContent=element.content;

            
            div.append(title,image,description,display);
        }

        else{div.append(title,image,description);}

        div.onclick=()=>{
            localStorage.setItem("article",JSON.stringify(element));
            window.location.href="news.html";
        }
        main.append(div);


    })

    //add append logic here

}

export { apiCall, appendArticles }