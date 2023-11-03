const access_key="S6zsM6ipQVCpesFZOA_ZzkFiBafq6dxBo_NnLu9fgZg";

const form_Element=document.querySelector("form")
const input_Element=document.getElementById("Search-input")
const search_results=document.querySelector(".search-results")
const show_more=document.getElementById("show-more-button")


let inputData=""
let page=1;

async function searchImages(){
    inputData=input_Element.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${access_key}`;

    const response=await fetch(url);
    const data= await response.json();

    const results = data.results;

    if(page===1){
        search_results.innerHTML="";
    }

    results.map((result) =>{
        const imageWrapper=document.createElement("div");
        imageWrapper.classList.add("search-result");
        const image=document.createElement("img");
        image.src=result.urls.small;
        image.alt=result.alt_description;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.textContent=result.alt_description; /*title line of images */


        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        search_results.appendChild(imageWrapper);



        


    })

    page++ ;
        if(page>1){
            show_more.style.display="block" ;

        }

}

form_Element.addEventListener("submit",(event)=>{
    event.preventDefault()
    page=1;

    searchImages()
})

show_more.addEventListener("click",()=>{



    searchImages()
})