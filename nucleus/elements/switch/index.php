<?php
require_once dirname(__FILE__) . '/../../component.php';
require_once dirname(__FILE__) . '/../../utils/wp-shim.php';
class MonstroSwitch extends MonstroComponent{
	public function render (){
		$this->props['class'] .= ' switch';
		?>
		<div <?php $this->transferPropsTo();?>>
			<input type="checkbox" <?php checked($this->props['checked']);?>/>
			<label></label>
		</div>
		<?php
	}
}