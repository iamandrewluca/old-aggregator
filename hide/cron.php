<?php
ini_set('max_execution_time', 300);
require_once 'config.php';
require_once $DIRNAME . '/resources/RSSResource.php';
require_once $DIRNAME . '/nucleus/utils/siren/SirenEntity.php';
require_once $DIRNAME . '/vendor/autoload.php';
require_once $DIRNAME . '/vendor/ForceCharsetPlugin.php';
global $RESOURCES;
$forceCharsetPlugin = new ForceCharsetPlugin();
$forceCharsetPlugin->setForcedCharset('utf-8');
$client = new Goutte\Client();
$client->getClient()->addSubscriber($forceCharsetPlugin);
foreach($RESOURCES as $resource){
	echo 'Fetching resources from ' . $resource['slug'] . '<br />';
	if(isset($resource['handler'])){
		$handler = $resource['handler'];
		require_once $DIRNAME . '/resources/' . $handler . '.php';
		$fetcher = new $handler($client, $resource);
	} else {
		$fetcher = new RSSResource($client, $resource);
	}
	$fetcher -> parse();
	$fetchedEntities = $fetcher->getAllEntities();
	foreach($fetchedEntities as $entity){
		if(R::findOne('post', 'permalink LIKE ?', [$entity->prop('permalink')])){
			echo "\tSkipping " . $entity->prop('permalink') . '<br />';
			continue;
		}
		$post = R::dispense('post');
		$post->title = $entity->prop('title');
		$post->permalink = $entity->prop('permalink');
		$post->source = R::enum("source:${resource['slug']}");
		$post->date = strtotime($entity->prop('date'));
		$post->lang = R::enum("lang:${resource['lang']}");
		R::store($post);
	}
}
