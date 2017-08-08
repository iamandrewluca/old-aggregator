<?php
global $DIRNAME;
require_once $DIRNAME . '/nucleus/component.php';
class AggregatorHeader extends MonstroComponent{
    protected function isActive($lang){
        echo $this->props['lang'] == $lang ? ' active' : '';
    }
	public function render (){
		?>
			<header id="header-container" class="vertical-align">
				<div class="row">
					<div class="large-9 columns">
						<h1 class="logo">
							<a href="?">
                                <?php
                                    global $LANG;
                                    if ($LANG == 'ro') {
                                        echo "Agregator de știri";
                                    }
                                    elseif ($LANG == 'ru') {
                                        echo "Агрегатор новостей";
                                    }
                                ?>
                            </a>
						</h1>
					</div>
                    <div class="large-3 columns">
                        <ul class="language-switcher">
                            <li class="lang-ro<?php $this->isActive('ro');?>">
                                <a href="javascript:void(0);"><?php echo _("Română");?></a>
                            </li>
                            <li class="lang-ru<?php $this->isActive('ru');?>">
                                <a href="javascript:void(0);"><?php echo _("Русский");?></a>
                            </li>
                        </ul>
					</div>
				</div>
			</header>
		<?php
	}
}