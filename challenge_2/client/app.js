var App = () => {

  server = 'http://127.0.0.1:8080'

  sendToServer = (data, successCB) => {
    $.ajax({
      url: server,
      method: 'POST',
      success: (data) => {
        console.log('post successful', data);

      },
      error: (err) => {
        console.log('post unsuccessful', err)
      }
    })
  }

}

