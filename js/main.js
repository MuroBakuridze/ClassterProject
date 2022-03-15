fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((response) => {
    let students_data = [];
    let table = document.querySelector('#students_data')
    // console.log(response);
    response.forEach(value => {
      students_data.push('<tr>');
      students_data.push('<td class="students_td">' + value.id + '</td>');
      students_data.push('<td class="students_td">' + value.name + '</td>');
      students_data.push('<td class="students_td">' + value.username + '</td>');
      students_data.push('<td class="students_td">' + value.email + '</td>');
      students_data.push('<td class="students_td">' + value.website + '</td>');
    });
    // table.innerHTML(students_data);
    $('#students_table').append(students_data);
  });

