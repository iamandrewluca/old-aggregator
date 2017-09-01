<?php
ini_set('display_errors', 1);
require_once 'hide/config.php';
require_once $DIRNAME . '/elements/aggregator/index.php';
require_once $DIRNAME . '/nucleus/utils/siren/SirenEntity.php';
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
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <?php if ($LANG == 'ro') {
        echo "<title>Agregator de știri</title>";
    }
    elseif ($LANG == 'ru') {
        echo "<title>Агрегатор новостей</title>";
    } ?>

    <link rel="stylesheet" href="vendor/foundation/css/foundation.min.css"/>
    <link rel="stylesheet" href="style.css"/>
    <link rel="stylesheet" href="agregator.css"/>
    <link rel="stylesheet" href="nucleus/elements/list-view/styles/style.css"/>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&amp;subset=cyrillic-ext" rel="stylesheet" />
    <script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
    <script src="vendor/foundation/js/foundation.min.js"></script>
    <script src="vendor/jquery.cookie.js"></script>
</head>
<body>
<div id="react-parent">
    <?php // new Aggregator(true, array( 'model' => $model )); ?>
</div>
<script>
    AggregatorData = {
        resources: <?php echo json_encode($LANG_RESOURCES);?>,
        resource: <?php echo json_encode($model->getData());?>,
        filters: <?php echo json_encode($model->getFilters());?>,
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
<script src="concat/frontend.js"></script>
</body>
</html>
