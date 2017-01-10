
class Red extends React.Component{
	constructor(){
		super()
		this.state.number = 3;
	}
}

var Red = React.createClass({
	render: function(){
		return(
			// Stuff here
		)
	},
	componentDidMount: function() {
		setState({
			number: 3,
			letter: 'a'
		})	
	},
	componentDidUpdate: function(prevProps, prevState) {
		setState({
			number: 6
		})
	},
	// : function() {
	// 	setState({
	// 		number: 3
	// 	})	
	// },	
})

function Blue(props){
	console.log(this);
	var self = this;
	function Red(){
		console.log(self)
	}
	return(
		<h1>Blue</h1>
	)
}

function Orange(props){
	var text = "Hello";
	return(
		<Blue />
	)
}

// // var mycomponent = ;
var mydiv = document.getElementById('container')
ReactDOM.render(<Orange gender="male" height="tall" name="Robert" />,mydiv);

// // function html(whatHTMLDoYouWAnt){

// // }

// // $('#mydiv').html('<h1>Hello</h1>')

// // function shuffleDeck(deck,numberOfDecks){
// // }

// // shuffleDeck(theDeck,1);

// function makeMeRoman(number){
// 	var number = [32,3,5,6]
// ...
// ...
// ...
// return(numberAsRoman)

// }

// console.log(Vi);


// function test(x,y){
// 	return x+y;
// }

// console.log(test(1,2,3));

function Green(props){
	return(<input type="text">)
}

function Red(props){
	return (<Green /><Blue />)
}

function Blue(props){
	return(<Red />)
}



