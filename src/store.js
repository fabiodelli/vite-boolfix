import { reactive } from 'vue';
import axios from 'axios'
export const store = reactive({

    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=4db66c26f4dc5d9d03f395cf284c2c0e',
    apiRes: null,
    text: '',
    
    callApi(url) {
        console.log(url)
        axios
            .get(url)
            .then(response => {
                this.apiRes = response.data.results
            })
            .catch(err => {
                console.error(err.message);
            })
    }


})