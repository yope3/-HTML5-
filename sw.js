//キャッシュのバージョン
var CacheName = 'cache-v1';

//キャッシュするリソースのURL
var CacheItems = [
  '/',
  '/index.html',
  '/second.html',
  '/styles/style.css',
  '/scripts/myapp.js',
  '/images/bridge.jpg',
  '/images/lamppost.jpg',
  '/images/terrase.jpg'
];

//キャッシュのインストール
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CacheName)
      .then(function (cache) {
        cache.addAll(CacheItems);
      })
  );
});

//ブラウザからのリクエストを横取り
self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        //リソースがあればServiceWorkerからレスポンス
        console.log('Service Workerからレスポンス');
        return response;
      } else {
        //リソースがなければサーバーにリクエスト
        console.log('サーバーにリクエスト');
        return fetch(event.request);
      }
    })
  );

  event.waitUntil(
    //通知を生成、表示
    self.registration.showNotification('Service Worker DEMO', {
      body: 'リクエストを横取り',
    })
  );

});