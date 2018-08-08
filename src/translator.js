var translator = {
    url : "https://translate.googleapis.com/translate_a/single?client=gtx&dt=t&sl=auto&tl=en&q=",
    type : 'get',
    translate : function(str){
        return $.ajax({
            url: this.url + str,
            type: this.type,           
        });
    }        
};