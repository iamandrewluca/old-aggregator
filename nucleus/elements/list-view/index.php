<?php
require_once dirname(__FILE__) . '/../../component.php';
require_once dirname(__FILE__) . '/../../utils/wp-shim.php';
require_once dirname(__FILE__) . '/../image/index.php';
require_once dirname(__FILE__) . '/../link/index.php';
require_once dirname(__FILE__) . '/../social-share/index.php';
class MonstroListView extends MonstroComponent{
	protected function hasFeatImg ($post){
		return $post->hasEntity('featured-image');
	}

	protected function getFeatImg ($post){
		if($this->hasFeatImg($post)){
			return new MonstroImage(array(
				'src' => $post->getEntityByClass('featured-image')->getLink('self'),
				'class' => 'featured-image'
			));
		}
		return '';
	}

	protected function getFeatImgBlock ($post){
		if($this->props['settings']['no-image'] || $this->hasFeatImg($post)){
			$category = $post->getEntityByClass(array('term', 'category'));
			?>
			<div class="featimg">
				<?php new MonstroLink(true, array(
					'class' => 'image',
					'href' => $post->prop("permalink"),
					'title' => '',
					'rel' => 'bookmark'
				), $this->getFeatImg($post))?>
				<div class="entry-category">
					<?php new MonstroLink(true, array(
						'href' => $category->prop('permalink')
					), $category->prop('name'));?>
				</div>
				<div class="entry-feat-overlay">
					<?php new MonstroLink(true, array(
						'href' => $post->prop("permalink")
					), '&nbsp');?>
				</div>
			</div>
			<?php
		}
	}

	protected function getArticleClasses ($post){
		$classes = $post->getClasses();
		if($this->props['settings']['no-image'] && !$this->hasFeatImg($post)){
			array_push($classes, 'no-feat-img');
		}
		return implode(' ', $classes);
	}

	protected function getCommentsNumber ($post){
		if($post->prop("commentsOpen")){
			?>
			<li>
                <span>
	                <?php new MonstroLink(true, array(
						'class' => 'comment',
		                'href' => $post->prop('permalink') . '#comments'
					), $post->prop('nrComments'));?>
                </span>
            </li>
			<?php
		}
	}

	protected function getPost ($post){
		$date = $post->getEntityByClass('date');
		$author = $post->getEntityByClass('author');
		?>
			<article class="type-post<?php echo $this->getArticleClasses($post);?>">
                <header class="entry-header meta-below">
                    <h2 class="entry-title">
	                    <?php new MonstroLink(true, array(
		                    'href' => $post->prop('permalink')
						), $post->prop('title'));?>
                    </h2>
                    <div className="entry-meta">
                        <ul>
	                        <li>
		                        <?php _e('by');?>
		                        <?php new MonstroLink(true, array(
			                        'href' => $author->getLink('self')
								), $author->prop('displayName'));?>
	                        </li>
	                        <li>
		                        <span>
			                        <?php new MonstroLink(true, array(
		                                'href' => $date->prop('permalink'),
				                        'class' => 'blog-date'
									), $date->prop('text'));?>
		                        </span>
	                        </li>
	                        <?php $this->getCommentsNumber($post);?>
                        </ul>
                    </div>
	                <?php $this->getFeatImgBlock($post);?>
                </header>
                <section class="entry-content">
                    <div class="entry-excerpt">
	                    <p><?php echo $post->prop('excerpt');?></p>
                    </div>
                </section>
                <footer class="entry-footer">
	                <?php new MonstroSocialShare(true, array(
		                'link' => $post->prop('permalink')
					));?>
	                <?php new MonstroLink(true, array(
		                'class' => 'read-more',
		                'href' => $post->prop('permalink')
                    ), __('Discover story', 'monstrotheme'));?>
                </footer>
            </article>
		<?php
	}

	protected function getPosts (){
		$posts = $this->props['resource']->getEntitiesByClass('post');
		if(count($posts)){
			foreach($posts as $post){
				$this->getPost($post);
			}
		} else {
			?>
				<div class="row">
					<div class="columns large-12">
						<h1 class="monstro-no-pots-msg">
							<?php _e('No posts found', 'monstrotheme');?>
						</h1>
					</div>
				</div>
			<?php
		}
	}

	public function render () {
		?>
			<div>
				<div class="monstro-list-view">
					<?php $this->getPosts();?>
				</div>
			</div>
		<?php
	}
}