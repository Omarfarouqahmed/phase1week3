document.addEventListener('DOMContentLoaded', function() {
  // Get the film container from the html by id 
  const filmContainer = document.getElementById('film-container');



  // Fetch films from the JSON file
  fetch('week3.json')
    .then(response => response.json())
    .then(data => {
      const films = data.films;

      
      //iterate through each film while performing several tasks on each film
      films.forEach(film => {

       
        const filmSpace = createFilmSpace(film);
        filmContainer.appendChild(filmSpace);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });

  
  //making the space where each movie will go
  function createFilmSpace(film) {
    const filmSpace = document.createElement('div');
    filmSpace.className = 'film-space';

//making the poster for each movie and append it to the spaace
    const filmPoster = document.createElement('img');
    filmPoster.className = 'film-poster';
    filmPoster.src = film.poster;
    filmPoster.alt = film.title;
    filmSpace.appendChild(filmPoster);
    
//making a title for each movie and appending it to the space
    const filmTitle = document.createElement('h2');
    filmTitle.className = 'film-title';
    filmTitle.textContent = film.title;
    filmSpace.appendChild(filmTitle);

    //making runtime for each movie and appending it to the space
    const filmRuntime = document.createElement('p');
    filmRuntime.className = 'film-runtime';
    filmRuntime.textContent = `Runtime:  ${film.runtime}   minutes`;
    filmSpace.appendChild(filmRuntime);

//making the description for each movie and appending it to space
    const movieDescription = document.createElement('p');
    movieDescription.className = 'movie-description';
    movieDescription.textContent = film.description;
    filmSpace.appendChild(movieDescription);


    //making a screening time for each movie 
    const movieScreening = document.createElement('p');
    movieScreening.className = 'movie-screening';
    movieScreening.textContent = `Screening-time ${film.showtime}`;
    filmSpace.appendChild(movieScreening);

    //making the ticket and appending it to space
    const movieTickets = document.createElement('p');
    movieTickets.className = 'movie-tickets';
    movieTickets.textContent = `Tickets Sold:  ${film.tickets_sold} / ${film.capacity}`;
    filmSpace.appendChild(movieTickets);


    //making a movie button for buying a ticket , adding an event listener to listen for click 
    const movieButton = document.createElement('button');
    movieButton.className = 'movie-button';
    movieButton.textContent = 'Purchase tickets';
   movieButton.addEventListener('click', function() {
    prompt ('Enter how many tickts you wish to purchase')
      //updateTickets(film.id);
    });
    filmSpace.appendChild(movieButton);
   
    return filmSpace;
  }

  
  //making the patch request to update tickets after each is sold
})