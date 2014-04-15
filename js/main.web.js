function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
        	handler();
        }
        var head = document.getElementsByTagName("head")[0];
        (head || document.body).appendChild( script );
    };
    (function(){
        if(array.length!=0){
        	loader(array.shift(),arguments.callee);
        }else{
        	callback && callback();
        }
    })();
}

loadScripts([
	"http://code.jquery.com/jquery-1.10.2.min.js",
	"http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js",
   	"http://cdn.soruonline.com/js/jquery.fittext.js",
	"http://cdn.soruonline.com/js/highlight.pack.js",
	"http://cdn.soruonline.com/js/jasny-bootstrap.min.js",
	"http://cdn.soruonline.com/js/docs.min.js",
	"http://cdn.soruonline.com/js/bootstrap-maxlength.min.js",
	"http://cdn.soruonline.com/js/application.web.js"
],function(){
    console.info('All things are loaded');
});
