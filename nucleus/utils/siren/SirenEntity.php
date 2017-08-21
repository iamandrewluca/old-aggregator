<?php
class MonstroSirenEntity {
	
    private $class = array();
    private $links = array();
    private $entities = array();
    private $entitiesLinks = array();
    private $props = array();

    public function __construct($class, $selfLink) {
        $this->class = $class;
        $this->addLink(array('self'), $selfLink);
    }

    public function addLink($rel, $href) {
        $this->links[] = array(
            'rel' => $rel,
            'href' => $href
        );
    }

    public function getLink($rel) {
	    $wrappedRel = is_array($rel) ? $rel : array($rel);
	    foreach($wrappedRel as $rel){
		    foreach($this->links as $link){
			    if(in_array($rel, $link['rel'])){
				    return $link['href'];
			    }
		    }
	    }
	    return null;
    }

    public function setProps($props) {
        $this->props = $props;
    }

    public function getData() {
	    $data = array(
		    'class' => $this->class
	    );
	    if(count($this->props)){
		    $data['properties'] = $this->props;
	    }
	    if(count($this->links)){
		    $data['links'] = $this->links;
	    }
	    if(count($this->entities)){
		    $data['entities'] = array();
		    foreach($this->entities as $entity){
			    $data['entities'][] = $entity->getData();
		    }
	    }

        return $data;
    }

	public function addEntity($a, $data = null, $link = null) {
		if($a instanceof MonstroSirenEntity){
			$newEntity = $a;
		} else {
			$classes = $a;
			$newEntity = new MonstroSirenEntity($classes, $link);
			if($data){
				$newEntity -> setProps($data);
			}
		}
		$entityLink = $link ? $link : $newEntity->getLink('self');
		if(!in_array($entityLink, $this->entitiesLinks)){
			$this->entities[] = $newEntity;
			$this->entitiesLinks[] = $entityLink;
			return $newEntity;
		}
		return false;
	}

	public function addEntities($entities) {
		foreach($entities as $entity){
			$this->addEntity($entity);
		}
	}

	public function is () {
		$arguments = func_get_args();
		if(count($arguments) > 1){
			$accumulator = false;
			foreach($arguments as $argument){
				$accumulator = $accumulator || $this->is($argument);
			}
			return $accumulator;
		}
		$class = array_shift($arguments);
		$wrappedClass = is_array($class) ? $class : array($class);
		foreach($wrappedClass as $class){
			if(!in_array($class, $this->class)){
				return false;
			}
		}
		return true;
	}

	public function getEntitiesByClass ($class) {
		$result = array();
		foreach($this->entities as $entity){
			if($entity->is($class)){
				$result[] = $entity;
			}
		}
		return $result;
	}

	public function getEntityByClass ($class) {
		foreach($this->entities as $entity){
			if($entity->is($class)){
				return $entity;
			}
		}
		return null;
	}

	public function hasEntity($class) {
		foreach($this->entities as $entity) {
			if($entity->is($class)){
				return true;
			}
		}
		return false;
	}

	public function getAllEntities() {
		return $this->entities;
	}

	public function getClasses() {
		return $this->class;
	}

	public function prop($slug) {
		if(isset($this->props[$slug])){
			return $this->props[$slug];
		} else {
			return null;
		}
	}
}