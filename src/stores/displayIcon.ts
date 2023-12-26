export function displayIcon(query: string): string {
    const lowercasedQuery = query.toLowerCase();
    console.log(query)
    
    if (lowercasedQuery === 'clouds') {
      return 'clouds.png';
    } else if (lowercasedQuery === 'thunderstorm') {
      return 'thunderstorm.png';
    } else if (lowercasedQuery === 'drizzle') {
      return 'drizzle.png';
    } else if (lowercasedQuery === 'rain') {
      return 'rain.png';
    } else if (lowercasedQuery === 'snow') {
      return 'snow.png';
    } else if (lowercasedQuery === 'clear') {
      return 'clear.png';
    } else if (lowercasedQuery === 'mist') {
      return 'mist.png';
    } else {
      return 'any.png';
    }
  }
  
 