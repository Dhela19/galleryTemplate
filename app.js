//Declarations of variables
let featuredPhotoContainer = document.querySelector(".featuredPhotoContainer")
let categoriesContainer = document.querySelector(".categoriesContainer")
// let featuredPhoto = document.querySelector(".featuredPhoto")
let categoryNature = document.getElementById("categoryNature")
let categoryWithFriends = document.getElementById("categoryWithFriends")
let categoryTravel = document.getElementById("categoryTravel")
let categories = document.querySelector(".categories")
let allPhotosContainer = document.querySelector(".allPhotosContainer")
let photo = document.querySelector(".photo")
let featuredDescription = document.getElementById("featuredDescription")
let featuredDate = document.getElementById("featuredDate")



//getting JSON files
try {
    console.log("fetching json data...")
    fetch(`./demo.json`)
        .then((res) => res.json())
        .then((data) => {
            // do stuff with the data
            resultFromJson = data;

            let featuredPhotoPath = resultFromJson[0].path
            loopingResults(resultFromJson)
            changeFeaturedPhoto(featuredPhotoPath, resultFromJson)
            // console.log(resultFromJson)
            // console.log(resultFromJson[0].description)
        });
} catch (err) {
    alert(err)
}




featuredImage()
async function featuredImage(){
    fetch('https://api.nasa.gov/planetary/apod?api_key=f69QId4stJboWrsI25QKGEjlZOr5bwJKefTPUcVn', {
    mode: 'cors'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
      changeFeaturedPhoto(data)
    //   earthImages()
    })
    .catch(error => {
      console.error('Error:', error);
      console.error('Status code:', error.response.status);
      console.error('Status Text:', error.response.statusText);
      console.error('Headers:', error.response.headers);
    });
}  



// async function earthImages(){
//     fetch('https://api.nasa.gov/planetary/earth/imagery?api_key=f69QId4stJboWrsI25QKGEjlZOr5bwJKefTPUcVn', {
//     mode: 'cors'
//   })
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return response.json();
//     })
//     .then(data => {
//       console.log(data);
//       changeFeaturedPhoto(data)
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       console.error('Status code:', error.response.status);
//       console.error('Status Text:', error.response.statusText);
//       console.error('Headers:', error.response.headers);
//     });
// }  












//Change Featured Photo and Category Photos
function changeFeaturedPhoto(data){
    featuredPhotoContainer.style=`background-image:url(\'${data.url}\')`
    featuredDate.innerText = data.date;
    featuredDescription.innerText = data.title
    featuredImageDescription.innerText = data.explanation

    if (featuredImageDescription.innerText.length > 10) {
      return;
    } else {
      featuredPhotoContainer.style.display="none"
    }

    //Categories
    categoryNature.style=`background-image:url(\'${resultFromJson[0].path}\')`
    categoryTravel.style=`background-image:url(\'${resultFromJson[1].path}\')`
    categoryWithFriends.style=`background-image:url(\'${resultFromJson[2].path}\')`
    
}





//Updating Page with JSON Data
function loopingResults(displayData) {
    // console.log("updating page with the results")
    try {
        displayData.forEach((each, id) => {
            const displayedData = `<div class="photo" style="background-image:url(${each.path})"><h2 class="photoDescription">${each.description}</h2></div>`
            allPhotosContainer.insertAdjacentHTML("beforeend", displayedData)



            // console.log(each.path);
            console.log("data has been uploaded successfully")

        })
        setIdentity(displayData)
    } catch (error) {
        // alert(error)
    }
}