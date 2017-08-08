<?php
require_once 'hide/config.php';
require_once $DIRNAME . '/nucleus/utils/siren/SirenEntity.php';
class AggregatorModel extends MonstroSirenEntity{
	protected function getResourceNameBySlug($slug){
		global $RESOURCES;
		foreach($RESOURCES as $resource){
			if($slug == $resource['slug']){
				return $resource['name'];
			}
		}
		return 'Unknown';
	}

    protected function getResourceURLBySlug($slug){
        global $RESOURCES;
        foreach($RESOURCES as $resource){
            if($slug == $resource['slug']){
                return $resource['resourceURL'];
            }
        }
        return 'Unknown';
    }

	function __construct(){
		parent::__construct(array('resources'), '/');
		global $LANG;
		$resources = array();
		if(isset($_GET['resource'])){
			$resources[] = $_GET['resource'];
		} else {
			global $SELECTED_RESOURCES;
			$resources = $SELECTED_RESOURCES;
		}
		$labelIds = implode(', ', array_map(function($slug){
			return EID("source:$slug");
		}, $resources));
		$langId = EID("lang:$LANG");
		$POSTS_PER_PAGE = 30;
		$currentPage = isset($_GET['page']) ? (int) $_GET['page'] : 1;
		$totalPages = ceil(R::getCell("SELECT COUNT(*) FROM post WHERE source_id IN ($labelIds) AND lang_id = $langId") / $POSTS_PER_PAGE);
		$this->setProps(array(
			'postsPerPage' => $POSTS_PER_PAGE,
			'totalPages' => $totalPages,
			'currentPage' => $currentPage
		));
		$mysqlOffset = ($currentPage - 1) * $POSTS_PER_PAGE;
		$query = R::getAll("SELECT * FROM post WHERE source_id IN ($labelIds) AND lang_id = $langId ORDER BY date DESC LIMIT $mysqlOffset, $POSTS_PER_PAGE");
		$posts = R::convertToBeans('post', $query);
		foreach($posts as $post){
			$newPost = $this->addEntity(array('post'), array(
				'title' => $post->title,
				'permalink' => $post->permalink,
				'date' => strftime('%c', $post->date)
			), $post->permalink);
			if(!$newPost) continue;
			$source = strtolower($post->source->name);
			$resourceLink = '?resource=' . $source;
			$newPost -> addEntity(['term', 'category'], array(
				'name' => $this->getResourceNameBySlug($source),
				'permalink' => $resourceLink,
                'resourceURL' => $this->getResourceURLBySlug($source)

			), $resourceLink);
		}
	}
}