import axios from 'axios'; 

// save authorization from firebase
// const CLIENT_ID = "";
const ROOT_URL = 'https://kunz-sushi.firebaseio.com/'

export default {
    fetchOrderbyParty(table, party){
        return axios.get(`${ROOT_URL}order.json`, {
            table: table,
            party: party,
        })
        .then(response => {
          const data = response.data
          const orderByParty = []
          for (let key in data) {
            const item = data[key]
            item.id = data[key]
            orderByParty.push(item)
          }
          // this.menu = menu
        })
    }
    }

