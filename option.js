function Save() {
  var message = document.getElementById('nickname').value;  // テキストボックス（input_message）に入力された文字列をmessage変数に格納

  chrome.storage.local.set({'nickname': message}, function () {
  });  // Alertキーとmessageの文字列を対にして記録

  alert("nicknameを保存しました");
}

function Load() {
  chrome.storage.local.get('nickname', function (items) {
    document.getElementById('nickname').value = items.nickname;  
  });
}

// オプションページ（options.html）の読み込みと解析が完了したらLoad関数を実行
document.addEventListener('DOMContentLoaded', Load);  

// 保存ボタン（save_button）がクリックされたらSave関数を実行
document.getElementById('save_button').addEventListener('click', Save);