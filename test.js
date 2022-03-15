const axios = require('axios');

async function main(){
    let res = await axios({
        method: "GET",
        url: "http://localhost:8000/server"
    });
    console.log(res.data[0])
}

main()