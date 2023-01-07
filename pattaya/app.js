var map = L.map('map').setView(PORTALS[PORTALS.length-1].geo, 18);
	// var map = L.map('map').setView([51.5, -0.09], 13);

// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// })
L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
	maxZoom: 20,
	attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
}).addTo(map)
var LeafIcon = L.Icon.extend({
	options: {
		// shadowUrl: 'leaf-shadow.png',
		iconSize:     [60, 60],
		shadowSize:   [50, 64],
		iconAnchor:   [22, 94],
		shadowAnchor: [4, 62],
		popupAnchor:  [-3, -76]
	}
})



// console.log(PORTALS.length)
for (let portal of PORTALS) {
    L.marker([portal.geo[0],portal.geo[1]], 
        {icon: new LeafIcon({iconUrl: `https://lh3.googleusercontent.com/${portal.img}`})})
    .bindPopup(
        `
        <h2>${portal.portalName}</h2>
        <p>https://intel.ingress.com/intel?ll=${portal.geo[0]},${portal.geo[1]}&z=18&pll=${portal.geo[0]},${portal.geo[1]}</p>
        
        <a href="https://intel.ingress.com/intel?ll=${portal.geo[0]},${portal.geo[1]}&z=18&pll=${portal.geo[0]},${portal.geo[1]}" target="_blank">
        <img src="https://lh3.googleusercontent.com/${portal.img}">
        </a>`)
    .addTo(map)
}