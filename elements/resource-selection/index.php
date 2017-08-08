<?php
global $DIRNAME;
require_once $DIRNAME . '/nucleus/component.php';
require_once $DIRNAME . '/nucleus/elements/switch/index.php';
require_once $DIRNAME . '/nucleus/elements/link/index.php';
class ResourceSelection extends MonstroComponent{
	public function render (){
		?>
			<form>
                <div class="row monstro-resources">
                    <div class="large-12 columns">
                        <a href="?" class="all-resources">Filtru abonamente</a>
                        <span class="monstro-hint">Selectați din lista de mai jos resursele dorite</span>
                    </div>
                </div>
				<?php foreach($this->props['resources'] as $slug => $resource){?>
					<div class="row monstro-resources">
						<div class="large-8 columns">
							<?php new MonstroLink(true, array(
								'href' => '?resource=' . $slug
								), $resource['name']);?>
						</div>
						<div class="large-4 columns">
							<?php new MonstroSwitch(true, array('checked' => $resource['selected'], 'class' => 'round'));?>
						</div>
					</div>
				<?php } ?>
			</form>

		<?php
	}
}