export class ApiCallDocName {
  async getApiDocNames(searchName){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${searchName}&location=45.5051%2C-122.6750%2C30&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}

export class ApiCallSymptom {
  async getApiSymptoms(searchName){
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${searchName}&location=45.5051%2C-122.6750%2C30&user_location=45.5051%2C-122.6750&limit=10&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
