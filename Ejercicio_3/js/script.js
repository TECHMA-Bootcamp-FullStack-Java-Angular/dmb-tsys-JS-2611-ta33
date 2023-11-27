// Function to add listener to all p elements of table id
const addListenersToElemet = (tableid) => {
  const pElements = document.getElementById(tableid).querySelectorAll('p');

  pElements.forEach((p) => {
    p.addEventListener('click', () => {
      alertSwal( `Elemento P <p> dentro del: <i class="text-success">${tableid}</i>`)
      console.log('Clicked a p element within the', tableid)
    });
  });
};

// Adds event listeners to all p elements in the body, except for those that are children of a table element. 
const addListenersToBody = () => {

  document.querySelectorAll('p:not(table p)').forEach((p) => { 
    p.addEventListener('click', () => {
      alertSwal('Elemento P <p> en el Body')
      console.log('Clicked a p element in the body')
    })
  })
}

// Attaches event listeners to all `table` elements in the document.
document.addEventListener('DOMContentLoaded', () => {
  addListenersToElemet('table1')
  addListenersToElemet('table2')
  addListenersToBody()
})

// Alerts https://sweetalert2.github.io/
const alertSwal = (title) =>
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title,
    showConfirmButton: false,
    timer: 1500,
  })
