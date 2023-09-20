const wrapper = document.querySelector(".wrapper")
const title = document.querySelector(".country-name")
const countryName = new URLSearchParams(window.location.search).get("countryName")
const lat = +new URLSearchParams(window.location.search).get("lat")
const lon = +new URLSearchParams(window.location.search).get("lon")
console.log(lat, lon);
console.log(countryName);
function renderMap (){
    const div = document.createElement("div")
    div.innerHTML = `
        <div style="position:relative;overflow:hidden;"><a href="https://yandex.uz/maps/10335/tashkent/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Ташкент</a><a href="https://yandex.uz/maps/10335/tashkent/?ll=69.279737%2C41.311151&utm_medium=mapframe&utm_source=maps&z=12" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты — транспорт, навигация, поиск мест</a><iframe src="https://yandex.uz/map-widget/v1/?ll=${lon}%2C${lat}&z=12" width="560" height="400" frameborder="1" allowfullscreen="true" style="position:relative;"></iframe></div>
    `
    wrapper.appendChild(div)
    title.innerHTML = `${countryName ? countryName : "Tashkent"}`
}
renderMap()