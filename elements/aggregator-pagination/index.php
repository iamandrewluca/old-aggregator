<?php
global $DIRNAME;
require_once $DIRNAME . '/vendor/autoload.php';
require_once $DIRNAME . '/nucleus/component.php';
use League\Url\UrlImmutable;
class AggregatorPagination extends MonstroComponent{
	public function render () {
		$showPages = 19;
		$half = ($showPages -1) /2;
		$start = ($this->props['currentPage'] <= $half) ? 1 : $this->props['currentPage'] - $half;
		$end = ($this->props['currentPage'] >= $this->props['totalPages'] - $half) ?
			$this->props['totalPages'] :
			$this->props['currentPage'] + $half;
		$pageNumbers = [];
		try{
			$url = UrlImmutable::createFromServer($_SERVER);
		} catch(RuntimeException $e){
			return;
		}
		?>
		<div class="monstro-pagination">
			<?php foreach(range($start, $end) as $counter) {?>
				<?php if($this->props['currentPage'] == $counter){?>
					<span class="page-numbers current"><?php echo $counter;?></span>
				<?php } else { ?>
					<a class="page-numbers" href="<?php echo $url->setQuery(['page' => $counter]);?>"><?php echo $counter;?></a>
				<?php } ?>
			<?php } ?>
		</div>
		<?php
	}
}