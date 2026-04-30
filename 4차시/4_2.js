let items = ['사과', '바나나'];

function showItems() {
  const list = document.getElementById('list');
  list.innerHTML = ''; // 기존 내용 지우기 (초기화??)
  items.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
}

document.getElementById('addBtn').addEventListener('click', () => {
  items.push('귤');
  showItems();
});

showItems();