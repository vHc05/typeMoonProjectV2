document.addEventListener('DOMContentLoaded', function () {
  let seriesList = JSON.parse(localStorage.getItem('seriesList')) || [];

  const seriesForm = document.getElementById('series-form');
  const seriesListContainer = document.getElementById('s-list');

  seriesForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const serieName = document.getElementById('serieName').value;
    const category = document.querySelector('.form-select').value;

    if (username.trim() === '' || email.trim() === '' || serieName.trim() === '') {
      alert('Por favor, completa todos los campos del formulario.');
      return;
    }

    const seriesData = {
      username: username,
      email: email,
      serieName: serieName,
      category: category
    };

    seriesList.push(seriesData);
    saveSeriesList();
    displaySeriesList();
  });

  function displaySeriesList() {
    seriesListContainer.innerHTML = '';

    seriesList.forEach(function (series, index) {
      const li = document.createElement('li');
      li.textContent = `${series.username} solicitó la serie "${series.serieName}" en la categoría ${series.category}.`;
      
      // Agregar botones para editar y borrar
      const editButton = document.createElement('button');
      editButton.textContent = 'Editar';
      editButton.addEventListener('click', function () {
        editSeries(index);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Borrar';
      deleteButton.addEventListener('click', function () {
        deleteSeries(index);
      });

      li.appendChild(editButton);
      li.appendChild(deleteButton);

      seriesListContainer.appendChild(li);
    });
  }

  function saveSeriesList() {
    localStorage.setItem('seriesList', JSON.stringify(seriesList));
  }

  function editSeries(index) {
    const series = seriesList[index];

    document.getElementById('username').value = series.username;
    document.getElementById('email').value = series.email;
    document.getElementById('serieName').value = series.serieName;
    document.querySelector('.form-select').value = series.category;


    seriesList.splice(index, 1);
    saveSeriesList();

    displaySeriesList();
  }

  function deleteSeries(index) {

    seriesList.splice(index, 1);
    saveSeriesList();


    displaySeriesList();
  }

  displaySeriesList();
});