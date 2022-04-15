
//  Admin-side JS logic goes here


$(document).ready(() =>{

  const showCurrentOrder = (data) => {

    // `
    // <tr>
    //                  <td>${data.user_id}</td>
    //                  <td>${data.id}</td>
    //                  <td>${data.rating}</td>
    //                  <td>${data.comments}</td>
    //                  <td>${data.created_at}</td>
    //                  <td>
    //                    <div class="btn-group">
    //                      <button type="button" class="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown"
    //                        aria-expanded="false">
    //                        Wait Time
    //                      </button>
    //                      <ul class="dropdown-menu">
    //                        <li><a class="dropdown-item" href="#">15 mins</a></li>
    //                        <li><a class="dropdown-item" href="#">20 mins</a></li>
    //                        <li><a class="dropdown-item" href="#">30 mins</a></li>
    //                        <li><a class="dropdown-item" href="#">45 mins</a></li>
    //                        <li><a class="dropdown-item" href="#">60 mins</a></li>
    //                      </ul>
    //                    </div>
    //                  </td>
    //                  <td><button type="button" class="btn btn-outline-success">Completed</button></td>
    //                                 </tr>

    // `
    const string = 'Hello';
    return `<div><h1>${string}</h1></div>`;
  };



  const renderPendingItems = (orders) => {
    for (const order of orders) {
      let allPending = showCurrentOrder(order);
      $('.table').append(allPending);
    }
  };


  const renderItems = () => {
    console.log('Hello');
    $.ajax("/admin/pending", { method: 'GET' })
      .then((data) => {
        console.log('Data',data);
        renderPendingItems(data);
      });
  };


  renderItems();

});

