<?php
require_once 'hide/config.php';
//require_once $DIRNAME . '/elements/aggregator/index.php';
require_once $DIRNAME . '/Model.php';
global $LANG_RESOURCES, $LANG;
$model = new AggregatorModel();
if(isset($_GET['monstro-api']) && 'json' === $_GET['monstro-api'] && isset($_GET['data'])) {
    switch ($_GET['data']) {
        case 'resource':
            $data = $model->getData();
            break;
        case 'resources':
            $data = $LANG_RESOURCES;
            break;
        case 'filters':
            $data = $model->getFilters();
            break;
        default:
            $data = null;
    }

    exit(json_encode($data));
}

if ($LANG === 'ru') {
    $title =  "Агрегатор новостей";
} else {
    $title =  "Agregator de știri";
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title><?php echo $title; ?></title>

    <link rel="stylesheet" href="vendor/foundation/css/foundation.min.css"/>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="agregator.css"/>
    <link rel="stylesheet" href="nucleus/elements/list-view/styles/style.css"/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=cyrillic-ext" />
</head>
<body>

<div id="react-parent"></div>

<script>
    AggregatorData = {
        resources: <?php echo json_encode($LANG_RESOURCES);?>,
        resource: <?php echo json_encode($model->getData());?>,
        filters: <?php echo json_encode($model->getFilters());?>,
        topics: <?php echo json_encode($model->getTopics());?>,
        lang: '<?php echo $LANG;?>',
        config: {
            homeUrl: '<?php echo HOME_URL;?>'
        },
        months: {
            "ro": [
                "Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
            ],
            "ru": [
                "января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"
            ]
        }
    }
</script>
<script async defer src="vendor/jquery-3.2.1.min.js"></script>
<script async defer src="vendor/foundation/js/foundation.min.js"></script>
<script async defer src="vendor/jquery.cookie.js"></script>
<script async defer src="concat/frontend.js"></script>

</body>
</html>
