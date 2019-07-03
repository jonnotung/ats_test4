const countryUtils = {};


//expects output of parser - object with key Country 
countryUtils.isolateCountries = (data) => {
    const countries = {};

    for(const row of data) {
        let currCountry = row.Country;
   
        if (! (currCountry in countries)) {
            countries[currCountry] = 1;
        } else {
            countries[currCountry] = countries[currCountry] + 1;
        }
    }
    console.log(countries);
    return countries;
};

//expects an object with keys = country names, values = count of people from file
countryUtils.toCountriesArray = (data) => {
    const countries = [];

    for (let country in data) {
        if(country !== "undefined") {
            const currentCountry = {
                name: country,
                count: data[country]
            }
            countries.push(currentCountry);
        }
    }
    console.log(countries);
    return countries;
}

//expects an object with keys = country names, values = count of people from file
countryUtils.getDistribution = (data) => {
    const dist = {};

    for(let country in data) {
        const thisCount = data[country];
        if(! (thisCount in dist)) {
            dist[thisCount] = 1;
        } else {
            dist[thisCount] = dist[thisCount] + 1;
        }
    }
    console.log(dist);
    return dist;
}

//expects an array of objects with keys name and count
countryUtils.getTen = (dataArray) => {
    const arrayCopy = [...dataArray].sort( (a, b) => {
        return b.count - a.count;
    } );
    return [arrayCopy.slice(0, 10), arrayCopy.slice(arrayCopy.length - 10, arrayCopy.length)];
}



export default countryUtils;