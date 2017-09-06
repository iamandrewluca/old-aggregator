<?php

require_once '../hide/config.php';
require_once '../hide/require_auth.php';

if (PROD) {
  require_auth();
}

if (isset($_GET['controller']) && isset($_GET['action'])) {

    $controller = $_GET['controller'];

    switch ($controller) {
        case 'source':
            require_once './framework/SourceService.php';
            $service = new SourceService();
            break;
        case 'filter':
            require_once './framework/FilterService.php';
            $service = new FilterService();
            break;
        case 'topics':
            require_once './framework/TopicsService.php';
            $service = new TopicsService();
            break;
        case 'posts':
            require_once './framework/PostsService.php';
            $service = new PostsService();
            break;
        default:
            echo 'Controller not defined.';
            return;
    }

    $action = $_GET['action'];
    $hasMethod = method_exists($service, $action);

    if ($hasMethod) {
        echo json_encode($service->$action($_POST));
        return;
    } else {
        echo 'Action not defined.';
        return;
    }

} else {
    echo 'Route not defined.';
    return;
}
