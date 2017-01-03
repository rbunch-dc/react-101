function Application(props){
	// Capital letters in React, means compontent.
	// Components return a single virtual DOM element
	return(
		<div className="application">
			<h1>{props.title}</h1>
			{props.message}
		</div>
	)
}

ReactDOM.render(
	<Application message="Hello, Class" title="React Day!" />,
	document.getElementById('container')
)