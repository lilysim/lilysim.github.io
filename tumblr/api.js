const API_KEY = 'LZBfARmepK7YLB3PGVHZkm5PrfULg9J4UROXHspf6fVhRnAnst';
let button_div = document.getElementById('buttons')
let gallery_div = document.getElementById('gallery')
let score_span = document.getElementById('score')


let words = ['fish', 'house', 'boat','beach']
let correct_answer = ''


words.forEach(function(word){
    let new_button = document.createElement('button')
    new_button.innerHTML = word
    new_button.classList.add('btn','btn-info', 'mx-2')
    new_button.onclick = function() {
        if (word == correct_answer) {
            score_span.innerHTML++
            generate() 
        } else {
          score_span.innerHTML--
          alert("WRONG!")   
        }
    }
    button_div.append(new_button)
});

function generate () {
    gallery_div.innerHTML = null 
    let random_number = Math.floor(Math.random()* words.length)
    correct_answer = words[random_number]

    fetch(`https://api.tumblr.com/v2/tagged?api_key=${API_KEY}&tag=${correct_answer}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(result){
        console.log(result.response)
        let posts = result.response
        posts.forEach(function(post) {
        if (post.type == 'photo') {
            console.log(post.photos[0].original_size.url)
            const pic = document.createElement('img')
            pic.src = post.photos[0].original_size.url
            gallery_div.appendChild(pic)
        }
        })
    })
}
generate()