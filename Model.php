<?php

if (!defined('PROD')) die('Access denied');

require_once 'hide/config.php';
require_once $DIRNAME . '/nucleus/utils/siren/SirenEntity.php';
class AggregatorModel extends MonstroSirenEntity {

	protected function getResourceBySlug($slug) {
		global $RESOURCES;
		foreach($RESOURCES as $resource) {
			if($slug == $resource['slug']) {
				return $resource;
			}
		}
		return null;
	}

	function __construct() {

		parent::__construct(array('resources'), '/');

		global $LANG;
		$resources = array();
		if( isset($_GET['resource']) ) {
			$resources[] = $_GET['resource'];
		} else {
			global $SELECTED_RESOURCES;
			$resources = $SELECTED_RESOURCES;
		}

		$labelIds = implode(', ', array_map(function($slug) {
			return EID("source:$slug");
		}, $resources));

		$langId = EID("lang:$LANG");
		$POSTS_PER_PAGE = 30;
		$currentPage = isset($_GET['page']) ? (int) $_GET['page'] : 1;

		$totalPagesSQL = 'SELECT COUNT(*) FROM post WHERE source_id IN (:label_ids) AND lang_id = :lang_id';
		$totalPagesQuery = R::getCell($totalPagesSQL, [
			':lang_id' => $langId,
			':label_ids' => $labelIds
		]);
		$totalPages = ceil($totalPagesQuery / $POSTS_PER_PAGE);

		$this->setProps(array(
			':postsPerPage' => $POSTS_PER_PAGE,
			':totalPages' => $totalPages,
			':currentPage' => $currentPage
		));

		$mysqlOffset = ($currentPage - 1) * $POSTS_PER_PAGE;

		$postsSQL = 'SELECT * FROM post WHERE source_id IN (:label_ids) AND lang_id = :lang_id ORDER BY date DESC LIMIT :offset, :count';
		$postsQuery = R::getAll($postsSQL, [
			':label_ids' => $labelIds,
			':lang_id' => $langId,
			':offset' => $mysqlOffset,
			':count' => $POSTS_PER_PAGE
		]);
		$posts = R::convertToBeans('post', $postsQuery);

		foreach($posts as $post) {

			$newPost = $this->addEntity(array('post'), array(
				'title' => $post->title,
				'permalink' => $post->permalink,
				'date' => strftime('%c', $post->date)
			), $post->permalink);

			if(!$newPost) continue;

			$source = $this->getResourceBySlug(strtolower($post->source->name));

			if(!$source) continue;

			$resourceLink = '?resource=' . $source["slug"];
			$newPost -> addEntity(['term', 'category'], array(
				'name' => $source["name"],
				'permalink' => $resourceLink,
        'resourceURL' => $source["resourceURL"]
			), $resourceLink);
		}
	}
}
