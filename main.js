function transform() {
  let result = document.getElementById('result');
  let converter = new showdown.Converter();
  let input = document.getElementById('input');

  result.innerHTML = converter.makeHtml(input.innerText);
}