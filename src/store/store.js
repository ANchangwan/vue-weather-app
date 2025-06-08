import {createStore} from "vuex";

const store = createStore({
    state: {
        weatherData: {
            icon: 'icon',
            temp: 0,
            text: 'text',
            location: 'location',
            city: 'Seoul',
        }
    },
    mutations: {
        updateWeather(state, payload) {
            state.weatherData.icon = payload.weather[0].icon;
            state.weatherData.temp = payload.main.temp;
            state.weatherData.text = payload.weather[0].description;
            state.weatherData.location = payload.sys.country;
            state.weatherData.city = payload.name;
        },
        onSearchCity(state, payload) {
            state.weatherData.city = payload;
        }
    },
    actions: {
       async getWeather(context){
            const API_KEY = `https://api.openweathermap.org/data/2.5/weather?q=${context.state.weatherData.city}&appid=${import.meta.env.VITE_API_KEY}`;

            await fetch(API_KEY)
                .then(res => res.json())
                .then((data) => {
                  context.commit('updateWeather', data);
                })
                .catch((err) => {
                    console.log(err);
                    alert('에러가 발생했습니다. 잠시 후 다시 시도해주세요.!');
                })
        }
    }
});

export default store;