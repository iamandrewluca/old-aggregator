<?php

define('PROD', false);

if (PROD) {
  define('HOME_URL', 'https://agregator.md/'); //TRAILING SLASH!
} else {
  // define('HOME_URL', 'http://localhost/agregator/');
  define('HOME_URL', 'http://localhost:8001/');
  header("Access-Control-Allow-Origin: *");
}

//BEGIN mysql config
define("MYSQL_HOST", "localhost");
define("MYSQL_DB", "agregator");
define("MYSQL_USER", "agregator_user");
define("MYSQL_PWD", "Efs6V6bWf2Qytjfr584Q");
//END mysql config

//BEGIN resources config
global $RESOURCES;
$RESOURCES = array(
  array(
    'slug' => 'agora',
    'name' => _('Agora'),
    'lang' => 'ro',
    'resourceURL' => 'http://agora.md/',
    'rss' => 'http://agora.md/rss/news/'
    ),
  array(
    'slug' => 'bani',
    'name' => _('Bani.md'),
    'lang' => 'ro',
    'resourceURL' => 'http://bani.md/',
    'rss' => 'http://bani.md/feed/'
    ),
  array(
    'slug' => 'curentul',
    'name' => _('Curentul'),
    'lang' => 'ro',
    'resourceURL' => 'http://curentul.md/',
    'rss' => 'http://curentul.md/feed/'
    ),
  array(
    'slug' => 'deschide',
    'name' => _('Deschide.md'),
    'lang' => 'ro',
    'resourceURL' => 'https://deschide.md/',
    'rss' => 'https://deschide.md/ro/feed/'
    ),
  array(
    'slug' => 'deutschewelle',
    'name' => _('Deutsche Welle'),
    'lang' => 'ro',
    'resourceURL' => 'http://www.dw.com/ro/focus/moldova/s-11630',
    'rss' => 'http://rss.dw.de/xml/rss-rom-moldova'
    ),
  array(
    'slug' => 'diez',
    'name' => _('#diez'),
    'lang' => 'ro',
    'resourceURL' => 'http://diez.md/',
    'rss' => 'http://diez.md/feed/'
    ),
  array(
    'slug' => 'europalibera',
    'name' => _('Europa Liberă'),
    'lang' => 'ro',
    'resourceURL' => 'https://www.europalibera.org/',
    'rss' => 'https://www.europalibera.org/api/zvmo_eo$o_'
    ),
  array(
    'slug' => 'evzmd',
    'name' => _('Evenimentul zilei'),
    'lang' => 'ro',
    'resourceURL' => 'http://www.evzmd.md/',
    'rss' => 'http://www.evzmd.md/component/k2/itemlist.feed?moduleID=173'
    ),
  array(
    'slug' => 'independent',
    'name' => _('Independent'),
    'lang' => 'ro',
    'resourceURL' => 'http://independent.md/',
    'rss' => 'http://independent.md/feed/'
    ),
  array(
    'slug' => 'jurnal',
    'name' => _('Jurnal.md'),
    'lang' => 'ro',
    'resourceURL' => 'http://jurnal.md',
    'rss' => 'http://jurnal.md/rss.xml'
    ),
  array(
    'slug' => 'moldovaorg',
    'name' => _('Moldova.org'),
    'lang' => 'ro',
    'resourceURL' => 'http://www.moldova.org/',
    'rss' => 'http://www.moldova.org/feed/'
    ),
  array(
    'slug' => 'protv',
    'name' => _('ProTV'),
    'lang' => 'ro',
    'resourceURL' => 'http://protv.md/',
    'rss' => 'http://feeds.feedburner.com/ProTv-ToateStirile'
    ),
  array(
    'slug' => 'publika',
    'name' => _('Publika'),
    'lang' => 'ro',
    'resourceURL' => 'http://publika.md',
    'rss' => 'http://rss.publika.md/stiri.xml'
    ),
  array(
    'slug' => 'radiochisinau',
    'name' => _('Radio Chișinău'),
    'lang' => 'ro',
    'resourceURL' => 'http://radiochisinau.md/',
    'rss' => 'http://radiochisinau.md/feed/'
    ),
  array(
    'slug' => 'realitatea',
    'name' => _('Realitatea'),
    'lang' => 'ro',
    'resourceURL' => 'http://www.realitatea.md/',
    'rss' => 'http://www.realitatea.md/rss/stiri.xml'
    ),
  array(
    'slug' => 'tribuna',
    'name' => _('Tribuna'),
    'lang' => 'ro',
    'resourceURL' => 'http://tribuna.md/',
    'rss' => 'http://tribuna.md/feed/'
    ),
  array(
    'slug' => 'unimedia',
    'name' => _('Unimedia'),
    'lang' => 'ro',
    'resourceURL' => 'http://unimedia.info/',
    'rss' => 'http://unimedia.info/rss/news.xml'
    ),


  array(
    'slug' => 'evzmd',
    'name' => _('Событие дня'),
    'lang' => 'ru',
    'resourceURL' => 'http://www.evzmd.md/ru/',
    'rss' => 'http://www.evzmd.md/ru/component/k2/itemlist.feed?moduleID=176'
    ),
  array(
    'slug' => 'deschide',
    'name' => _('Дескиде'),
    'lang' => 'ru',
    'resourceURL' => 'https://deschide.md/ru/',
    'rss' => 'https://deschide.md/ru/feed/'
    ),
  array(
    'slug' => 'diez',
    'name' => _('#diez на русском'),
    'lang' => 'ru',
    'resourceURL' => 'https://ru.diez.md/',
    'rss' => 'https://ru.diez.md/feed/'
    ),
//	array(
//		'slug' => 'euronews',
//		'name' => _('Euronews'),
//		'lang' => 'ru',
//      'resourceURL' => 'http://ru.euronews.com/',
//		'rss' => 'http://feeds.feedburner.com/euronews/ru/news/'
//	),
  array(
    'slug' => 'golos',
    'name' => _('Голос'),
    'lang' => 'ru',
    'resourceURL' => 'http://golos.md',
    'rss' => 'http://golos.md/feed/'
    ),
  array(
    'slug' => 'moldovaorg',
    'name' => _('Moldova.org'),
    'lang' => 'ru',
    'resourceURL' => 'http://www.moldova.org/ru/',
    'rss' => 'http://www.moldova.org/ru/feed/'
    ),
  array(
    'slug' => 'pointmd',
    'name' => _('Point.md'),
    'lang' => 'ru',
    'resourceURL' => 'http://point.md/ru/',
    'rss' => 'http://point.md/ru/rss/novosti/'
    ),
  array(
    'slug' => 'tribuna',
    'name' => _('Tribuna'),
    'lang' => 'ru',
    'resourceURL' => 'http://tribuna.md/ru/',
    'rss' => 'http://tribuna.md/ru/feed/'
    ),
  array(
    'slug' => 'vestimd',
    'name' => _('Вести'),
    'lang' => 'ru',
    'resourceURL' => 'http://vesti.md/',
    'rss' => 'http://vesti.md/rss/news.xml'
    )
  );
