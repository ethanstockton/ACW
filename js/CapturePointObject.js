class CapturePointObject {
    
    constructor(pid,pcapturepointname,pcapturedteam,pcapturedteamvalue,pradius,pmap,plocationlat,plocationlong){
        
        this.id = pid;
        this.capturepointname = pcapturepointname;
 
        this.locationlat= plocationlat;
        this.locationlong= plocationlong;

        this.capturedteam = pcapturedteam;
        this.capturedteamvalue = pcapturedteamvalue;
        this.radius = pradius;

        this.map = pmap;
        this.marker;//base marker
        this.markerred;//base marker
        this.markerblue;//base marker
    }

    //this will hold the info and map icons of this capture point

    
    //caputure point num/id
    //capture point name(if given)(maybe have a text overlay for the name)
    //locationlat
    //locationlong
    //captured team
    //captured team value
    //radius

    //when the team value is 0 it is neutral again, then within the server gameloop it will look for which players are trying to capture
    //it, which ever team has the most players in the radius will begin the capture again, 

    //
    //the base icon on the map
    //the team colour overlays
    //have the team colour overlay on the map and have the radius of the overlay equivilent to how 
    //captured the point is, ie if neutral be white, if 50% captured by red then have a circle 50% of the base




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

    setcapturedteam(pcapturedteam){
        this.capturedteam = pcapturedteam;
    } 
    getcapturedteam(){
        return this.capturedteam;
    }

    setcapturedteamvalue(pcapturedteamvalue){
        this.capturedteamvalue = pcapturedteamvalue;
    } 
    getcapturedteamvalue(){
        return this.capturedteamvalue;
    }
    
    
updateview(){

//have the map view change if it needs to
//
    //the base icon on the map
    //the team colour overlays
    //have the team colour overlay on the map and have the radius of the overlay equivilent to how 
    //captured the point is, ie if neutral be white, if 50% captured by red then have a circle 50% of the base

    if(this.locationlat == null){
        this.locationlat = 0;
    }
    if(this.locationlong == null){
        this.locationlong = 0;
     }

    if(this.marker != null){

        this.marker.setLatLng([this.locationlat, this.locationlong]);
    }
    else{
        /*
        this.marker = L.circle([this.locationlat, this.locationlong], {
            color: 'white',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: this.radius
        }).addTo(this.map).bindPopup(this.capturepointname);
        */
        
        var markerbase = L.circle([this.locationlat, this.locationlong], {
            color: 'white',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: this.radius
        });
        markerbase.bindPopup("<b>" + this.capturepointname + "</b>").openPopup();

        markerbase.addTo(map);

        this.marker = markerbase;
    
        
        
        

    
    }




}
    

    
}