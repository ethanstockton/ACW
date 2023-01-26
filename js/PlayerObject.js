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

        this.healthbargreen;
        this.healthbarred;

        this.playernameplayer;

        /*
        this.playername0;//index the player number Player[0][1][2][3][4]
        this.playername1;
        this.playername2;
        this.playername3;
        this.playername4;*/

    }

    /*
    spectatoricon = L.icon({
        iconUrl: 'images/marker-icon-speclightblue.png',
        iconSize: [25, 41],
        iconAnchor: [12, 40],
        popupAnchor: [0, -20],
        //shadowUrl: 'my-icon-shadow.png',
        //shadowSize: [68, 95],
        //shadowAnchor: [22, 94]
    });*/

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


    healthicongreen = L.icon({
        iconUrl: 'images/healthbargreen.png',
                    iconSize: [100, 10],
                    iconAnchor: [50, 60]
        
    });

    healthiconred = L.icon({
        iconUrl: 'images/healthbarred.png',
                    iconSize: [100, 10],
                    iconAnchor: [50, 60]
        
    });

    
    //have a icon for each 10% of health, so when at 84%, it would show 80%

    //use a polygon rectangle
    //maybe have the healthbar change size and anchor so that it looks like it is going down, 
    //this can be done for each player,
    //also maybe use the same idea for a player name tag(also maybe have a toggle for it so that it can be turned off)
    //also maybe have the player name shown in a different colour so that it can be seen more easily.

    /*
    playernamered = L.icon({
        iconUrl: 'images/playernameplayerred.png',
                    iconSize: [100, 30],
                    iconAnchor: [50, 90]
        
    });
    playernameblue = L.icon({
        iconUrl: 'images/playernameplayerblue.png',
                    iconSize: [100, 30],
                    iconAnchor: [50, 90]
        
    });
*/


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

            map.removeLayer(this.healthbargreen);
            map.removeLayer(this.healthbarred);

            map.removeLayer(this.playernameplayer);

            //map.removeLayer(this.playername0);
            //map.removeLayer(this.playername1);
            //map.removeLayer(this.playername2);
            //map.removeLayer(this.playername3);
            //map.removeLayer(this.playername4);

            this.healthbargreen = null;
            this.healthbarred = null;

            this.playernameplayer = null;

            //this.playername0 = null;
            //this.playername1 = null;
            //this.playername2 = null;
            //this.playername3 = null;
            //this.playername4 = null;

            this.marker = null;
        }
    }


    //have the health bar be multiple icons that when they change have the icon be switched out for a different icon
    //also needs to be updated to the location of the player when the player moves
    //have an offset for it, so that it shows above the player icon



    setlocation(pmap ,locationlat, locationlong){
        
            if(locationlat == null){
                locationlat = 0;
            }
            if(locationlong == null){
                  locationlong = 0;
             }

            if(this.marker != null){

                this.marker.setLatLng([ locationlat, locationlong]);

                this.healthbarred.setLatLng([ locationlat, locationlong]);

                this.healthicongreen = L.icon({
                    iconUrl: 'images/healthbargreen.png',
                                iconSize: [(this.health/100)*100, 10],
                                iconAnchor: [50, 60]
                    
                });
                this.healthbargreen.setIcon(this.healthicongreen);

                this.healthbargreen.setLatLng([ locationlat, locationlong]);

                this.playernameplayer.setLatLng([ locationlat, locationlong]);
                
                /** 
                if(this.playername0 != null){
                    this.playername0.setLatLng([ locationlat, locationlong]);
                }
                if(this.playername1 != null){
                    this.playername1.setLatLng([ locationlat, locationlong]);
                }
                if(this.playername2 != null){
                    this.playername2.setLatLng([ locationlat, locationlong]);
                }
                if(this.playername3 != null){
                    this.playername3.setLatLng([ locationlat, locationlong]);
                }
                if(this.playername4 != null){
                    this.playername4.setLatLng([ locationlat, locationlong]);
                }
*/

                

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

                        user2.addTo(pmap);

                        this.marker = user2;
                    }

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
                    playernameplayer2.addTo(pmap);
                    this.playernameplayer = playernameplayer2;


                    //here will be the loop that loads the player number to icons (maybe have the offsets and icon references predetermined)
                    /**
                    var numbers = this.id.split('');
                    
                    var i = 1;
                    numbers.forEach(number => {
                        if(number == 0){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered0.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 1){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered1.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 2){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered2.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 3){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered3.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 4){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered4.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 5){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered5.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 6){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered6.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 7){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered7.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 8){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered8.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 9){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersred/playernamered9.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }

                       i++;
                      });

*/


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

                        user2.addTo(pmap);

                        this.marker = user2;
                    }


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
                            offset: [0, -80]
                         });
                    playernameplayer2.addTo(pmap);
                    this.playernameplayer = playernameplayer2;


                    /** 
                    var playernameplayer2 = L.marker([ locationlat,locationlong],{icon: this.playernameblue});
                    playernameplayer2.addTo(pmap);
                    this.playernameplayer = playernameplayer2;
*/
                    /** 

                    var numbers = this.id.split('');
                   
                    var i = 1;
                    numbers.forEach(number => {
                        if(number == 0){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue0.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 1){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue1.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 2){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue2.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 3){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue3.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 4){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue4.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 5){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue5.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 6){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue6.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 7){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue7.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 8){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue8.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }
                        if(number == 9){
                            var number0 = L.marker([ locationlat,locationlong],{icon: L.icon({
                                iconUrl: 'images/numbersblue/playernameblue9.png',
                                iconSize: [18, 30],
                                iconAnchor: [-18*i, 89]
                            })
                            });
                            number0.addTo(pmap);
                            if(i == 0){
                                this.playername0 = number0;
                            }
                            if(i == 1){
                                this.playername1 = number0;
                            }
                            if(i == 2){
                                this.playername2 = number0;
                            }
                            if(i == 3){
                                this.playername3 = number0;
                            }
                            if(i == 4){
                                this.playername4 = number0;
                            }
                        }

                       i++;
                      });
                      
                      */


                }
                
                
                 var healthbarred2 = L.marker([ locationlat,locationlong],{icon: this.healthiconred});

                 healthbarred2.addTo(pmap);

                this.healthbarred = healthbarred2;

                

                var healthbargreen2 = L.marker([ locationlat,locationlong],{icon: this.healthicongreen});
               
                healthbargreen2.addTo(pmap);

                this.healthbargreen = healthbargreen2;
                

            
            }
        
       
    }
}