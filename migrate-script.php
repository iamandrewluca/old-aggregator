<?php
ini_set('display_errors', 1);
require_once 'hide/config.php';

global $RESOURCES;

function escape($value) {
  return preg_replace( '/\W+/', '_', strtoupper( trim( $value ) ) );
}

foreach ($RESOURCES as $RESOURCE) {

  $lang = R::findOne('lang', 'name = ?', [ escape($RESOURCE['lang']) ]);

  $source = R::findOne( 'source', ' slug = ? AND lang_id = ?', [
    $RESOURCE['slug'],
    $lang->id
  ]);

  if ($source) {
    echo 'Already migrated ' . $RESOURCE['name'] . ', ' . $RESOURCE['lang'] . '<br/>' .
      'With  ID: ' . $source->id . '<br/><br/>';
    continue;
  }

  $source = R::findOne( 'source', ' name = ? ', [ escape($RESOURCE['slug']) ]);

  if (!$source || ($source && $source->lang_id)) {
    $source = R::dispense([
      '_type' => 'source',
      'name' => $RESOURCE['name'],
      'slug' => $RESOURCE['slug'],
      'resource_url' => $RESOURCE['resourceURL'],
      'rss' => $RESOURCE['rss'],
      'lang' => $lang,
    ]);
    $source = R::store($source);

    echo 'Adding new source ' . $RESOURCE['name'] . ', ' . $RESOURCE['lang'] . '<br/>' .
          'With  ID: ' . $source . '<br/><br/>';
    continue;
  }

  $source->name = $RESOURCE['name'];
  $source->slug = $RESOURCE['slug'];
  $source->resource_url = $RESOURCE['resourceURL'];
  $source->rss = $RESOURCE['rss'];
  $source->lang = $lang;

  $source = R::store($source);

  echo 'Updating old source ' . $RESOURCE['name'] . ', ' . $RESOURCE['lang'] . '<br/>' .
      'With  ID: ' . $source . '<br/><br/>';
}
