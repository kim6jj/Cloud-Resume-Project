async function get_visitors() {
  // call post api request function
  //await post_visitor();
  try {
      let response = await fetch('https://ncsbce05rg.execute-api.us-east-1.amazonaws.com/beta', {
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