// GET REQUEST
function getTodos() {
  axios
  .get('https://ncsbce05rg.execute-api.us-east-1.amazonaws.com/beta', {
    timeout: 5000
  })
  .then(res => {
    console.log(res)
    showOutput(res.data)
  })
  .catch(err => console.error(err));
}

// POST REQUEST
function addTodo() {
  console.log('addToDo - POST request')
  axios
    .post('https://ncsbce05rg.execute-api.us-east-1.amazonaws.com/beta', {
      title: 'New Todo',
      completed: false
    })
    .then(res => console.log(res))
    .catch(err => console.error(err));
}


// AXIOS INSTANCE
const axiosInstance = axios.create({
  // Other custom settings
  baseURL: 'https://jsonplaceholder.typicode.com'
});
// axiosInstance.get('/comments').then(res => showOutput(res));

// Show output in browser
function showOutput(res) {
  console.log(res.data)

  var paragraph = document.getElementById("res");
  var text = document.createTextNode(`Hello, Visitor #${res}!`);
  paragraph.appendChild(text);
}

getTodos()
addTodo()