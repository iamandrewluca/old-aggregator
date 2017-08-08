<?php
$data = [];
require_once 'vendor/autoload.php';
$client = new Goutte\Client();


require_once 'resources/ProTV.php';
$resource = new ProTVResource($client);
$data += $resource->parse();

require_once 'resources/Publika.php';
$resource = new PublikaResource($client);
$data += $resource->parse();

header('Content-Type: text/html; charset=utf-8');
var_dump($data);