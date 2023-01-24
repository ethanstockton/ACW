class TeamObject {
    
    constructor(pid,pteamname,pteamscore,pteamcapcount){
        
        this.id = pid;
        this.teamname = pteamname;
        
        this.teamscore = pteamscore;
        this.teamcapcount = pteamcapcount;
    }

    
    //this will hold the info of the teams,

    //id
    //team name
    //score
    //caputured points count



    setid(pid){
        this.id = pid;
    } 
    getid(){
        return this.id;
    }

    setteamname(pteamname){
        this.teamname = pteamname;
    } 
    getteamname(){
        return this.playername;
    }

    setteamscore(pteamscore){
        this.teamscore = pteamscore;
    } 
    getteamscore(){
        return this.teamscore;
    }

    setteamcapcount(pteamcapcount){
        this.teamcapcount = pteamcapcount;
    } 
    getteamcapcount(){
        return this.teamcapcount;
    }


}