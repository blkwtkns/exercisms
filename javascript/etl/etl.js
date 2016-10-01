class ETL {

  transform(api){
    let newApi = {};
    for(let k in api){
      api[k].forEach( (ele) => {
        newApi[ele.toLowerCase()] = +k;
      })
    }
    return newApi;
  }
}

module.exports = ETL;
