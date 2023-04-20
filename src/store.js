import { reactive } from 'vue';
import axios from 'axios'
export const store = reactive({

    API_URL: 'https://api.themoviedb.org/3/movie/550?api_key=4db66c26f4dc5d9d03f395cf284c2c0e',
    apiRes: null,
    text: '',
    flag: '',

    
        callApi(url) {
            axios
                .get(url)
                .then(response => {
                    this.apiRes = response.data.results
                    this.flag = this.apiRes[1].original_language
                    console.log(this.flag);
                })
                .catch(err => {
                    console.error(err.message);
                })
        }
    

})