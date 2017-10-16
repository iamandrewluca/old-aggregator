<?php

!defined('PROD') && die('Access denied');

class TopicsService
{
    public function all()
    {
        return R::exportAll(R::findAll('topic'), true);
    }

    public function create($post)
    {
        $topic = R::dispense([
            '_type' => 'topic',
            'post' => R::load('post', $post['post_id']),
        ]);

        R::store($topic);

        return $topic->export(false, true);
    }

    public function delete($post)
    {
        $topic = R::load('topic', $post['id']);
        R::trash($topic);
        $response = [];
        $response['id'] = $topic->id;
        $response['deleted'] = 'Topic deleted';
        return $response;
    }


}
