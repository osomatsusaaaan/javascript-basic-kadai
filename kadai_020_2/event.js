// クリックしたとき（マウスボタンを押して離したとき）
// クリック後に「ボタンをクリックしました」「ボタン」を表示

const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.textContent = 'ボタンをクリックしました';
});




