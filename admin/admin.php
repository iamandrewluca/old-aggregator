<?php

require_once '../hide/config.php';
require_once '../hide/require_auth.php';

if (PROD) {
  require_auth();
}

if (isset($_GET['action'])) {

  require_once './framework/SourceService.php';

  $sourceService = new SourceService();

  switch ($_GET['action']) {
    case 'add':
      echo json_encode($sourceService->create($_POST));
      break;
    case 'update':
      echo json_encode($sourceService->update($_POST));
      break;
    case 'delete':
      echo json_encode($sourceService->delete($_POST));
      break;
    default:
      echo json_encode($sourceService->all());
  }
}
