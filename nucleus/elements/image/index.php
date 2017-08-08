<?php
require_once dirname(__FILE__) . '/../../component.php';
class MonstroImage extends MonstroComponent{
	public function render (){
		?>
			<img <?php $this->transferPropsTo();?>/>
		<?php
	}
}