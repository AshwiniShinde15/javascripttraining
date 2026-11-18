class TeamMemberScores{
    constructor(name ,employeeId)
    {
        this.name=name;
        this.employeeId=employeeId;
        this.performanceScores = [];
    }
    addScore(score){

  this.performanceScores.push(score);
        console.log("Array:",this.performanceScores);
        
    }

    //avarage score
    getAverageScore(){
        if (this.performanceScores.length === 0)
        {
            return 0;
        }
        let totalscore= this.performanceScores.reduce((sum,score)=>sum+score,0);

        return totalscore/this.performanceScores.length;
        // let averagescore= TeamMemberScores%this.performanceScores.length;
        // console.log("Avg score:",+averagescore);
       
    }
}

let team=new TeamMemberScores("Raj Verma","E101");
team.addScore(80);
team.addScore(90);
team.addScore(70);
console.log(team.name + " average score: " + team.getAverageScore());