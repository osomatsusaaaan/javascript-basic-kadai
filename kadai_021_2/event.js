const btn = document.getElementById('btn');
const text = document.getElementById('text');

  // 2秒後に表示させる
btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
});


  
