<?php
global $DIRNAME;
require_once $DIRNAME . '/resources/Resource.php';
class RSSResource extends Resource{
	protected $resource;
	public function __construct($client, $resource){
		$this->resource = $resource;
		parent::__construct($client, $this->resource['rss'], 'item');
	}

	protected function parsePost( $crawler ) {
		$link = $crawler->filter('link')->first()->text();
		$postEntity = $this->addEntity(array('post'), array(
			'title' => trim($crawler->filter('title')->first()->text()),
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