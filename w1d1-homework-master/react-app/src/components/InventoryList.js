import React, {Component} from "react";
import {Button, ButtonGroup, Container, Table} from "reactstrap";
import {Link} from "react-router-dom";
import AppNavbar from "./Navbar";

class InventoryList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inventories: [],
            isLoading: true
        }
        this.getLists = this.getLists.bind(this)
        this.removeInv = this.removeInv.bind(this)
    }

    componentDidMount() {
        this.getLists()
    }

    getLists() {
        this.setState({isLoading: true})
        fetch("/api/inventories", {method: "GET"})
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    inventories: data,
                    isLoading: false
                })
            })
            .catch((e) => console.error(e))
    }

    removeInv(id) {
        fetch("/api/inventory/" + id, {
            method: "DELETE",
        }).then((res) => {
            this.getLists()
        })
    }

    render() {
        if(this.state.isLoading) {
            return <p>Loading...</p>
        }
        const inventoryList = this.state.inventories.map((inventory, index) => {
                const {prodname, quality, price, status, _id: id} = inventory
                return <tr key={id}>
                    <td style={{whiteSpace: 'nowrap'}}>{prodname}</td>
                    <td>{quality}</td>
                    <td>{price}</td>
                    <td>{status}</td>
                    <td>
                        <ButtonGroup>
                            <Button size={'sm'} color={'primary'} tag={Link} to={'/inventories/' + id}>
                                Edit
                            </Button>
                            <Button size={'sm'} color={'danger'} onClick={() => this.removeInv(id)}>
                                Delete
                            </Button>
                        </ButtonGroup>
                    </td>
                </tr>
            })
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className={'float-right'}>
                        <Button color={'success'} className={'my-4'} tag={Link} to={'/inventories/new'}>
                            Add to Inventory
                        </Button>
                    </div>
                    <Table>
                        <thead>
                        <tr>
                            <th width='20%'>Product Name</th>
                            <th width='15%'>Quantity</th>
                            <th width='15%'>Price</th>
                            <th width='15%'>Status</th>
                            <th width='15%'>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {inventoryList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}

export default InventoryList