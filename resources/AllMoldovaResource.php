<?php
require_once $DIRNAME . '/resources/RSSResource.php';
class AllMoldovaResource extends RSSResource{
	protected static $URL = 'http://www.allmoldova.com/news';
	protected static $POST_SELECTOR = 'ul.news_group-list>li';
	public function __construct($client, $resource){
		parent::__construct($client, $resource);
	}

	protected function parsePost( $crawler ) {
		$targetLang = $this->resource['lang'];
		$link = $crawler->filter('link')->first()->text();
		$title = trim($crawler->filter('title')->first()->text());
		if(strpos($title, '(Română)') !== false){
			$actualLang = 'ro';
			$title = str_replace('(Română)', '', $title);
		} else {
			$actualLang = 'ru';
		}
		if($targetLang != $actualLang) return;
		$postEntity = $this->addEntity(array('post'), array(
			'title' => $title,
			'permalink' => $link,
			'date' => $crawler->filterXPath('//pubDate')->first()->text()
		), $link);
		if(!$postEntity) return;
		$resourceLink = '?resource' . $this->resource['slug'];
		$postEntity -> addEntity(array('term', 'category'), array(
			'name' => $this->resource['name'],
			'permalink' => $resourceLink
		), $resourceLink);
	}
}