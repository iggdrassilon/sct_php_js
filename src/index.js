const elem = document.createElement("div");
      elem.innerHTML = "<p>Всё всегда начинается с малого,<br>С битых хэш сум, вычисляемых заново,<br>Репортом на другой лад пересказанным,<br>Горсткою байт из родного дебагера...</p>"
document.write(elem.innerHTML);

console.info('первое информационное сообщение');
console.info('второе информационное сообщение');

console.warn('первое предупреждение');
console.warn('втоое предупреждение');

console.error('error one');
console.error('error two');
console.error('error last');
