class PlayerObject {
    
    constructor(pid,pplayername){
        
        this.id = pid;
        this.playername = pplayername;
        this.playershown;
        this.marker;// = pmarker;
        this.check;
        this.team = 0;
        this.teamset = 0;

        this.localplayer;
    }

    

    //spectatoricon = new LeafIcon({iconUrl: 'images/marker-icon-speclightblue.png'});
    //redteamicon = new LeafIcon({iconUrl: 'images/marker-icon-teamred.png'});
    //blueteamicon = new LeafIcon({iconUrl: 'images/marker-icon-teamblue.png'});

    spectatoricon = L.icon({
        iconUrl: 'images/marker-icon-speclightblue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        //shadowUrl: 'my-icon-shadow.png',
        //shadowSize: [68, 95],
        //shadowAnchor: [22, 94]
    });

    redteamicon = L.icon({
        iconUrl: 'images/marker-icon-teamred.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        //shadowUrl: 'my-icon-shadow.png',
        //shadowSize: [68, 95],
        //shadowAnchor: [22, 94]
    });
    redteamiconlocal = L.icon({
        iconUrl: 'images/marker-icon-teamredlocal.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        //shadowUrl: 'my-icon-shadow.png',
        //shadowSize: [68, 95],
        //shadowAnchor: [22, 94]
    });

    blueteamicon = L.icon({
        iconUrl: 'images/marker-icon-teamblue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        //shadowUrl: 'my-icon-shadow.png',
        //shadowSize: [68, 95],
        //shadowAnchor: [22, 94]
    });
    blueteamiconlocal = L.icon({
        iconUrl: 'images/marker-icon-teambluelocal.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        //shadowUrl: 'my-icon-shadow.png',
        //shadowSize: [68, 95],
        //shadowAnchor: [22, 94]
    });

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

    setteam(pteam){
        //if(this.teamset == 0){
            this.team = pteam;
            //this.teamset = 1;
        //}
    } 
    getteam(){
        return this.team;
    }
    
    setlocalplayer(plocalplayer){
        this.localplayer = plocalplayer; 
    } 
    getlocalplayer(){
        return this.localplayer;
    }

    hideplayer(map){
        if(this.marker != null){
            //this.marker.setLatLng([ -84.14293855385255, 4.353638734375012]);
            map.removeLayer(this.marker);
            this.marker = null;
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
        //only create the marker when the player has chosen a team
        //if(this.teamset == 1){
            if(locationlat == null){
                locationlat = 0;
            }
            if(locationlong == null){
                  locationlong = 0;
             }

            if(this.marker != null){

                this.marker.setLatLng([ locationlat, locationlong]);
            }
            else{
            
            
                //var user2;
                //red = 1,blue = 2
                if(this.team == 1){
                    if(this.localplayer == true){
                        var user2 = L.marker([ locationlat,locationlong],{icon: this.redteamiconlocal});
                        user2.bindPopup("<b>" + this.playername + "</b>").openPopup();

                        user2.addTo(pmap);

                        this.marker = user2;
                    }
                    else{
                        var user2 = L.marker([ locationlat,locationlong],{icon: this.redteamicon});
                        user2.bindPopup("<b>" + this.playername + "</b>").openPopup();

                        user2.addTo(pmap);

                        this.marker = user2;
                    }
                }
                if(this.team == 2){
                    if(this.localplayer == true){
                        var user2 = L.marker([ locationlat,locationlong],{icon: this.blueteamiconlocal});
                        user2.bindPopup("<b>" + this.playername + "</b>").openPopup();

                        user2.addTo(pmap);

                        this.marker = user2;
                    }
                    else{
                        var user2 = L.marker([ locationlat,locationlong],{icon: this.blueteamicon});
                        user2.bindPopup("<b>" + this.playername + "</b>").openPopup();

                        user2.addTo(pmap);

                        this.marker = user2;
                    }
                }
                

                //user2.bindPopup("<b>" + this.playername + "</b>").openPopup();

                //user2.addTo(pmap);

                //this.marker = user2;

            
            }
        //}
       
    }
}