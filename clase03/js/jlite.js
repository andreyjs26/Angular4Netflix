// -- Librería jLite
(function(w,d,u){

    let alias = 'jLite';

    let core = function(selector){
        let elements = d.querySelectorAll(selector);
        return (elements.length > 1) ? elements : elements[0] ;
    };

    let methods = {};

    // METHODS $().method()

    methods.attr = function(attr,value){
        if(value){
            this[attr] = value;
            return this;
        }

        else
            return this[attr];

    };

    methods.css = function(css){
        for (let option in css){
            this.style[option] = css[option];
        }
        return this;
    };

    methods.hide = function(){
        this.css({'display' : 'none'});
        return this;
    };

    methods.show = function(){
        this.css({'display' : 'block'});
        return this;
    };

    methods.addClass = function(className){
        this.classList.add(className);
        return this;
    };
    methods.removeClass = function(className){
        this.classList.remove(className);
        return this;
    };
    methods.hasClass = function(className){
        return this.classList.contains(className);
    };

    methods.on = function(event,callback){
        this.addEventListener(event,callback);
        return this;
    };

    methods.find = function(selector){
        let elements = this.querySelectorAll(selector);
        return (elements.length > 1) ? elements : elements[0] ;
    };

    //reuse prototype assigning object with methods
    Element.prototype = Object.assign(Element.prototype,methods);

    for (let method in methods){
        NodeList.prototype[method] = function(...args){
            this.forEach(function(el){
                el[method].apply(el,args);
            });
            return this;
        };
    }

    w.$ = w[alias] = core;

    //when all elements dom are ready
    core.ready = function(callback){
        w.addEventListener('load',callback);
    };


	// AJAX $.ajax()

    // DATA-BINDING $.databinding('ng')
    core.$scope = {};

    core.databinding = function(tag){

        function updateScope(property,value){
            $(`.${tag}-${property}`).forEach(function(ele){
                ele.innerHTML = value;
                ele.value = value;
            });
            core.$scope[`tmp_${property}`] = value;
        }

        let elements = core(`[class^="${tag}-"]`);

        elements.forEach(function(element){
            let tagVar = element.className.split('-')[1];

            if (!core.$scope.hasOwnProperty(tagVar)){
                Object.defineProperty(core.$scope,tagVar,{
                    get: function(){
                        return this[`tmp_${tagVar}`];
                    },
                    set: function(val){
                        updateScope(tagVar,val);
                        this[`tmp_${tagVar}`] = val;
                    }
                });
            }

            element.on('keyup',function(){
                updateScope(tagVar,this.value);
            });

        });
    };



})(window,document);




//console.log($('p.first'));

/*$('a').attr('href','https://google.com');

$('p.first').css({
    backgroundColor : '#F00',
    color : 'green'
});

$('input').hide();*/
