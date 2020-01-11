const DOG_URL = "https://dog.ceo/api/breeds/image/random/50";


const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function(response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function(processedResponse) {
        for(let i = 0; processedResponse.message.length > i; i++){
          const img = document.createElement("img");
          img.style.height = "150px";
          img.style.width = "150px";
          img.style.padding = 0;
          img.style.margin = 0;
          img.src = processedResponse.message[i];
          img.alt = "cute doggo";
          doggos.appendChild(img);
        }
      });
}


document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);