$(function() {
     
var TRange=null;
var str = "Vingadores";      
        if (parseInt(navigator.appVersion)<4) return;
        var strFound;
        if (window.find) {

        // para navegadores q possuem window.find

        strFound=self.find(str);
        if (!strFound) {
        strFound=self.find(str,0,1);
        while (self.find(str,0,1)) continue;
        }
        else if (navigator.appName.indexOf("Microsoft")!=-1) {

            // IE code
        
            if (TRange!=null) {
            TRange.collapse(false);
            strFound=TRange.findText(str);
            if (strFound){
                alert("Achou");
                TRange.select();
            } 
            }
            if (TRange==null || strFound==0) {
            TRange=self.document.body.createTextRange();
            strFound=TRange.findText(str);
            if (strFound){
                alert("Achou"); 
                TRange.select();
            } 
            }
        }
        if (!strFound){
            alert ("Esta página não possui Spoliers, pode continuar!")

        }
        if(strFound){
            alert ("Opaa! Está página possui Spoliers, feche o quanto antes!")

        }

        return;       
        }

});

