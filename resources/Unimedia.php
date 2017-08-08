<?php
require_once 'resources/Resource.php';
class UnimediaResource extends Resource{
	private $counter = 0;
	protected static $URL = 'http://unimedia.info/rss/news.xml';
	protected static $POST_SELECTOR = 'item';
	function __construct ($client){
		parent:: __construct($client);
	}

	public function parsePost ($crawler) {
		$postEntity = $this->addEntity(array('post'), array(
			'title' => trim($crawler->filter('title')->first()->text()),
			'permalink' => $crawler->filter('link')->first()->text(),
			'description' => $crawler->filter('encoded')->first()->text()
		), '/post/protv' . $this->counter++);
		$postEntity -> addEntity(array('term', 'category'), array(
			'name' => 'unimedia',
			'permalink' => '?resource=unimedia'
		), '?resource=unimedia');
		$postEntity->addEntity(array('date'), array(
			'text' => 'last thursday',
			'permalink' => '/date'
		), '/post/protv' . $this->counter++ . '/date');
	}
}