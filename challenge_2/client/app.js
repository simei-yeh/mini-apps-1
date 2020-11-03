var App = () => {

  server = 'http://127.0.0.1:8080'

  sendToServer = (data, successCB) => {
    $.ajax({
      url: server,
      method: 'POST',
      dataType: "json",
      success: (data) => {
        console.log('post successful', data);

      },
      error: (err) => {
        console.log('post unsuccessful', err)
      }
    })
  }
}


document.getElementById("submit").addEventListener('click', () => {
  document.getElementById("form").submit((event) => {
    console.log(event);
  })
})
