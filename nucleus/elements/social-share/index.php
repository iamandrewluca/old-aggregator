<?php
require_once dirname(__FILE__) . '/../../component.php';
require_once dirname(__FILE__) . '/../link/index.php';
class MonstroSocialShare extends MonstroComponent{
	public function render (){
		$encodedLink = urlencode($this->props['link']);
		?>
		<div class="entry-share">
			<div class="socialicons">
				<ul class="monstro-social">
					<li>
						<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo $encodedLink;?>" class="fb" rel="nofollow" target="_blank">
							<i class="icon-facebook"></i>
						</a>
					</li>
					<li>
						<a href="https://plus.google.com/share?url=<?php echo $encodedLink;?>" class="fb" rel="nofollow" target="_blank">
							<i class="icon-gplus"></i>
						</a>
					</li>
					<li>
						<a href="https://twitter.com/intent/tweet?url=<?php echo $encodedLink;?>" class="fb" rel="nofollow" target="_blank">
							<i class="icon-twitter"></i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	<?php
	}
}