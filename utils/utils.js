function kelvinToFahrenheit(kelvin) {
    const fahrenheit =  1.8 * (kelvin - 273) + 32;
    return fahrenheit.toFixed(2);
}

function formatDate(date){
    const myDateObj = new Date(date);
    const newString = myDateObj.toLocaleDateString('en-US', {weekday: 'short', month: 'short', day: 'numeric'});
    return newString;
}

const parseForecastData = function parseForecastData(data){
    if (!data){
        return [];
    }
    let dataArr = [];
    for (const d of data){
        const object = {
            "date": formatDate(d.dt_txt),
            "temp": kelvinToFahrenheit(d.main.temp),
            "main": d.weather[0].main,
            "description": d.weather[0].description,
            "icon": d.weather[0].icon,
        }
        dataArr.push(object);
    }
    console.log(dataArr);
    return dataArr;
}

export {parseForecastData};
