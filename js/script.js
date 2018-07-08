// react
var movies = {a:  
    {
      id: 1,
      title: 'Terminato 1 ',
      desc: 'Film o maszynie z przyszłości, która ma za cel zaibie Sarah Connor',
      boxoffice : 'zarobił : 78 371 200 mln dolarów',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Terminator1984movieposter.jpg/220px-Terminator1984movieposter.jpg ' 
    },
    b:{
      id: 2,
      title: 'Terminatr 2' ,
      desc: 'Kontynuacja filmu o walce pomiędzy robotami a ludźmi',
      boxoffice: 'zarobił : 520 881 154 mln dolarów',
      img: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    c:{
      id: 3,
      title: 'Terminatr 3' ,
      desc: 'Został wysłany kolejny terminator aby zabić już dorosłego Johna Connora',
      boxoffice: 'zarobił : 433 371 112 mln dolarów',
      img: 'http://1.fwcdn.pl/po/30/27/33027/7454301.6.jpg'
    },
    d:{
      id: 4,
      title: 'Terminatr 4' ,
      desc: 'Tym razem już bomby spadły i walka się toczy po tym fakcie',
      boxoffice: 'zarobił : 371 353 001 mln dolarów',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Terminator-salvation-poster.jpg/220px-Terminator-salvation-poster.jpg'
    }
  };

var Movie = React.createClass({
  propTypes: {
      movies: React.PropTypes.object.isRequired 
  },
  render: function(){
          return(
            React.createElement('ul',{},
            React.createElement('li', {key: this.props.movies.a.id},
            React.createElement('h2', {}, this.props.movies.a.title),
            React.createElement('p',{}, this.props.movies.a.desc),
            React.createElement('p', {}, this.props.movies.a.boxoffice),
            React.createElement('img',{src: this.props.movies.a.img})
           ))
      
          )
        }});   
 
var element = React.createElement(Movie, {movies});
ReactDOM.render(element, document.getElementById('app'));

/* ==========================================================================*/

var Movieb = React.createClass({
  propTypes: {
      movies: React.PropTypes.object.isRequired 
  },
  render: function(){
          return(
            React.createElement('ul',{},
            React.createElement('li', {key: this.props.movies.b.id},
            React.createElement('h2', {}, this.props.movies.b.title),
            React.createElement('p',{}, this.props.movies.b.desc),
            React.createElement('p', {}, this.props.movies.b.boxoffice),
            React.createElement('img',{src: this.props.movies.b.img})
           ))
      
          )
        }});   
 
var element = React.createElement(Movieb, {movies});
ReactDOM.render(element, document.getElementById('appb'));



/* ==========================================================================*/

var Moviec = React.createClass({
  propTypes: {
      movies: React.PropTypes.object.isRequired 
  },
  render: function(){
          return(
            React.createElement('ul',{},
            React.createElement('li', {key: this.props.movies.c.id},
            React.createElement('h2', {}, this.props.movies.c.title),
            React.createElement('p',{}, this.props.movies.c.desc),
            React.createElement('p', {}, this.props.movies.c.boxoffice),
            React.createElement('img',{src: this.props.movies.c.img})
           ))
      
          )
        }});   
 
var element = React.createElement(Moviec, {movies});
ReactDOM.render(element, document.getElementById('appc'));


/* ==========================================================================*/

var Movied = React.createClass({
  propTypes: {
      movies: React.PropTypes.object.isRequired 
  },
  render: function(){
          return(
            React.createElement('ul',{},
            React.createElement('li', {key: this.props.movies.d.id},
            React.createElement('h2', {}, this.props.movies.d.title),
            React.createElement('p',{}, this.props.movies.d.desc),
            React.createElement('p', {}, this.props.movies.d.boxoffice),
            React.createElement('img',{src: this.props.movies.d.img})
           ))
      
          )
        }});   
 
var element = React.createElement(Movied, {movies});
ReactDOM.render(element, document.getElementById('appd'));



