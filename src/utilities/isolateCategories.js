const isolateCategories = {};

isolateCategories.isolateCountries = (data) => {
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



export default isolateCategories;