const init = {
  method: 'GET',
  headers: {
    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",

  }

}

async function getProduct(productId) {

  const response = await fetch('https://striveschool-api.herokuapp.com/api/product/' + productId, init)
  const singleProduct = await response.json()
  console.log(singleProduct)
  let row = document.querySelector(".row")
  row.innerHTML = ""
  row.innerHTML += `

    <div class='col'> 
    <div class="card" style="width: 18rem;">
        <img id="img"src="${singleProduct.imageUrl}" class="card-img-top" alt="image not found">
        <div class="card-body">
        <p class="card-text"> ${singleProduct.brand} </p>

      <h5 class="card-title">${singleProduct.name}</h5>
            <p class="card-text"> ${singleProduct.price} </p>
            <p class="card-text"> ${singleProduct.description} </p>
            <button class="skip" type="button" onclick="delete(event)" id="delete">Delete</button>
            <button class="add" type="button" onclick="edit(event)" id="edit">Edit</button>


        </div>
    </div>
</div>
`
  //finish fetch using async wait

}






window.onload = fetch("https://striveschool-api.herokuapp.com/api/product/", init)
  .then((response) => {
    return response.json(); // or .json() or .blob() ...
  })
  .then((text) => {

    let row = document.querySelector(".row")
    row.innerHTML = ""

    for (let i = 0; i < 5; i++) {
      const singleProduct = text[i]
      console.log(singleProduct)
      row.innerHTML += `

      <div class='col'> 
      <div class="card" style="width: 18rem;">
          <img id="img"src="${singleProduct.imageUrl}" class="card-img-top" alt="image not found">
          <div class="card-body">
          <p class="card-text"> ${singleProduct.brand} </p>

        <h5 class="card-title">${singleProduct.name}</h5>
              <p class="card-text"> ${singleProduct.price} </p>
              <p class="card-text"> ${singleProduct.description} </p>
              <button class="skip" type="button" onclick="delete(event)" id="delete">Delete</button>
              <button class="add" type="button" onclick="edit(event)" id="edit">Edit</button>


          </div>
      </div>
  </div>
  `
    }
  })
  .catch((e) => {
    console.log(e) // error in e.message
  });






async function getResponse() {

  try {
    const data = {
      "name": "nokia",
      "description": "somthing longer",
      "brand": "Samsung",
      "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
      "price": 10000,
    };
    const options = {
      method: 'POST',
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/", options)
    const singleProduct = await response.json()

    let row = document.querySelector(".row")
    row.innerHTML = ""


    alert(singleProduct.name)
    row.innerHTML += `

              <div class='col'> 
                  <div class="card" style="width: 18rem;">
                      <img id="img"src="${singleProduct.imageUrl}" class="card-img-top" alt="image not found">
                      <div class="card-body">
                      <p class="card-text"> ${singleProduct.brand} </p>

                    <h5 class="card-title">${singleProduct.name}</h5>
                          <p class="card-text"> ${singleProduct.price} </p>
                          <p class="card-text"> ${singleProduct.description} </p>
                          <button class="skip" type="button" onclick="Delete(event)" id="skip">skip</button>
                          <button class="add" type="button" onclick="addClickFunction(event)" id="add">add to cart</button>


                      </div>
                  </div>
              </div>
              `

  }
  catch (error) {
    console.error(error);
  }





}

async function deleteProduct(productId) {
  const headersData = {
    method: 'DELETE',
    headers: {
      Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",
      'Content-Type': 'application/json',
    }

  }
  const response = await fetch('https://striveschool-api.herokuapp.com/api/product/' + productId, headersData)
  const singleProduct = await response.json()
  console.log(singleProduct)

};


async function updateProduct(productId) {

  try {
    const data = {
      "name": "updated",
      "description": "somthing longer",
      "brand": "Iphone",
      "imageUrl": "https://drop.ndtv.com/TECH/product_database/images/2152017124957PM_635_nokia_3310.jpeg?downsize=*:420&output-quality=80",
      "price": 50000,
    };
    const options = {
      method: 'PUT',
      headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmEyMmM0MWZmNDNiNTAwMTUwYWYwMTciLCJpYXQiOjE2NTQ3OTUzMzAsImV4cCI6MTY1NjAwNDkzMH0.oqnJezsnkJyrjXJoPOn6HGVeA1kn-ZYC_PRnYyeRAqI",

        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    const response = await fetch("https://striveschool-api.herokuapp.com/api/product/"+ productId, options)
    const singleProduct = await response.json()
    console.log(singleProduct)
  }
  catch (error) {
    console.error(error);
  }
}




