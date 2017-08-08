<?php
require_once '../nucleus/utils/siren/SirenEntity.php';
$allResources = new MonstroSirenEntity(array('resources'), '/');

require_once '../vendor/autoload.php';
$client = new Goutte\Client();


echo json_encode($allResources->getData());