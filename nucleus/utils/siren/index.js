var parseSiren = module.exports = function(raw){
    var instance = jQuery.extend(true, {}, raw);
    var props = jQuery.extend(true, {}, instance.properties);
    if('undefined' != typeof instance.entities){
        instance.entities = instance.entities.map(parseSiren);
    } else {
        instance.entities = [];
    }
    return {
        getClasses: function(){
            return instance['class'].slice(0);
        },

        is: function(_class){
            if(arguments.length > 1){
                var accumulator = false;
                for(var counter = 0; counter < arguments.length; counter++){
                    accumulator = accumulator || arguments.callee(arguments[counter]);
                }
                return accumulator;
            }
            var wrappedClass = (Array.isArray(_class) ? _class : [_class]);
            for(var index in wrappedClass){
                if(instance['class'].indexOf(wrappedClass[index]) == -1){
                    return false;
                }
            }
            return true;
        },

        getEntitiesByClass: function(_class){
            return instance.entities.filter(function(entity){
                return entity.is(_class);
            });
        },

        getEntityByClass: function(){
            for(var index in instance.entities){
                if(instance.entities[index].is.apply(null, arguments)){
                    return instance.entities[index];
                }
            }
        },

        getAllEntities: function(){
            return instance.entities.slice();
        },

        getEntityAt: function(index){
            return instance.entities[index];
        },

        hasEntity: function(_class){
            for(var index in instance.entities){
                if(instance.entities[index].is(_class)){
                    return true;
                }
            }
            return false;
        },

        getLink: function(_rel){
            var wrappedRel = (Array.isArray(_rel) ? _rel : [_rel]);
            for(counter in wrappedRel){
                var rel = wrappedRel[counter];
                for(var index in instance.links){
                    if(instance.links[index].rel.indexOf(rel) > -1){
                        return instance.links[index].href;
                    }
                }
            }
        },

        getProps: function(){
            return props;
        },

        prop: function(key){
            return props[key]
        },

        updateProps: function(delta){
            instance.properties = jQuery.extend(true, instance.properties, delta);
            props = jQuery.extend(true, {}, instance.properties);
        },

        applyToProps: function(cb){
            props = cb(props);
        }
    };
};