// gallery 

var image = {
    name: 'kotek',
    src: 'https://i.ytimg.com/vi/K62_uVfrJsg/hqdefault.jpg'
}


var GalleryItem = React.createClass({
    propTypes: {
        image: React.PropTypes.object.isRequired 
    },
    render: function(){
        return (
            React.createElement('div', {},             
            React.createElement('h2', {}, this.props.image.name),
            React.createElement('img', {src: this.props.image.src})  
        )

    )
    }
});

var element = React.createElement(GalleryItem, {image: image});
ReactDOM.render(element, document.getElementById('app'));


