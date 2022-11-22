class PlayerObject {
    
    constructor(pid,pplayername){
        
        this.id = pid;
        this.playername = pplayername;
        this.playershown;
        this.marker;// = pmarker;
        this.check;
    }

    setid(pid){
        this.id = pid;
    } 
    getid(){
        return this.id;
    }

    setplayername(pplayername){
        this.playername = pplayername;
    } 
    getplayername(){
        return this.playername;
    }

    setplayershown(pplayershown){
        this.playershown = pplayershown;
    } 
    getplayershown(){
        return this.playershown;
    }
    
    setmarker(pmarker){
        this.marker = pmarker;
    } 
    getmarker(){
        return this.marker;
    }

    resetcheck(){
        this.check = 0;
    }

    setcheck(){
        if(this.check == null){
            this.check = 0;
        }
        this.check += 1;
    } 
    getcheck(){
        return this.check;
    }
    

    hideplayer(map){
        if(this.marker != null){
            //this.marker.setLatLng([ -84.14293855385255, 4.353638734375012]);
            map.removeLayer(this.marker);
        }
    }
/*
    setlocationnew(pmap, location){

        var location2 = location.replace('[', '');
              var location3 = location2.replace(']', '');
              var location4 = location3.split(',');

        var user2 = L.marker([location4[0], location4[1]]);

        user2.bindPopup("<b>" + this.playername + "</b>").openPopup();

        user2.addTo(pmap);

        this.marker = user2;
    }
*/
    setlocation(pmap ,locationlat, locationlong){
        if(locationlat == null){
            locationlat = 0;
        }
        if(locationlong == null){
            locationlong = 0;
        }

        if(this.marker != null){
        

            //var location2 = location.replace('[', '');
            //var location3 = location2.replace(']', '');
            //var location4 = location3.split(',');

            this.marker.setLatLng([ locationlat, locationlong]);
        }
        else{
            //var location2 = location.replace('[', '');
            //var location3 = location2.replace(']', '');
            //var location4 = location3.split(',');
            
            var user2 = L.marker([ locationlat,locationlong]);

            user2.bindPopup("<b>" + this.playername + "</b>").openPopup();

            user2.addTo(pmap);

            this.marker = user2;
        }
       
    }
}