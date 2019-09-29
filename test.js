const system = require('system-commands');
//window.$ = window.system = require('system-commands');

// function myFunction0(){
//
//
//   system('mkdir new_directory3').then(() => {
//       // Directory was created
//       console.log('Successfully created new_directory');
//       alert("lal!");
//   }).catch(error => {
//       // Oh no! An error occurred
//       console.error(error)
//   })
//
// }

function myFunction0() {
  system('mkdir new_directory').then(() => {
      // Directory was created
      console.log('Successfully created new_directory');
      alert("lal!");
  }).catch(error => {
      // Oh no! An error occurred
      console.error(error);
  })

}
