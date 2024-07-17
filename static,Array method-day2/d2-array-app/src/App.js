import logo from './logo.svg';
import './App.css';

function App() {
  let playersOfIndianCricketTeam=["Rohit Sharma","Virat Kohli","Bumrah","Jadeja","Ashwin","Sanju Samson","Yashasvi Jaiswal","Shami","Siraj","KL Rahul","Shubman Gill","Hardik Pandya","Suryakumar Yadav","Rishab Pant","Kuldeep Yadav","Axar Patel","Rinku Singh","Tilak Verma","Ruturaj Gaikwad","Shardul Thakur","Shivam Dube","Ravi Bishnoi"]
  return (
    <div className="App">
      <h1>Learning Array Methods</h1>
      <button onClick={()=>{ 
      console.log(playersOfIndianCricketTeam.length);
      for(let i=0;i<playersOfIndianCricketTeam.length;i++){ console.log(playersOfIndianCricketTeam[i]);}
    }}>Length</button>
    <button onClick={()=>{
      console.log(playersOfIndianCricketTeam);
      delete playersOfIndianCricketTeam[15];
      console.log(playersOfIndianCricketTeam);
    }}>Delete(emp)</button>
     <button onClick={()=>{
      console.log(playersOfIndianCricketTeam);
      playersOfIndianCricketTeam.splice(2,1);
      console.log(playersOfIndianCricketTeam);
    }}>Delete</button>
    <button onClick={()=>{
      let menIndianCricketPlayers=["Rohit Sharma","Hardik Pandya", "Bumrah","Jadeja"];
      let womenIndianCricketPlayers=["Smriti Mandhana","Renuka Singh", "Harmanpreet Kaur","Deepti Sharma"];
      let indianCriketTeamPlayers=menIndianCricketPlayers.concat(womenIndianCricketPlayers);

      console.log(menIndianCricketPlayers);
      console.log(womenIndianCricketPlayers);
      console.log(indianCriketTeamPlayers);

      let indianCriketTeamPlayers1=[...menIndianCricketPlayers,...womenIndianCricketPlayers];
      console.log(indianCriketTeamPlayers1);

    }}>Concat</button>
    <button onClick={()=>{
      let playersOfKKR=["Shreyas Iyer","Nitish Rana","Manish Pandey","Rinku Singh","Andre Russell"];
      let playersOfSRH=["Paat Cummins", "Abhishek Sharma","Travis Head","Heinrich Klaasen","Aiden Markram"];
      let playersOfRR=["Sanju Samson","Yashasvi Jaiswal","Ravichandran Ashwin","Trent Boult"];
      let playersOfRCB=["Virat Kohli","Faf Du Plessis","Dinesh Karthik","Rajat Patidar","Anuj Rawat"];
      let iplPlayers=[playersOfKKR,playersOfSRH,playersOfRR,playersOfRCB];
      // console.log(iplPlayers);
      console.log(iplPlayers[2][0]);
      let allplayers=iplPlayers.flat();
      console.log(allplayers);
    }}>Flat</button>
    <button onClick={()=>{
     let kkrPlayers=playersOfIndianCricketTeam.slice(4,7);
     console.log(kkrPlayers)
    }}>Slice</button>
    <button onClick={()=>{
      let fillArray=playersOfIndianCricketTeam.fill("Team INDIA");
      console.log(fillArray);
    }}>Fill</button>
    <button onClick={()=>{
      let iplWinners="TEAM KKR";
      let arr=Array.from(iplWinners);
      console.log(arr)
    }}>From</button>
    <button onClick={()=>{
      let result=playersOfIndianCricketTeam.includes("Virat Kohli");
      console.log(result);

    }}>Includes</button>
    <button onClick={()=>{
      console.log(playersOfIndianCricketTeam.indexOf("Rohit Sharma"));
    }}>IndexOf</button>
    <button onClick={()=>{
      console.log(playersOfIndianCricketTeam);
      playersOfIndianCricketTeam.reverse();
      console.log(playersOfIndianCricketTeam);
    }}>Reverse</button>
    <button onClick={()=>{
      // for(let i=0;i<playersOfIndianCricketTeam.length;i++){
      //   console.log(playersOfIndianCricketTeam[i]);
      // }
      playersOfIndianCricketTeam.forEach((ele,i)=>{
        console.log(`${i}----->${ele}`);
      })
    }}>For Each</button>

    <button onClick={()=>{
      let teamsScoreArr=[6,5,6,6,5,5,6,5];
      let result=teamsScoreArr.every((ele,i)=>{
        return ele>=5
      })
      if(result==true){
        console.log(`Team won the Match`);
      }else{
        console.log(`Team lost the Match`);
      }

      // if(teamsScoreArr[0]>=5&&
      //   teamsScoreArr[1]>=5&&
      //   teamsScoreArr[2]>=5&&
      //   teamsScoreArr[3]>=5&&
      //   teamsScoreArr[4]>=5
      // ){
      //   console.log("Won the Match");
      // }else{console.log("Lost the Match");}
    }}>Every</button>

    <button onClick={()=>{
     let teamsScoreArr=[5,6,5,5,6,6,5,1];
     let result=teamsScoreArr.some((ele,i)=>{
      return ele<5;
     })
     if(result==true){
      console.log(`Team lost the Match`);
     }else{
      console.log(`Team won the Match`);
     }
    }}>Some</button>

    <button onClick={()=>{
    let teamsScoreArr=[5,2,2,6,3,1,5,5,4,4,6,6,5,1];
    let filteredArr=teamsScoreArr.filter((ele,i)=>{
      return ele <5;
    })
     console.log(filteredArr)

    }}>Filter</button>

    <button onClick={()=>{
    let teamsScoreArr=[5,2,2,6,3,1,5,5,4,7,4,6,2,3,6,5];
    let val=teamsScoreArr.find((ele,i)=>{
      return ele >6;
    });
    let ind=teamsScoreArr.findIndex((ele,i)=>{
      return ele >6;
    });
    console.log(val);
    console.log(ind);

    }}>Find/Findindex/findlast/findlastindex</button>

    <button onClick={()=>{
    let playerName=["Virat"];
    console.log(Array.isArray(playerName));

    }}>Is Array</button>

    <button onClick={()=>{
    let teamsScoreArr=[5,2,2,6,3,1,5,5,4,7,4,6,2,3,6,5];
   let totalScore=teamsScoreArr.reduce((tot=0,ele,i)=>{
    return(tot+=ele);
   })
   console.log(totalScore);
    }}>Reduce</button>

    <button onClick={()=>{
    console.log(playersOfIndianCricketTeam);
    playersOfIndianCricketTeam.sort();
    console.log(playersOfIndianCricketTeam);
    playersOfIndianCricketTeam.reverse();
    console.log(playersOfIndianCricketTeam);
    }}>Sort</button>

    <button onClick={()=>{
      let padmaBhushanAwardees=["Mithun Chakraborty"," Sitaram Jindal","A Velu Ananda Chari ","Dasari Kondappa","Gaddam Sammaiah","Kethavath Somlal","Kurella Vittalacharya"]
      let newArr=padmaBhushanAwardees.map((ele,i)=>{
        return `shri.${ele}`;
      });

      console.log(padmaBhushanAwardees);
      console.log(newArr);
    }}>Map</button>

    {playersOfIndianCricketTeam.map((ele,i)=>{
      return <h4><i>{`*`}{ele}</i></h4>
    })}
    







    </div>
  );
}

export default App;
