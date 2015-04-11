'use strict';

/**
 * @ngdoc overview
 * @name myAngularApp
 * @description
 * # myAngularApp
 *
 * Main module of the application.
 */
angular
  .module('myAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMockE2E'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/mery', {
        templateUrl: 'views/mery.html',
        controller: 'MeryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function($httpBackend) {
    $httpBackend.whenGET(/^\/?views\//).passThrough();

    $httpBackend.whenGET(/api\/image/).respond(function() {
      return [
        200, 
        {"status":{"error":false},"page_info":{"last_page":false},"images":[{"image_url":"http://img.nailbook.jp/photo/full/4c70403e4c640114946df08e6c27dd6bc280a40d.jpg","source_url":"http://nailbook.jp/design/detail/892268","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/9f724d60873e318893724b39aace2293bce6f072.jpg","source_url":"http://nailbook.jp/design/detail/892159","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/49387a3523d9a82bbf4a4cad49d04e10ffdc293e.jpg","source_url":"http://nailbook.jp/design/detail/892056","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/133aa8357a95c426ff212855bb36b904ffbb8c42.jpg","source_url":"http://nailbook.jp/design/detail/891987","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/eef8a9a6def2ca48106b0f93dc832eb54fdb5a0d.jpg","source_url":"http://nailbook.jp/design/detail/891974","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/ca7d86c96bb94b75a2b8ce34e8709995e34b6e93.jpg","source_url":"http://nailbook.jp/design/detail/891861","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/2ea0be0f6bdb2f7df860b722ee667aedef98ff41.jpg","source_url":"http://nailbook.jp/design/detail/891753","comment":"\u304a\u5ba2\u69d8\u30cd\u30a4\u30eb(///\u03c9///)\u266a3500\u5186","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/5191b8dea354699602a807e5a81f53f68b2fd737.jpg","source_url":"http://nailbook.jp/design/detail/891650","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/95c01e3fed27e3bbfde023a8b3d2e2f4d36da487.jpg","source_url":"http://nailbook.jp/design/detail/891619","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/b1c949854c1f51bb2bdd79ffc96a5e0e185b2819.jpg","source_url":"http://nailbook.jp/design/detail/891513","comment":"D&G\u306e\u30ef\u30f3\u30d4\u30fc\u30b9\u30e2\u30c1\u30fc\u30d5\u3067\u3059( \u00b4 \u25bd ` )\uff89","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/8b69290343df53d5ce700da477fca36c2215d9bc.jpg","source_url":"http://nailbook.jp/design/detail/891501","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/b3e823f9786bb6c607e423801e5b95c61f91efbc.jpg","source_url":"http://nailbook.jp/design/detail/891500","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/009a2433fe6d581065860029bb794ab61288dbc7.jpg","source_url":"http://nailbook.jp/design/detail/891493","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/bcf47ef6ab5d2d572d84c28b7b6998a5d9248885.jpg","source_url":"http://nailbook.jp/design/detail/891477","comment":"\u308a\u307c\u30fc\u3093\u2661","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/c7e0cdb9a317900736d5c47d05764c816ce79210.jpg","source_url":"http://nailbook.jp/design/detail/891427","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/b61ad1662708a33983d16d880809ac7af7b26996.jpg","source_url":"http://nailbook.jp/design/detail/891368","comment":"\u521d\u56de\u30aa\u30d5\u8fbc\u307f\u30b9\u30ab\u30eb\u30d7\u4e00\u5f8b\u00a510800\n\u30b8\u30a7\u30eb\u4e00\u5f8b\u00a58640\u3067\u3059\u2606","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/e1c500e2118d7738bbd498a0927ab8af352cb3a2.jpg","source_url":"http://nailbook.jp/design/detail/891267","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/63cbdca28f418c51370c3d1913bb28c1f551209e.jpg","source_url":"http://nailbook.jp/design/detail/891207","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/81835b9ebc3bd3174c24b57efde0a64ccb186e34.jpg","source_url":"http://nailbook.jp/design/detail/891041","comment":"\u30eb\u30d6\u30bf\u30f3\u98a8\u30cd\u30a4\u30eb","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/503c6d7147902c97f3ea4c9d965a76ec149fddbc.jpg","source_url":"http://nailbook.jp/design/detail/891032","comment":"\u30e1\u30f3\u30ba\u30cd\u30a4\u30eb\u2b50\ufe0e\n","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/ee7918720893f4e87ab90ec49f503ec507cd3628.jpg","source_url":"http://nailbook.jp/design/detail/891008","comment":"\u30b7\u30e7\u30c3\u30ad\u30f3\u30b0\u30d4\u30f3\u30af\u00d7\u30db\u30ef\u30a4\u30c8\u306e\u304a\u82b1\u304c\u53ef\u611b\u3044","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/a699002f03d3c4d61158ecfca8dea60019efd294.jpg","source_url":"http://nailbook.jp/design/detail/890972","comment":"\u8ff7\u3063\u305f\u3089\u8d64\u3067\u3059w","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/74794e7a42081d2717aa953defae830ebbf115eb.jpg","source_url":"http://nailbook.jp/design/detail/890929","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/560d91dc669a0aa1504736c3b5d8368b8d9ce331.jpg","source_url":"http://nailbook.jp/design/detail/890913","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/0f77ac8bd39f87aac7f692775e3968d146f9537b.jpg","source_url":"http://nailbook.jp/design/detail/890864","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/2fa352c9f818a84f4fbd1e4e2102ae84f49bf7a8.jpg","source_url":"http://nailbook.jp/design/detail/890770","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/a996aca75185b89db4688efeede0b7465673caa0.jpg","source_url":"http://nailbook.jp/design/detail/890769","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/d32d9311252a0ab53c059a256a2bdfe379744e28.jpg","source_url":"http://nailbook.jp/design/detail/890715","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/5d5ce7c066f4fb96ab1688c3b53f875f5a5bac60.jpg","source_url":"http://nailbook.jp/design/detail/890705","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/6455420d60f0abfad063d87583fbf892bdbe751e.jpg","source_url":"http://nailbook.jp/design/detail/890697","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/77c30e7c7fcfcef6159ac0e94c242eed525ccbd6.jpg","source_url":"http://nailbook.jp/design/detail/890663","comment":"\u30ad\u30e3\u30e9\u30cd\u30a4\u30eb\u30e2\u30c7\u30eb\u69d8\u3067\u3059\u3002\n\u4eca\u3060\u3051\u30b1\u30a2\u8fbc\u307f5000\u5186\u3067\u3059\u266a\n","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/455337e063ec71e36cf0358ca414f1249cdccd5a.jpg","source_url":"http://nailbook.jp/design/detail/890648","comment":"\u67cf\u30cd\u30a4\u30eb\u30b5\u30ed\u30f3\u30eb\u30ba\u30a8\u30e9\n04-7137-7200\n\u30cd\u30a4\u30ea\u30b9\u30c8\u52df\u96c6\u4e2d\u2661","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/7cf1d52901627fc7063bfd6529d8484c2655dfe5.jpg","source_url":"http://nailbook.jp/design/detail/890636","comment":"\u30cd\u30a4\u30eb\u30b7\u30fc\u30eb\u81ea\u4f5c\u3057\u307e\u3057\u305f\u266a","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/1f8ad3b0ce4eebde19aa05bb3ea0657cd70e4001.jpg","source_url":"http://nailbook.jp/design/detail/890447","comment":"\u500b\u6027\u7684\u306a\u30c7\u30b6\u30a4\u30f3\u266a\u53ef\u611b\u3044\u3067\u3059\u2661\n","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/022be01a2ab05ebfeeeb1875d6f6faa82a7df1f1.jpg","source_url":"http://nailbook.jp/design/detail/890384","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/2f3856e3b79a34dba3f12310c429ba5273f40a42.jpg","source_url":"http://nailbook.jp/design/detail/890370","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/63c40cc3d79cb133fe86775205ae0206a38c47c1.jpg","source_url":"http://nailbook.jp/design/detail/890358","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/0f3f7120699c251605a7a10bcd362213ae972eba.jpg","source_url":"http://nailbook.jp/design/detail/890353","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/867f5e15e3532a0e281ed8332e583fc353478535.jpg","source_url":"http://nailbook.jp/design/detail/890347","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/7179df18090fe2495da4ce1231d65cca217d2fa0.jpg","source_url":"http://nailbook.jp/design/detail/890325","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/cac7c58925fe7c5ceaed58e0a30bbbb68fd20137.jpg","source_url":"http://nailbook.jp/design/detail/890289","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/594f2acea790e34a4391e2a7d09441283cd18915.jpg","source_url":"http://nailbook.jp/design/detail/890247","comment":"\u30b7\u30f3\u30d7\u30eb\u3067\u4e0a\u54c1\u306a\u30d5\u30ec\u30f3\u30c1\u30de\u30fc\u30d6\u30eb\u306b\u521d\u6311\u6226\u2661","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/310337a92ae702c228fd00972b58d33284da2512.jpg","source_url":"http://nailbook.jp/design/detail/890243","comment":"\u98db\u884c\u6a5f\u597d\u304d\u306a\u306e\u3067\u30e9\u30a4\u30f3\u30b9\u30c8\u30fc\u30f3\u3067\u30dd\u30c3\u30d7\u306a\u98db\u884c\u6a5f\u3092\u4f5c\u3063\u3066\u3082\u3089\u3044\u307e\u3057\u305f\u2708\ufe0e\u7247\u65b9\u306f\u5148\u751f\u3001\u7247\u65b9\u306f\u81ea\u5206\u3067\u2708\ufe0e","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/683d06f0d38983ca27f989bc10cbc54133425eb2.jpg","source_url":"http://nailbook.jp/design/detail/890238","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/0314f98451e0c4bef5fff2a0e8654fd30a33fca6.jpg","source_url":"http://nailbook.jp/design/detail/890228","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/074ab6cc3bd53eb4c1fd544650892b080b5a0d00.jpg","source_url":"http://nailbook.jp/design/detail/890205","comment":"\u4e45\u3005\u6295\u7a3f\uff01\n\u30bb\u30fc\u30e9\u30fc\u30e0\u30fc\u30f3\u98a8\u30cd\u30a4\u30eb(^^)\n\u53f3\u4e2d\u6307\u306b\u30b3\u30ba\u30df\u30c3\u30af\u30cf\u30fc\u30c8\u3001\u5de6\u4e2d\u6307\u306b\u30c6\u30a3\u30a2\u30e9\u3067\u3059\u2661\u2020","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/0363a96f25dc17a6d809ee97a8c6ab41f9b85a7d.jpg","source_url":"http://nailbook.jp/design/detail/890164","comment":"\u30ed\u30ea\u30dd\u30c3\u30d7\u306a\u4ed5\u4e0a\u304c\u308a\u2605","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/0ae353b4e7427097fc47fb98ba520ec89cd436b3.jpg","source_url":"http://nailbook.jp/design/detail/890081","comment":"\u30ec\u30aa\u30d1\u30fc\u30c9\u67c4\u3082\u30d4\u30f3\u30af\u3068\u7d44\u307f\u5408\u308f\u305b\u308b\u3068\u4e0a\u54c1\u306b\u2661","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/b182b5c64342aee08367dcd773dc4b4ca96d5b5b.jpg","source_url":"http://nailbook.jp/design/detail/890073","comment":"","collaboration":3},{"image_url":"http://img.nailbook.jp/photo/full/100b66a38f3d9f5cc12b217e0380e9abb3760809.jpg","source_url":"http://nailbook.jp/design/detail/889985","comment":"","collaboration":3}]}, 
        {}
       ];
    });

    $httpBackend.whenPOST(/api\/image/).respond(function(method, url, data, headers) {
      return [
        201,
        data,
        {}
      ]
    });
  });
