if ('serviceWorker' in navigator) {
  //serviceWorkerを登録
  navigator.serviceWorker.register('/scripts/sw.js')
  .then(function (registration) {
    // 登録成功の場合
    console.log('ServiceWorker登録成功');
  }).catch(function (error) {
    // 登録失敗の場合
    console.log('ServiceWorker登録失敗　原因: ', error);
  });
}