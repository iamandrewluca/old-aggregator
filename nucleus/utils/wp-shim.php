<?php
if(!function_exists('checked')){
	function checked($val){
		if($val){
			echo ' checked="checked"';
		}
	}
}

if(!function_exists('_e')){
	function _e($text){
		return __($text, 'whatever');
	}
}

if(!function_exists('__')){
	function __($text, $domain){
		return _($text);
	}
}