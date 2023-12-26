<template>
    <div class="relative" v-if="!weatherData">
  <input type="email" v-model="city" @keyup.enter="checkWeather" 
  id="hs-floating-gray-input-email" 
  class="peer p-4 block w-full bg-gray-100 border-transparent 
  rounded-full text-sm placeholder:text-transparent 
  disabled:opacity-50 disabled:pointer-events-none
  focus:pt-6
  focus:pb-2
  [&:not(:placeholder-shown)]:pt-6
  [&:not(:placeholder-shown)]:pb-2
  autofill:pt-6
  autofill:pb-2" placeholder="">
  <label for="hs-floating-gray-input-email" class="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
    peer-focus:text-xs
    peer-focus:-translate-y-1.5
    peer-focus:text-gray-500
    peer-[:not(:placeholder-shown)]:text-xs
    peer-[:not(:placeholder-shown)]:-translate-y-1.5
    peer-[:not(:placeholder-shown)]:text-gray-400">Enter city and press Enter</label>
</div>
    <div v-if="weatherData" class="flex flex-col text-center items-center">
      <div class="p-4 max-w-40 mx-auto">
        <img :src="'src/assets/icons/' + displayIcon(weatherData.weather[0].main.toUpperCase())" alt="Weather Icon">
</div>
      <div class="p-4">
      <p class="text-stone-600">{{ weatherData.weather[0].main.toUpperCase() }}</p>
      <p class="text-stone-400">{{ weatherData.name }}, {{ weatherData.sys.country }}</p>
      </div>
      <div class="p-2">
      <p class="text-2xl text-stone-800"> {{ formatNumber(weatherData.main.temp) }} °</p>
    </div>
      <div class="p-4">
      <p class="text-stone-600">Wind Speed</p>
      <p class="text-lg text-stone-800"> {{ formatNumber(weatherData.wind.speed) }} m/s</p>
    </div>
    <div class="py-6 flex flex-row gap-24">
      <div>  
        <img class="max-w-10 mx-auto" src="../assets/icons/sunrise.png" alt="">
        <p>{{ getFormattedTime(weatherData.sys.sunrise) }}</p>
      </div>
      <div> 
        <img class="max-w-10 mx-auto" src="../assets/icons/sunset.png" alt="">
        <p> {{getFormattedTime(weatherData.sys.sunset) }}</p>
      </div>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { WeatherData } from  '../interfaces/WeatherData'
import { formatNumber } from '../stores/formatFunctions'
import {displayIcon} from '../stores/displayIcon'
import {getFormattedTime} from '../stores/getTime'
const city = ref('');
const apiKey = import.meta.env.VITE_OPENWEATHERMAP_API_KEY
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';

//a generic object type, which allows any properties with any values
const weatherData = ref<WeatherData | null>(null);
async function checkWeather() {
  try {
    const response = await fetch(apiUrl + city.value + `&appid=${apiKey}&units=metric`);
    const data = await response.json();
    weatherData.value = data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
</script>



