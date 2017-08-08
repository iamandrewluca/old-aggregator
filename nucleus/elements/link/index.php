<?php
require_once dirname(__FILE__) . '/../../component.php';
class MonstroLink extends MonstroComponent{
	public function render(){
		?>
			<a <?php $this->transferPropsTo();?>><?php $this->renderChildren();?></a>
		<?php
	}
}