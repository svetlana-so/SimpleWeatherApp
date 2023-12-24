export interface WeatherData {
    name: string;
    main: {
      temp: number;
    };
    weather: {
      main: string;
      icon: string;
    }[];
    wind: {
      speed: number;
    };
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    }
  }
  
  