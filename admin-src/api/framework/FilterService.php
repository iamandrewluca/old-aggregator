<?php

!defined('PROD') && die('Access denied');

class FilterService
{
    public function all()
    {
        return R::exportAll(R::findAll('filter'), true);
    }

    public function create($post)
    {
        $filter = R::dispense([
            '_type' => 'filter',
            'title' => $post['title'],
            'lang' => R::load('lang', $post['lang_id']),
        ]);

        R::store($filter);

        return $filter->export(false, true);
    }

    public function delete($post)
    {
        $filter = R::load('filter', $post['id']);
        R::trash($filter);
        $response = [];
        $response['id'] = $filter->id;
        $response['deleted'] = 'Filter deleted';
        return $response;
    }


}
