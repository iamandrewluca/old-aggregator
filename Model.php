<?php

if (!defined('PROD')) die('Access denied');

require_once 'hide/config.php';
require_once $DIRNAME . '/nucleus/utils/siren/SirenEntity.php';
class AggregatorModel extends MonstroSirenEntity {

    protected function getResourceBySlug($id) {
        global $LANG_RESOURCES;
        foreach($LANG_RESOURCES as $resource) {
            if($id == $resource['id']) {
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

        $langId = EID("lang:$LANG");
        $POSTS_PER_PAGE = 30;
        $currentPage = isset($_GET['page']) ? (int) $_GET['page'] : 1;

        $totalPagesSQL = 'SELECT COUNT(*) FROM post WHERE source_id IN (:source_ids) AND lang_id = :lang_id';
        $totalPagesQuery = R::getCell($totalPagesSQL, [
            ':lang_id' => $langId,
            ':source_ids' => implode(',', $resources)
        ]);
        $totalPages = ceil($totalPagesQuery / $POSTS_PER_PAGE);

        $this->setProps(array(
            'postsPerPage' => $POSTS_PER_PAGE,
            'totalPages' => $totalPages,
            'currentPage' => $currentPage
        ));

        $mysqlOffset = ($currentPage - 1) * $POSTS_PER_PAGE;

        $postsSQL = 'SELECT * FROM post WHERE source_id IN (:source_ids) AND lang_id = :lang_id ORDER BY date DESC LIMIT :offset, :count';
        $postsQuery = R::getAll($postsSQL, [
            ':source_ids' => implode(',', $resources),
            ':lang_id' => $langId,
            ':offset' => $mysqlOffset,
            ':count' => $POSTS_PER_PAGE
        ]);
        $posts = R::convertToBeans('post', $postsQuery);

        foreach($posts as $post) {

            $newPost = $this->addEntity(array('post'), array(
                'id' => $post->id,
                'title' => $post->title,
                'permalink' => $post->permalink,
                'date' => strftime('%c', $post->date)
            ), $post->permalink);

            if(!$newPost) continue;

            $source = $this->getResourceBySlug(strtolower($post->source->id));

            if(!$source) continue;

            $resourceLink = '?resource=' . $source["slug"];
            $newPost -> addEntity(['term', 'category'], array(
                'id' => $source['id'],
                'name' => $source['name'],
                'slug' => $source['slug'],
                'permalink' => $resourceLink,
                'resourceURL' => $source['resource_url']
            ), $resourceLink);
        }
    }

    function getFilters()
    {
        global $LANG;
        $langId = EID("lang:$LANG");
        return R::exportAll(R::findAll('filter', ' lang_id = ? ', [$langId] ));
    }
}
