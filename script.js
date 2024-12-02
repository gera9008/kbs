// Чекаємо, поки сторінка завантажиться
document.addEventListener("DOMContentLoaded", () => {
  // Отримуємо елемент з текстом "Hello World"
  const helloElement = document.getElementById("hello");

  // Додаємо прозорість 1 через невелике затримання
  setTimeout(() => {
    helloElement.style.opacity = "1"; // Робимо текст видимим
  }, 500);
});
