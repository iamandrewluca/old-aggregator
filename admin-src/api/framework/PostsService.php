<?php

!defined('PROD') && die('Access denied');

class PostsService
{
    public function all($post)
    {
        return R::exportAll(R::findAll('post', ' title LIKE ? ', [ '%'.$post['query'].'%']), false);
    }
}
