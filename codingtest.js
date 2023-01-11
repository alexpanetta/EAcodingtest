
const URL = "https://eacp.energyaustralia.com.au/codingtest"
const endpoint = "/api/v1/festivals"
const statusCode = 200
const festivalFields = "name,bands"
const bandFields = "name,recordLabel"


// GET request
// can't get fetch working
const res = fetch(URL + endpoint, {
	mode: 'no-cors',})
	.then((response) => response.json())
	.then((data) => console.log(JSON.parse(data)))
	.catch(function (err) {
		console.log(err)
	})


// verify JSON format
try {
	const textData = res.text()
	var festivals = JSON.parse(textData)
	
} catch (err) {
	console.log(err)
	console.log("Expected response body to be in JSON format")
}


// verify status code
console.assert(res.status == statusCode, 
	"Expected status code: " + statusCode, "Actual status code: " + res.status)


// verify API field names exist, not null and not empty
for (let i = 0; i < festivals.length; i++) {
	const festival = festivals[i]
	const festivalName = festival.name
	const festivalBands = festival.bands
	
	// verify schema/fields of festivals
	console.assert(Object.keys(festival) == festivalFields,
		"\nExpected fields for each festival ('name' and 'bands')\nActual: " + Object.keys(festival))
	
	// verify that both the festival 'name' key and value pair exists
	console.assert(festivalName != null && festivalName != '', 
		"\nExpected value for festival name to exist\nActual outcome: " + JSON.stringify(festival))
		
	console.assert(festivalBands != null && festivalBands != '', 
		"\nExpected each festival to have at least one band\nActual: " + JSON.stringify(festival))
	
	// loop over each band within that festival
	for (let j = 0; j < festivalBands.length; j++) {
		const festivalBand = festivalBands[j]
		const festivalBandName = festivalBand.name
		const festivalBandRecordLabel = festivalBand.recordLabel
		
		// verify schema/fields of bands
		console.assert(Object.keys(festivalBand) == bandFields,
			"\nExpected fields for each band ('name' and 'recordLabel')\nActual: " + Object.keys(festivalBand))
		
		// verify the band 'name' key and value exists
		console.assert(festivalBandName != null && festivalBandName != '',
			"\nExpected each band to have a name\nActual outcome: " + JSON.stringify(festivalBand))
		
		// verify the 'recordLabel' value exists
		console.assert(festivalBandRecordLabel != null,
			"\nExpected each band could have a record label\nActual outcome: " + JSON.stringify(festivalBand))	
	}
}
