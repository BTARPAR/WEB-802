import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Lists from "./components/Lists";
import HandleList from "./components/HandleList";
import {defaultSinglesData} from "./constant";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            alldata: [],
            singledata: defaultSinglesData
        };
        this.getLists = this.getLists.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.createList = this.createList.bind(this)
        this.updateList = this.updateList.bind(this)
        this.deleteList = this.deleteList.bind(this)
    }

    componentDidMount() {
        this.getLists()
    }

    getLists() {
        this.setState({loading: true})
        fetch("http://localhost:8000/api/books", {method: "GET"})
            .then((res) => res.json())
            .then((data) => {
                this.setState({alldata: data, loading: false})
            })
            .catch((e) => console.error(e))
    }

    handleChange(event, index) {
        if (index === undefined) {
            let {singledata: {title, author}} = this.state
            if (event.target.name === "title") {
                title = event.target.value
            } else {
                author = event.target.value
            }
            this.setState({
                singledata: {
                    title,
                    author
                }
            })
        } else {
            const {alldata} = this.state
            let {title, author} = alldata[index]
            if (event.target.name === "title") {
                title = event.target.value
            } else {
                author = event.target.value
            }
            alldata[index] = {
                ...alldata[index],
                title,
                author
            }
            this.setState({
                alldata
            })
        }
    }

    createList() {
        fetch("http://localhost:8000/api/book", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state.singledata)
        }).then((res) =>
            this.setState({
                singledata: defaultSinglesData
            }, () => this.getLists())
        )
    }

    updateList(id, index) {
        const {alldata} = this.state
        const {
            title,
            author
        } = alldata[index]
        fetch("http://localhost:8000/api/book", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title, author, id})
        }).then((res) => {
            this.getLists()
        })
    }

    deleteList(id) {
        fetch("http://localhost:8000/api/book/" + id, {
            method: "DELETE",
        }).then((res) => {
            this.getLists()
        })
    }

    render() {
        const {loading, alldata = [], singledata} = this.state

        const listTable = loading ? (
            <span>Loading Data.... Please be Patience.</span>
        ) : (<Lists alldata={alldata} handleChange={this.handleChange} updateList={this.updateList}
                    deleteList={this.deleteList}/>)
        return (
            <div className="container">
            <span className="title-bar">
                <HandleList singledata={singledata} handleChange={this.handleChange} listHandler={this.createList}
                            label={'Add Book'}/>
            </span>
                <div className="m-3">
                    {listTable}
                </div>
            </div>
        )
    }
}

export default App;