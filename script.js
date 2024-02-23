
document.addEventListener('DOMContentLoaded', function() {
  const button = document.querySelector('.portfolio-button');

  button.addEventListener('click', function(event) {
    event.preventDefault();
    this.classList.add('button-animation');
  });
});