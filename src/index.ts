import { Captcha } from './Captcha';

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  const left: any = document.querySelector('input[name=left]');
  const right: any = document.querySelector('input[name=right]');

  const result = new Captcha().generate(1, +left.value, 1, +right.value);
  document.getElementById('result').innerHTML = result;
});
