let ramenMenuDiv = document.getElementById('ramen-menu');
let ramenDetailDiv = document.getElementById('ramen-detail');
let ramenDetailImage = document.querySelector('.detail-image');
let ramenDetailName = document.querySelector('.name');
let ramenDetailRestaurant = document.querySelector('.restaurant');
// console.log(ramenDetailDiv, ramenDetailImage, ramenDetailName, ramenDetailRestaurant);
let ramenRatingDisplay = document.getElementById('rating-display');
let ramenCommentDisplay = document.getElementById('comment-display');

let newRamenForm = document.getElementById('new-ramen');
let newName = document.getElementById('new-name');
let newRestaurant = document.getElementById('new-restaurant');
let newImage = document.getElementById('new-image');
let newRating = document.getElementById('new-rating');
let newComment = document.getElementById('new-comment');

fetch("http://localhost:3000/ramens")
.then(response => response.json())
.then(ramenData => {
    // console.log(ramenData);
    ramenData.forEach(ramens => {
        // console.log(ramenElement.name);
        renderImages(ramens);
    });

    renderNewRamen();

})

function renderImages(ramens) {
    let ramenImage = document.createElement('img');
    ramenImage.src = ramens.image;

    ramenImage.addEventListener('click', event => {
        // console.log('clicked!');
        ramenDetailImage.src = ramens.image;
        ramenDetailName.textContent = ramens.name;
        ramenDetailRestaurant.textContent = ramens.restaurant;
        ramenRatingDisplay.textContent = ramens.rating;
        ramenCommentDisplay.textContent = ramens.comment;
    })

    ramenMenuDiv.append(ramenImage);
}

function renderNewRamen() {
    newRamenForm.addEventListener('submit', event => {
        event.preventDefault();

        // console.log('submitted!');
        let newRamen = {
            name: newName.name,
            restaurant: newRestaurant.value,
            image: newImage.value,
            rating: newRating.value,
            comment: newComment.value
        }
         // console.log(newRamen);
        renderImages(newRamen);
        ramenMenuDiv.append(newRamen);

        newRamenForm.reset();
    })
    
}