
const URL = "https://eacp.energyaustralia.com.au/codingtest"
const endpoint = "/api/v1/festivals"
const statusCode = 200


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
	
	console.assert(festival.hasOwnProperty("name") && festivalName != null && festivalName != '', 
		"\nExpected festival to have a name and not be null or empty\nActual outcome: " + JSON.stringify(festival))
		
	console.assert(festival.hasOwnProperty("bands") && festivalBands != null && festivalBands != '', 
		"\nExpected each festival to have at least one band\nActual: " + JSON.stringify(festival))
	
	for (let j = 0; j < festivalBands.length; j++) {
		const festivalBand = festivalBands[j]
		
		console.assert(festivalBand.hasOwnProperty("name") && festivalBand.name != null && festivalBand.name != '',
			"\nExpected each band to have a name\nActual outcome: " + JSON.stringify(festivalBand))
			
		console.assert(festivalBand.hasOwnProperty("recordLabel") && festivalBand.recordLabel != null,
			"\nExpected each band could have a record label\nActual outcome: " + JSON.stringify(festivalBand))
	}
}
