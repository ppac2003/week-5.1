const citiesContainer = document.getElementById('cities-container');

// Define an array of cities with their information
const cities = [
  { name: 'Pune', population: '3.1 million', state: 'Maharashtra', image: 'download.jpeg' },
  { name: 'Bangalore', population: '12.3 million', state: 'Karnataka', image: 'images.jpeg' },
  { name: 'Delhi', population: '18.9 million', state: 'Delhi', image: 'download (1).jpeg' }
];

// Iterate over each city and create HTML elements for them
cities.forEach((city, index) => {
  const cityElement = document.createElement('div');
  cityElement.classList.add('city');

  // Create an h2 element for the city name
  const cityName = document.createElement('h2');
  cityName.textContent = city.name;

  // Create a p element for the city population and state
  const cityInfo = document.createElement('p');
  cityInfo.textContent = `Population: ${city.population}, State: ${city.state}`;

  // Append city name and info to city container
  cityElement.appendChild(cityName);
  cityElement.appendChild(cityInfo);

  // Create an image element for the city
  const cityImage = document.createElement('img');
  cityImage.src = city.image;
  cityImage.alt = city.name;

  // Append image to city container
  if (index === 0) {
    // Append the 1st image at the top
    cityElement.insertBefore(cityImage, cityName);
  } else if (index === 1) {
    // Append the 2nd image in the middle
    cityElement.insertBefore(cityImage, cityInfo);
  } else {
    // Append the 3rd image at the bottom
    cityElement.appendChild(cityImage);
  }

  // Append city container to cities container
  citiesContainer.appendChild(cityElement);
});
