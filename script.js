const URL = "https://api.pexels.com/v1/search?query=sea";
const URL2 = "https://api.pexels.com/v1/search?query=dog";
const secondButton = document.getElementById("loadNextImages");
const firstButton = document.getElementById("loadImages");
const form = document.getElementById("searchForm");

firstButton.addEventListener("click", function () {
  fetch(URL, {
    method: "GET",
    headers: {
      Authorization: "R27jH8TLWn6civSwRlGWIA0W2XXSI1iXYsFK2CbUCkkA9xcCgLWbnCxb",
    },
  })
    .then((responseArray) => {
      console.log(responseArray);

      if (responseArray.ok) {
        return responseArray.json();
      } else {
        throw new Error("Ci dispiace ma non siamo riusciti a reperire il dato");
      }
    })
    .then((seaArray) => {
      console.log(seaArray.photos);

      const row = document.getElementById("rowCards");
      console.log(row);

      for (let index = 0; index < seaArray.photos.length; index++) {
        const element = seaArray.photos[index];
        console.log(element);
        const col = document.createElement("div");
        col.classList.add("col-4");
        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm");
        card.innerHTML = `<img src="${element.src.large}" class="bd-placeholder-img card-img-top" />
          <div class="card-body">
            <h5 class="card-title">${element.photographer}</h5>
            <p class="card-text">
            ${element.alt}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
              </div>
              <small class="text-muted">${element.id}</small>
            </div>
          </div>`;

        const buttonHide = document.createElement("button");
        buttonHide.type = "button";
        buttonHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buttonHide.innerText = "Hide";
        row.appendChild(col);
        col.appendChild(card);
        const btnGroup = col.querySelector(".btn-group");
        btnGroup.appendChild(buttonHide);

        buttonHide.addEventListener("click", function () {
          col.classList.add("d-none");
        });
      }
    });
});

secondButton.addEventListener("click", function () {
  fetch(URL2, {
    method: "GET",
    headers: {
      Authorization: "R27jH8TLWn6civSwRlGWIA0W2XXSI1iXYsFK2CbUCkkA9xcCgLWbnCxb",
    },
  })
    .then((responseArray) => {
      console.log(responseArray);

      if (responseArray.ok) {
        return responseArray.json();
      } else {
        throw new Error("Ci dispiace ma non siamo riusciti a reperire il dato");
      }
    })
    .then((seaArray) => {
      console.log(seaArray.photos);

      const row = document.getElementById("rowCards");
      console.log(row);

      for (let index = 0; index < seaArray.photos.length; index++) {
        const element = seaArray.photos[index];
        console.log(element);
        const col = document.createElement("div");
        col.classList.add("col-4");
        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm");
        card.innerHTML = `<img src="${element.src.large}" class="bd-placeholder-img card-img-top" />
              <div class="card-body">
                <h5 class="card-title">${element.photographer}</h5>
                <p class="card-text">
                ${element.alt}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                   
                  </div>
                  <small class="text-muted">${element.id}</small>
                </div>
              </div>`;
        row.appendChild(col);
        col.appendChild(card);
        const buttonHide = document.createElement("button");
        buttonHide.type = "button";
        buttonHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
        buttonHide.innerText = "Hide";
        row.appendChild(col);
        col.appendChild(card);
        const btnGroup = col.querySelector(".btn-group");
        btnGroup.appendChild(buttonHide);

        buttonHide.addEventListener("click", function () {
          col.classList.add("d-none");
        });
      }
    });
});

// form.onsubmit = (e) => {
//   e.preventDefault();

//   loadImages(form.value);
// };
