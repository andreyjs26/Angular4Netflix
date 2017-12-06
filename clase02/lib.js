(function(w,d,u){

    let alias = 'jLite';

    let core = function(selector){
        let elements = d.querySelectorAll(selector);
        return (elements.length > 1) ? elements : elements[0] ;
    };

    Element.prototype.attr = function(attr,value){
        console.log('ya funciono');
        if(value){
            this[attr] = value;
            return this;
        }

        else
            return this[attr];

    };

    Element.prototype.css = function(css){
        for (let option in css){
            this.style[option] = css[option];
        }
        return this;
    };

    Element.prototype.hide = function(){
        this.css({'display' : 'none'});
    };

    Element.prototype.show = function(){
        this.css({'display' : 'block'});
    };

    w.$ = w[alias] = core;

})(window,document);

console.log($('p.first'));

$('a').attr('href','https://google.com');

$('p.first').css({
    backgroundColor : '#F00',
    color : 'green'
});

$('input').hide();
