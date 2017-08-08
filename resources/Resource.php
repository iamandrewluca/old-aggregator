<?php
global $DIRNAME;
require_once $DIRNAME . '/nucleus/utils/siren/SirenEntity.php';
abstract class Resource extends MonstroSirenEntity{
	private $client;
	protected $url;
	protected $postSelector;
	public function __construct ($client, $url, $postSelector){
		$this->url = $url;
		$this->postSelector = $postSelector;
		$this->client = $client;
		parent::__construct(array('resource'), '/');
	}

	protected abstract function parsePost($crawler);

	public function parse(){
		$this->client->request('GET', $this->url)->filter($this->postSelector)->each(function($crawler){
			$this->parsePost($crawler);
		});
	}
}