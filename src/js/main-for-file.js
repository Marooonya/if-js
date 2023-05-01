const input = document.getElementById('fileInput');
const button = document.getElementById('fileButton');
const img = document.getElementById('img');
const form = document.getElementById('form');

input.addEventListener('click', () => {
  loadFile();
});

const loadFile = () => {
  input.addEventListener('change', () => {
    const file = input.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      img.setAttribute('src', reader.result);
    };
  });
};

button.addEventListener('click', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  formData.append('file', input.files[0]);

  const response = await fetch('https://if-student-api.onrender.com/api/file', {
    method: 'POST',
    body: formData,
  });

  if (response.ok) {
    alert('ok');
  } else {
    alert('Ошибка: ' + response.status);
  }
});
