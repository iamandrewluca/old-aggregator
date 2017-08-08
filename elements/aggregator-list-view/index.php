<?php
global $DIRNAME;
require_once $DIRNAME . '/nucleus/elements/list-view/index.php';
require_once $DIRNAME . '/elements/aggregator-pagination/index.php';
class AggregatorListView extends MonstroListView{
	protected function getPost ($post){
		$category = $post->getEntityByClass('category');
		?>
			<article class="type-post <?php $this->getArticleClasses($post);?>">
				<header class="entry-header">
                    <h2 class="entry-title">
                        <?php new MonstroLink(true, array(
                            'href' => $post->prop('permalink')
                        ), $post->prop('title'));?>
                    </h2>
                    <?php new MonstroLink(true, array(
                        'class' => ('resource-permalink'),
                        'href' => $category->prop('permalink')
                    ), $category->prop('name'));?>
                    <div class="entry-meta">
                        <ul>
                            <li>
		                        <span>
			                        <?php new MonstroLink(true, array(
                                        'href' => $post->prop('permalink'),
                                        'class' => 'blog-date'
                                    ), $post->prop('date'));?>
		                        </span>
                            </li>
                        </ul>
                    </div>
				</header>
			</article>
		<?php
	}
    protected function getTitle (){
        global $LANG;
        if ($LANG == 'ro') {
            echo "Toate știrele";
        }
        elseif ($LANG == 'ru') {
            echo "Все новости";
        }
    }

	public function render () {
		?>
		<div>
            <div class="page-title">
                <h1><?php $this->getTitle();?></h1>
            </div>
			<div class="monstro-list-view">
				<?php $this->getPosts();?>
			</div>
			<?php new AggregatorPagination(true, array(
				'currentPage' => $this->props['resource']->prop('currentPage'),
				'totalPages' => $this->props['resource']->prop('totalPages')
			));?>
		</div>
	<?php
	}
}