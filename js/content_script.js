$(function() {
     
    var TRange=null;
    var words = [ "Vingadores", "Avengers", "ultimato", "endgame", "thanos", "homem", "capitão", "captã", "marvel", "américa", "ferro", "rocket", "nebulosa", "maquina", "combate", "thor" ];      

    if (parseInt(navigator.appVersion) < 4) return;

    var haveSpoiler;
    if (window.find) {

        // para navegadores q possuem window.find

        words.forEach(word => {
            if(self.find(word) || self.find(word.toLowerCase()) || self.find(word.toLocaleLowerCase) || self.find(word.toLocaleUpperCase())){
               haveSpoiler = true; 
               return;
            }
        });

        if (!haveSpoiler) {

            words.forEach(word => {
                if(self.find(word,0,1) || self.find(word.toLowerCase(),0,1) || self.find(word.toLocaleLowerCase(),0,1) || self.find(word.toLocaleUpperCase(),0,1)){
                   haveSpoiler = true; 
                   return;
                }

                while (self.find(str,0,1)) continue;
            });
            
        }

        else if (navigator.appName.indexOf("Microsoft")!=-1) {

            // IE code
        
            if (TRange!=null) {

                TRange.collapse(false);

                words.forEach(word => {

                    if(TRange.findText(word,0,1) || TRange.findText(word.toLowerCase(),0,1) || TRange.findText(word.toLocaleLowerCase(),0,1) || TRange.findText(word.toLocaleUpperCase(),0,1)){
                       haveSpoiler = true; 
                       return;
                    }
    
                });

                if (haveSpoiler){
                    alert("Achou");
                    TRange.select();
                } 
            }
            if (TRange == null || haveSpoiler == 0) {
                TRange = self.document.body.createTextRange();

                words.forEach(word => {
                    if(TRange.findText(word,0,1) || TRange.findText(word.toLowerCase(),0,1) || TRange.findText(word.toLocaleLowerCase(),0,1) || TRange.findText(word.toLocaleUpperCase(),0,1)){
                        haveSpoiler = true; 
                        return;
                    }
                })

                if (haveSpoiler){
                    alert("Achou"); 
                    TRange.select();
                } 
            }
        }
        if (!haveSpoiler){
            alert ("Esta página não possui Spoliers, pode continuar!");

        }
        if(haveSpoiler){
            alert ("Opaa! Possivelmente está página possui spoliers, prossiga por sua conta em risco...");

        }

        return;       
    }

});

