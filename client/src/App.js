import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment';


function App() {

  const [vacations, setVacations] = useState([]);

  useEffect( () => {
    console.log("1", vacations);
    axios.get("http://localhost:8000/api/vacations")
      .then(res => {
        setVacations(res.data);
        console.log("5", "vacations are here", res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="jumbotron">
        <h1>Vacations!</h1>
      </div>
      {
        vacations.map( v => 
          <div className="card" key={v._id}>
            <div className="card-body">
              <h4 className="title">{v.location}</h4>
              <p>Start: {moment(v.start).format("MMM Do YYYY")}</p>
              <p>End: {moment(v.end, "YYYY-MM-DD").fromNow()}</p>
              <h4 className="subtitle">Activities</h4>
              <ul>
                {
                  v.activities.map( (a, i) => 
                    <li key={i}>{a}</li>  
                  )
                }
              </ul>
            </div>
          </div>  
        )
      }
    </div>
  );
}

export default App;
