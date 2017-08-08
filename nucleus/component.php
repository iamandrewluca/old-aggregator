<?php
abstract class MonstroComponent{
	private function makeAttrFromProp($key, $value){
		return "$key=\"$value\"";
	}

	protected function transferPropsTo (){
		echo implode(' ', array_map(array($this, 'makeAttrFromProp'), array_keys($this->props), $this->props));
	}

	protected function renderChildren (){
		foreach($this->children as $child){
			if(is_object($child)){
				$child->render();
			} else {
				echo $child;
			}
		}
	}

	public function __construct(){
		$args = func_get_args();
		$renderImmediately = false;
		$firstArg = array_shift($args);
		if(true === $firstArg){
			$renderImmediately = $firstArg;
			$this->props = array_shift($args);
		} else {
			$this->props = $firstArg;
		}
		$this->children = $args;
		if($renderImmediately){
			$this->render();
		}
	}

	abstract function render ();
}