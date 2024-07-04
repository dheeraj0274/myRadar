APIKYE = 'c4b469446da64a62a7455412241903';
const searchbtn= document.getElementById('btn-search');
const cityInput =document.getElementById('input-city');
const cityName = document.getElementById('cityName');
const country= document.getElementById('countryName');
const  localTime = document.getElementById('loc-time')
const temp = document.getElementById('output');
const sup = document.getElementById('sup');





async function getData(KYE, cityName){
	const promise= await fetch(`https://api.weatherapi.com/v1/current.json?key=${KYE}&q=${cityName}&aqi=yes`);
	return await promise.json();
}
searchbtn.addEventListener('click', async ()=>{
    const input = cityInput.value;
    document.getElementById('tempDisplay').style.visibility ='visible';
    const result = await getData( APIKYE,input);
    cityName.innerText =  ` ${result.location.name}, ${result.location.region}`
    countryName.innerText = `${result.location.country}`
    temp.innerText = `${result.current.temp_c}`
    sup.innerText = '°C'
    localTime.innerText = `${result.location.localtime}`;
    

})