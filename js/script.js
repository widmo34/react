// react
var movies = [  
    {
      id: 1,
      title: 'Terminato 1 ',
      desc: 'Film o maszynie z przyszłości, która ma za cel zaibie Sarah Connor',
      boxoffice : 'zarobił : 78 371 200 mln dolarów',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Terminator1984movieposter.jpg/220px-Terminator1984movieposter.jpg ' 
    },
    {
      id: 2,
      title: 'Terminatr 2' ,
      desc: 'Kontynuacja filmu o walce pomiędzy robotami a ludźmi',
      boxoffice: 'zarobił : 520 881 154 mln dolarów',
      img: 'https://m.media-amazon.com/images/M/MV5BMGU2NzRmZjUtOGUxYS00ZjdjLWEwZWItY2NlM2JhNjkxNTFmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg'
    },
    {
      id: 3,
      title: 'Terminatr 3' ,
      desc: 'Został wysłany kolejny terminator aby zabić już dorosłego Johna Connora',
      boxoffice: 'zarobił : 433 371 112 mln dolarów',
      img: 'http://1.fwcdn.pl/po/30/27/33027/7454301.6.jpg'
    },
    {
      id: 4,
      title: 'Terminatr 4' ,
      desc: 'Tym razem już bomby spadły i walka się toczy po tym fakcie',
      boxoffice: 'zarobił : 371 353 001 mln dolarów',
      img: 'https://upload.wikimedia.org/wikipedia/en/thumb/9/95/Terminator-salvation-poster.jpg/220px-Terminator-salvation-poster.jpg'
    }
  ]

  var MovieTitle = React.createClass({
    propTypes: {
        title: React.PropTypes.string.isRequired 
    },
    render: function(){
    
      return(
        React.createElement('h2', {}, this.props.title)
      );
     
    }
  }); 

  
  var MovieImg = React.createClass({
    propTypes: {
        img: React.PropTypes.string.isRequired 
    },
    render: function(){
    
      return(
        React.createElement('img', {src: this.props.img})
      );
     
    }
  }); 
  
  var MovieList = React.createClass({
    propTypes: {
        lista: React.PropTypes.array.isRequired 
    },
    render: function(){
      var moviesElement = this.props.lista.map(function(movie){
        return(
          React.createElement('li', {key: movie.id},
            React.createElement(Movie, {film: movie}),
            
          )
        );
      }); 
      return React.createElement('ul', {}, moviesElement)
    }
  }); 
  
  
  var Movie = React.createClass({
    propTypes: {
        film: React.PropTypes.object.isRequired 
    },
    render: function(){
      console.log(this.props.film);
      return(
        React.createElement('div', {key: this.props.film.id},
          React.createElement(MovieTitle, {title: this.props.film.title}),
          React.createElement(MovieImg, {img: this.props.film.img}),

          
        )
      );
     
    }
  }); 

  
            
var element = React.createElement(MovieList, {lista: movies});
ReactDOM.render(element, document.getElementById('app'));            


  

                
           
  
            
      
      
      








