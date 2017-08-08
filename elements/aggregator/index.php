<?php
global $DIRNAME;
require_once $DIRNAME . '/nucleus/component.php';
require_once $DIRNAME . '/elements/resource-selection/index.php';
require_once $DIRNAME . '/elements/aggregator-list-view/index.php';
require_once $DIRNAME . '/elements/aggregator-header/index.php';
require_once $DIRNAME . '/elements/aggregator-footer/index.php';
class Aggregator extends MonstroComponent{
	public function render (){
		global $LANG_RESOURCES, $LANG;
		?>
		<div id="wrapper">
			<?php new AggregatorHeader(true);?>
			<section id="main">
				<div class="main-container delimited shadow withbg">
					<div class="row">
						<div class="large-9 columns content-left">
                            <?php new AggregatorListView(true, array(
                                'resource' => $this->props['model'],
                                'settings' => array(
                                    'no-image' => true
                                )
                            ));?>
						</div>
						<div class="large-3 columns sidebar-right">
                            <?php new ResourceSelection(true, array(
                                'resources' => $LANG_RESOURCES,
                                'lang' => $LANG
                            ));?>
						</div>
					</div>
				</div>
			</section>
            <?php new AggregatorFooter(true);?>
		</div>
	<?php
	}
}