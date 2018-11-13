import axios from 'axios';

const headers = {'x-api-version': 2};

export default {
    getAuthorities: () => {
        return axios.get("http://api.ratings.food.gov.uk/authorities/basic/", {headers})
    },
    getEstablishments: (authorityId) => {
        return axios.get("http://api.ratings.food.gov.uk/establishments", {
            headers,
            params: {
                "localAuthorityId": authorityId,
                "pageNumber": 1,
                "pageSize": 10000
            }
        })
    },
    getEstablishmentDetails: (authorityId, rating) => {
        return axios.get(`http://api.ratings.food.gov.uk/establishments?localAuthorityId=${authorityId}&ratingKey=${rating}`, {
            headers
        })
    }
}