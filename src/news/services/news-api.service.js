import axios from "axios";
import {LogoApiService} from "@/shared/services/logo-api.service";

const http = axios.create({
    baseURL: 'https://newsapi.org/v2',
});

export class NewsApiService {
    apiKey = 'cd8d9b4654674903a5f12d8eee4c4b1f';
    logoApi = new LogoApiService();

    getSource() {
        return http.get(`top-headlines/sources?apiKey=${ this.apiKey }`);
    }

    getArticlesForSource(sourceId){
        return http.get(`top-headlines?sources=${ sourceId }&apiKey=${ this.apiKey }`);
    }

    getUrlToLogo(source) {
        return this.logoApi.getUrlToLogo(source);
    }
}