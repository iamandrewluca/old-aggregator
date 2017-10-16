<?php

!defined('PROD') && die('Access denied');

class SourceService
{
    public function all()
    {
        return R::exportAll(R::findAll('source'));
    }

    public function create($post)
    {
        $source = R::dispense([
            '_type' => 'source',
            'name' => $post['name'],
            'slug' => $post['slug'],
            'resource_url' => $post['resource_url'],
            'rss' => $post['rss'],
            'lang' => R::load('lang', $post['lang_id']),
        ]);

        R::store($source);

        return $source->export();
    }

    public function read($value='')
    {
        # code...
    }

    public function update($post)
    {
        $source = R::load('source', $post['id']);
        $source->name = $post['name'];
        $source->slug = $post['slug'];
        $source->resource_url = $post['resource_url'];
        $source->rss = $post['rss'];

        $lang = R::load('lang', $post['lang_id']);
        $source->lang = $lang;

        R::store($source);

        return R::export($source);
    }

    public function delete($post)
    {
        $source = R::load('source', $post['id']);
        R::trash($source);
        $response = [];
        $response['id'] = $source->id;
        $response['deleted'] = 'Source deleted';
        return $response;
    }


}
