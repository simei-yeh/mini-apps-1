
//   sendToServer = (data, successCB) => {
//     $.ajax({
//       url: server,
//       method: 'POST',
//       dataType: "json",
//       success: (data) => {
//         console.log('post successful', data);

//       },
//       error: (err) => {
//         console.log('post unsuccessful', err)
//       }
//     })
//   }
// }


function logSubmit(event) {
  console.log('click!');
  console.log(event);

}


document.getElementById("form").addEventListener('submit', logSubmit)
