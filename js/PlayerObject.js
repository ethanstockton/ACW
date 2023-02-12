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

        this.health = 0;
        this.class = 0;

        //this.healthbargreen;
        //this.healthbargrey;
        //this.healthbarred;
        //this.healthbarredd;

        this.healthbargreenmarker = null;
        this.healthbargreymarker = null;
        this.healthbarredmarker = null;
        

        this.greymarker = null;

        this.playernameplayer;

        

    }

    /*
    greyicon = L.icon({
        iconUrl: 'images/marker-icon-grey.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        
    });
    greyiconlocal = L.icon({
        iconUrl: 'images/marker-icon-grey-local.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        
    });
*/
    redteamicon = L.icon({
        iconUrl: 'images/marker-icon-teamred.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        
    });
    redteamiconlocal = L.icon({
        iconUrl: 'images/marker-icon-teamredlocal.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        
    });

    blueteamicon = L.icon({
        iconUrl: 'images/marker-icon-teamblue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        
    });
    blueteamiconlocal = L.icon({
        iconUrl: 'images/marker-icon-teambluelocal.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        
    });


    
    //have a icon for each 10% of health, so when at 84%, it would show 80%

    //use a polygon rectangle
    //maybe have the healthbar change size and anchor so that it looks like it is going down, 
    //this can be done for each player,
    //also maybe use the same idea for a player name tag(also maybe have a toggle for it so that it can be turned off)
    //also maybe have the player name shown in a different colour so that it can be seen more easily.

    


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

    sethealth(phealth){
        
            this.health = phealth;
           
    } 
    gethealth(){
        return this.health;
    }

    setclass(pclass){
        
        this.class = pclass;
       } 
