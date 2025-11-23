

async function onFetchMovieClick() {
    const data = await fetchMovie()
    renderMovie(data)
}

async function fetchMovie() {
    const response = await fetch(`http://www.omdbapi.com/?apikey=${MOVIE_API_KEY}&type=movie&t=Steel+Magnolias`)
    const data = await response.json()
    return data
}

// Renders the movies as a div with the title and the plot
const movieContainer = document.getElementById("movie-container")
function renderMovie(movie) {
    movieContainer.innerHTML = `
        <div>
            <img class="img-thumbnail" src="${movie.Poster}"/>
            <h5>${movie.Title}</h5>
            <p>${movie.Plot}</p>
        </div>
    `
}