//END resources config

//BEGIN filters config
global $STOP_FILTERS;
$STOP_FILTERS = [
'ro' => ['SOCANT', 'ȘOCANT', 'DODON', 'Putin'],
'ru' => ['Украина', "Крым"]
];
//END filters config

//stop editing, have fun

// Resources filter
global $DIRNAME;
$DIRNAME = dirname(__FILE__) . '/..';
global $LANG;
$LANG = isset($_COOKIE['lang']) ? $_COOKIE['lang'] : 'ro';
global $LANG_RESOURCES;
$LANG_RESOURCES = array_filter($RESOURCES, function($resource){
	global $LANG;
	return $resource['lang'] == $LANG;
});
global $SELECTED_RESOURCES;
$SELECTED_RESOURCES = isset( $_COOKIE[$LANG]) ?
explode(',', $_COOKIE[$LANG]) :
array_map(function($resource){
  return $resource['slug'];
}, $LANG_RESOURCES);

array_walk($LANG_RESOURCES, function(&$resource) use($SELECTED_RESOURCES){
	$resource['selected'] = in_array($resource['slug'], $SELECTED_RESOURCES);
});

require_once $DIRNAME . '/vendor/redbean/rb.php';
R::setup('mysql:host=' . MYSQL_HOST . ';dbname=' . MYSQL_DB, MYSQL_USER, MYSQL_PWD);

if (PROD) {
  R::freeze(TRUE);
}
