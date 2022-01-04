// Animations
AOS.init({
    anchorPlacement: 'top-left',
    duration: 1000
  });
  
  // Add your javascript here
  /* document.addEventListener('DOMContentLoaded', function () {
      const zooming = new Zooming({
          bgColor: 'rgb(0, 0, 0)',
          bgOpacity: 0.8,
          customSize: '100%'
      })
      zooming.listen('.img-zoomable')
  }) 
  // POST API REQUEST
  async function post_visitor() {
      try {
          //let response = await fetch('https://fubnpssn8l.execute-api.ca-central-1.amazonaws.com/Prod/visitor_count/', {
          let response = await fetch('https://fubnpssn8l.execute-api.ca-central-1.amazonaws.com/Prod/visitor_count', {
              method: 'POST',
              headers: {
                  //'x-api-key': 'JslbDfdt1F8fl7wE4CRIj1Oqidmtmzqw4lZ539Sj'
              }
          });
          let data = await response.json()
          //console.log(data);
          return data;
      } catch (err) {
          console.error(err);
      }
  } */
  
  // GET API REQUEST
  async function get_visitors() {
      // call post api request function
      //await post_visitor();
      try {
          let response = await fetch('https://7grvryun9k.execute-api.us-west-1.amazonaws.com/visitor_count', {
              method: 'GET',
              headers: {
                  //'x-api-key': 'JslbDfdt1F8fl7wE4CRIj1Oqidmtmzqw4lZ539Sj',
              }
          });
          let data = await response.json()
          document.getElementById("visitors").innerHTML = data['count'] + " visits.";
          console.log(data);
          return data;
      } catch (err) {
          console.error(err);
      }
  }
  
  get_visitors();