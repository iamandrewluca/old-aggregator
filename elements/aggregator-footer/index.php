<?php
global $DIRNAME;
require_once $DIRNAME . '/nucleus/component.php';
class AggregatorFooter extends MonstroComponent{
    public function render (){
        ?>
        <footer id="footer-container">
            <div class="row">
                <div class="large-12 columns">
                    <p class="copyright">Copyright &copy; 2014-2017. Toate drepturile rezervate.</p>
                </div>
            </div>
        </footer>
    <?php
    }
}