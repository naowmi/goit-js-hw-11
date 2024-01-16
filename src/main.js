import iziToast from "izitoast"
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const API_KEY = "41813550-341719f2cbf02751aeba3ddbd";
const container = document.querySelector(".gallery")
const searchForm = document.querySelector(".form");
const loader = document.querySelector(".loader")
//! SUBMIT FORM
searchForm.addEventListener("submit", async (event) => {
    event.preventDefault();
  const query = event.currentTarget.elements.query.value.trim();
  try {
if (query.length < 1) {
        iziToast.info({
            timeout: 5000,
            title: "Info",
            message: "Insufficient number of characters. The minimum number of characters is 1",
            position: "topRight"
        })
    } else {
        event.target.reset()
      clearContainer()
    loader.classList.add("is-hidden")
    const response =  await fetch(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true`);
      const { hits } = await response.json();
        loader.classList.remove("is-hidden") 
         if (hits.length === 0) {
        iziToast.info({
            timeout: 5000,
            title: "Info",
            message: "Sorry, there are no images matching your search query. Please try again!",
            position: "topRight"
        });
         } else { 
           renderImgHTML(hits);
            
    }
    }
  } catch (error) {
    iziToast.error({
      timeout: 5000,
      title: "Error",
      message: "An error occurred during processing. Please try again ",
      position: "topRight"
    })
  }
    
})
  let gallery =   new SimpleLightbox(".gallery a",{
  captionDelay: 250, captionsData: "alt"
})
//! RENDER HTML
const renderImgHTML = (data) => {
  container.innerHTML = data.reduce((acc, { webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
     return acc + `

      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}"/>
        </a>

      <div class="info-container">
        <p class="p-item">Like <span class="span-item">${likes}</span></p>
        <p>Views <span class="span-item">${views}</span></p>
        <p>Comments <span class="span-item">${comments}</span></p>
        <p>Downloads <span class="span-item">${downloads}</span></p>
      </div>
            </li>
    `;
  }, '');
gallery.refresh()
}

const clearContainer = () => {
    container.innerHTML = "";
    
    
}

