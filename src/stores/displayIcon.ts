export function displayIcon(query: string) {
    if(query == 'CLOUDS') {
        return '<img src="src/components/icons/clouds.png" alt="Clouds Icon">';
    } else if (query == 'THUNDERSTORM') {
        return '<img src="src/components/icons/thunderstorm.png" alt="Thunderstorm Icon">';
    } else if (query == 'DRIZZLE') {
        return '<img src="src/components/icons/drizzle.png" alt="Drizzle Icon">';
    } else if (query == 'RAIN') {
        return '<img src="src/components/icons/rain.png" alt="Rain Icon">';
    } else if (query == 'SNOW') {
        return '<img src="src/components/icons/snow.png" alt="Snow Icon">';
    } else if (query == 'CLEAR') {
        return '<img src="src/components/icons/clear.png" alt="Clear Icon">';
    } else if (query == 'MIST') {
        return '<img src="src/components/icons/mist.png" alt="Mist Icon">';
    }
}
