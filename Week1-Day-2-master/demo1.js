class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang ",
            color: "red ",
            year: 1964
        };
    }

    render() {
        const {brand, model, color, year} = this.state
        return (
            <div>
                <h1>My {brand}</h1>
                <p>
                    It is a {color}
                    {model}
                    from {year}.
                </p>
            </div>
        );
    }
}

ReactDOM.render(<Car/>, document.getElementById('root'));


