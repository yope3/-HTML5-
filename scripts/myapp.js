if ('serviceWorker' in navigator) {
  //serviceWorkerを登録
  navigator.serviceWorker.register('/sw.js')
    .then(function (registration) {
      // 登録成功の場合
      console.log('ServiceWorker登録成功');
      console.log('ServuceWorkerの有効範囲' + registration.scope);
    }).catch(function (error) {
      // 登録失敗の場合
      console.log('ServiceWorker登録失敗　原因: ', error);
    });
} else {
  console.log('このブラウザはServiceWorkerをサポートしていません');
}
