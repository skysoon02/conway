import axios from 'axios';
import React, { useEffect, useState } from 'react';


function ReaderBoard() {
  const [rules, setRules] = useState([]);
  const [update, setUpdate] = useState(0);

  useEffect(()=>{
    (async()=>{
      const response = await axios.get("http://13.124.69.102:5002/leaderboard");
      setRules(response.data.data);
    })();
    console.log(rules);
    console.log(window.location.search);
  }, [update]);



  return (
    <div className="App">
      <h1>LeaderBoard</h1>
      <table>
        <tr>
          <th scope="col">username</th>
          <th scope="col">ruletitle</th>
          <th scope="col">rule</th>
          <th scope="col">score</th>
          <th scope="col">upvote</th>
        </tr>
        {rules.length > 0 && rules.map(rule =>(
          <tr>
            <td>{rule.username}</td>
            <td>{rule.ruletitle}</td>
            {console.log}
            <td><a href={'http://13.124.69.102:5002/cs473_life?rule='+rule.link+'&'+window.location.search.substring(1)}>{rule.link}</a></td>
            <td>{rule.score}</td>
            <td><button
              onClick={()=>{axios.get('http://13.124.69.102:5002/upvote?rule='+rule.link+'&username='+rule.username);setUpdate(update+1)}}
            >up vote</button></td>
          </tr>
        ))}
        </table>
    </div>
  );
}

export default ReaderBoard;
