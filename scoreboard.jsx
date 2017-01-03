// This app sucks. There is no point in useing React. Everything is hardcoded. So far...
// Let's make some JSON!

var teams = [
	{
		name: "Alabama",
		score: 0,
		mascot: "Crimson Tide"
	},
	{
		name: "Clemson",
		score: 0,
		mascot: "Tigers"
	}
	// {
	// 	name: "USC",
	// 	score: 0,
	// 	mascott: "Trojans"
	// }
]

function Header(props){
	return(
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	)
}

function Team(props){
	return(
		<div className="team">
			<div className="team-name">{props.name}</div>
			<div className="counter">
				<button className="counter-change minus">-</button>
				<div className="team-score"> {props.score} </div>
				<button className="counter-change plus">+</button>
			</div>
		</div>
	)
}

function Application(props){
	return(
		<div className="scoreboard">
			<Header title={props.title} />
			<div className="teams">


				{/* Using Map to loop through our teams JSON. These are no longer neccessary */ }
				{/* <Team name="Alabama" score="0" /> */ }
				{/* <Team name="Clemson" score="0" /> */ }

				{/* props.teams is an array or team objects */}	
				{/* return a component with the current team name and score */}	
				{/* () => {} is the ES6 way of writing function(){} */}	

				{props.teams.map((team, index) =>{
					{/* Add a key so that React can quickly and efficiently manage the DOM */}	
					return <Team key={index} name={team.name} score={team.score} />
				})}

			</div>
		</div>
	)
}


ReactDOM.render(
	<Application title="National Championship Scoreboard" teams={teams} />,
	document.getElementById('container')
)