getclass(){
    return this.class;
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

        if(this.healthbarredmarker != null){
            map.removeLayer(this.healthbarredmarker);
            this.healthbarredmarker = null;
        }

        if(this.healthbargreenmarker != null){
            map.removeLayer(this.healthbargreenmarker);
            this.healthbargreenmarker = null;
        }

        if(this.healthbargreymarker != null){
            map.removeLayer(this.healthbargreymarker);
            this.healthbargreymarker = null;
        }

        if(this.greymarker != null){
            map.removeLayer(this.greymarker);
            this.greymarker = null;
        }
        
        if(this.playernameplayer != null){
            map.removeLayer(this.playernameplayer);
            this.playernameplayer = null;
        }

   
            
    }


    //have the health bar be multiple icons that when they change have the icon be switched out for a different icon
    //also needs to be updated to the location of the player when the player moves
    //have an offset for it, so that it shows above the player icon

    onClick(e){
       
        
            //set this as the target for the local players abilitys,
            //call a function on the index.html, and pass this player id through
        
            console.log("Player Clicked on: Player" + e.target.Id);
            setplayerabilitytarget(e.target.Id);
    }


    setlocation(pmap ,locationlat, locationlong){
        
            if(locationlat == null){
                locationlat = 0;
            }
            if(locationlong == null){
                  locationlong = 0;
             }

             //maybe split these out into seperate marker checks

             //marker 
            if(this.marker != null){

                this.marker.setLatLng([ locationlat, locationlong]);

            }
            else{
            
            
                //red = 1,blue = 2
                if(this.team == 1){
                    if(this.localplayer == true){
                        var user2 = L.marker([ locationlat,locationlong],{icon: this.redteamiconlocal});
                        //user2.bindPopup("<b>" + this.playername + "</b>").openPopup();

                        user2.addTo(pmap);

                        this.marker = user2;
                    }
                    else{
                        var user2 = L.marker([ locationlat,locationlong],{icon: this.redteamicon});
                        //user2.bindPopup("<b>" + this.playername + "</b>").openPopup();
                        user2.Id = this.id;
                        user2.addTo(pmap).on('click', this.onClick(this.id));

                        this.marker = user2;
                    }

                }
                if(this.team == 2){
                    if(this.localplayer == true){
                        var user2 = L.marker([ locationlat,locationlong],{icon: this.blueteamiconlocal});
                        //user2.bindPopup("<b>" + this.playername + "</b>").openPopup();

                        user2.addTo(pmap);

                        this.marker = user2;
                    }
                    else{
                        var user2 = L.marker([ locationlat,locationlong],{icon: this.blueteamicon});
                        //user2.bindPopup("<b>" + this.playername + "</b>").openPopup();
                        user2.Id = this.id;
                        user2.addTo(pmap).on('click', this.onClick);

                        this.marker = user2;
                    }


                }
  
            }

            //player name tag
            if(this.playernameplayer != null){
                this.playernameplayer.setLatLng([ locationlat, locationlong]);
            }
            else{
            
                //red = 1,blue = 2
                if(this.team == 1){
                    
                    var playernameplayer2 = L.marker([ locationlat,locationlong],{icon: L.icon({
                        iconUrl: 'images/numbersblue/playernameblue0.png',
                        iconSize: [0, 0],
                        iconAnchor: [0, 0]
                    })
                    });
                    playernameplayer2.bindTooltip("Player" + this.id, {
                            permanent: true,
                            direction: 'center',
                            className: "redteam",
                            offset: [0, -70]
                         });
                         playernameplayer2.Id = this.id;
                    playernameplayer2.addTo(pmap).on('click', this.onClick);
                    this.playernameplayer = playernameplayer2;


                }
                if(this.team == 2){

                    var playernameplayer2 = L.marker([ locationlat,locationlong],{icon: L.icon({
                        iconUrl: 'images/numbersblue/playernameblue0.png',
                        iconSize: [0, 0],
                        iconAnchor: [0, 0]
                    })
                    });
                    playernameplayer2.bindTooltip("Player" + this.id, {
                            permanent: true,
                            direction: 'center',
                            className: "blueteam",
                            offset: [0, -70]
                         });
                         playernameplayer2.Id = this.id;
                    playernameplayer2.addTo(pmap).on('click', this.onClick);
                    this.playernameplayer = playernameplayer2;



                }
            }

            //health bar back(red)
            if(this.healthbarredmarker != null){

                this.healthbarredmarker.setLatLng([ locationlat, locationlong]);
                
            }
            else{
                this.healthbarredmarker = L.marker([ locationlat,locationlong],{icon: L.icon({
                    iconUrl: 'images/healthbarred.png',
                    iconSize: [100, 10],
                    iconAnchor: [50, 60]
                    
                })
                }).addTo(pmap).on('click', this.onClick);
                this.healthbarredmarker.Id = this.id;
            }

             //health bar front(green)
             if(this.healthbargreenmarker != null){

                this.healthbargreenmarker.setLatLng([ locationlat, locationlong]);
                
                this.healthbargreenmarker.setIcon(L.icon({
                    iconUrl: 'images/healthbargreen.png',
                                iconSize: [(this.health/100)*100, 10],
                                iconAnchor: [50, 60]
                    
                })
                );
            }
            else{
            
                
                this.healthbargreenmarker = L.marker([ locationlat,locationlong],{icon: L.icon({
                    iconUrl: 'images/healthbargreen.png',
                    iconSize: [100, 10],
                    iconAnchor: [50, 60]
                    
                })
                }).addTo(pmap).on('click', this.onClick);
                this.healthbargreenmarker.Id = this.id;
            }

             //health bar grey
             if(this.healthbargreymarker != null){

                this.healthbargreymarker.setLatLng([ locationlat, locationlong]);

                var showgrey = 0;
                if(this.health <= 0){
                    showgrey = 100;
                }
                else{
                    showgrey = 0;
                }
                this.healthbargreymarker.setIcon(L.icon({
                    iconUrl: 'images/healthbargrey.png',
                                iconSize: [showgrey, 10],
                                iconAnchor: [50, 60]
                    
                })
                );
            }
            else{
            
                
                this.healthbargreymarker = L.marker([ locationlat,locationlong],{icon: L.icon({
                    iconUrl: 'images/healthbargrey.png',
                                iconSize: [0, 0],
                                iconAnchor: [0, 0]
                    
                })
                }).addTo(pmap).on('click', this.onClick);
                this.healthbargreymarker.Id = this.id;
            }
        
            //grey marker
            if(this.greymarker != null){
                this.greymarker.setLatLng([ locationlat, locationlong]);

                if(this.health <= 0){
                    if(this.localplayer == true){
                        /*
                        iconSize: [25, 41],
                            iconAnchor: [12, 40]
                        */
                        this.greymarker.setIcon(L.icon({
                            iconUrl: 'images/marker-icon-grey-local.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 40]
                        })
                        );
                    }
                    else{
                        this.greymarker.setIcon(L.icon({
                            iconUrl: 'images/marker-icon-grey-local.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 40]
                        })
                        );
                    }
                }
                else{
                    if(this.localplayer == true){
                        this.greymarker.setIcon(L.icon({
                            iconUrl: 'images/marker-icon-grey-local.png',
                            iconSize: [0, 0],
                            iconAnchor: [0, 0]
                        })
                        );
                    }
                    else{
                        this.greymarker.setIcon(L.icon({
                            iconUrl: 'images/marker-icon-grey.png',
                            iconSize: [0, 0],
                            iconAnchor: [0, 0]
                        })
                        );
                    }
                }
                
            }
            else{
 
                this.greymarker = L.marker([ locationlat,locationlong],{icon: L.icon({
                    iconUrl: 'images/marker-icon-grey.png',
                    iconSize: [0, 0],
                    iconAnchor: [0, 0]
                    
                })
                }).addTo(pmap).on('click', this.onClick);
                this.greymarker.Id = this.id;

            }

    }
}