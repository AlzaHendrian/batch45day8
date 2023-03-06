const testimonialData = [
    {
        image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=',
        content: "ok!!",
        author: 'Afif saefuloh',
        rating: 4
    },
    {
        image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=',
        content: "so bad!",
        author: 'Woody Sanburg',
        rating: 1
    },
    {
        image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=',
        content: "im very happy",
        author: 'mr. Abdulah',
        rating: 5
    },
    {
        image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=',
        content: "not work!",
        author: 'ramon wicakjaya',
        rating: 2
    },
    {
        image: 'https://media.istockphoto.com/id/1413766112/photo/successful-mature-businessman-looking-at-camera-with-confidence.jpg?b=1&s=170667a&w=0&k=20&c=lrHSjzuqKIAC76-vpOhzR7pRsP38DGPWt7x7SOFbm0Q=',
        content: "you are genius man",
        author: 'Coki latcuba',
        rating: 5
    },
]

function allTesti() {
    let testiHtml = ''

    testimonialData.forEach((x) => {
        testiHtml += `<div class="testimonial">
        <img src="${x.image}" class="profile-testimonial" />
        <p class="quote">"${x.content}"</p>
        <p class="author">- ${x.author}</p>
        <p class="author">${x.rating} <i class="fa-solid fa-star"></i></p>
    </div>`
    })

    document.getElementById('testimonials').innerHTML = testiHtml;
}

allTesti()

function ratingTesti(rating) {
    let testiHtml = ''

    const resultRating = testimonialData.filter((x) => {
        return x.rating === rating
    })

    if (resultRating.length === 0) {
        testiHtml = '<h1>Not found</h1>'
    } else {
        resultRating.forEach((x) => {
            testiHtml += `<div class="testimonial">
        <img src="${x.image}" class="profile-testimonial" />
        <p class="quote">"${x.content}"</p>
        <p class="author">- ${x.author}</p>
        <p class="author">${x.rating} <i class="fa-solid fa-star"></i></p>
    </div>`
        })
    }

    document.getElementById('testimonials').innerHTML = testiHtml
}