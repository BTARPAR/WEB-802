import React, {useState} from "react";
import FbLogin from "./component/FbLogin";
import {Route, Switch, BrowserRouter as Router, Link} from "react-router-dom";
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./component/Product";
import Header from "./component/Header";
import {products} from "./contants";
import './App.css';

const App = () => {
    const [data, setData] = useState(products)
    const [modal, setModal] = useState(false)
    const [selected, setSelected] = useState(null)
    const [sortBy, setSortBy] = useState('low')

    const updateValue = (index, value) => {
        const update = data[index]
        const copyData = [...data]
        update.value = value
        copyData[index] = update
        setData(copyData)
    }

    const onChangeHandler = (index, e) => {
        const regex = /^[0-9\b]+$/;
        // if value is not blank, then test the regex
        if (e.target.value === '' || regex.test(e.target.value)) {
            updateValue(index, Number(e.target.value))
        }
    }

    const selectedProduct = (index) => {
        setSelected(index)
        setModal(!modal)
    }

    const quantityHandler = (operation, index) => {
        const value = data[index].value

        if (operation === 'increase') {
            updateValue(index, value + 1)
        } else {
            if (value !== 0 || value > 0) {
                updateValue(index, value - 1)
            }
        }
    }

    const sortHandler = (event) => {
        const value = event.target.value
        const sortData = data.sort((a, b) => {
            if(value === 'high'){
               return b.price - a.price
            }
            return a.price - b.price
        })
        setData(sortData)
        setSortBy(value)
    }

    const toggleModal = () => {
        setModal(!modal)
    }

    let modalItem = {
        image: '',
        desc: '',
        ratings: ''
    }
    if (selected !== null && selected >= 0) {
        modalItem = data[selected]
    }
    const total = data.reduce((acc, curr) => {
        acc += curr.value
        return acc
    }, 0)

    const cartData = data.filter((product) => product.value > 0)
    const cartHeader = !!cartData.length ? <h2>Your Cart Items</h2> :
        <h2 className={'text-center'}>Your Cart Empty</h2>
    return (
        <div className="App">
            <Router>
                <Header total={total}/>
                <Switch>
                    <Route exact path="/">
                        <div className={'m-4 text-center reduce-size'}>
                            <span className={'mr-2 pe-3'}>Sort Price By:</span>
                            <select name='sort' value={sortBy} onChange={sortHandler}>
                                <option value="low">Lowest</option>
                                <option value="high">Highest</option>
                            </select>
                        </div>
                        {data.map((item, index) => <Product {...item} index={index} key={index}
                                                            onChangeHandler={onChangeHandler}
                                                            quantityHandler={quantityHandler}
                                                            selectedProduct={selectedProduct}/>)}
                    </Route>
                    <Route exact path="/cart">
                        <div className={'m-5'}>
                            {cartHeader}
                            {cartData.map((item, index) => <Product {...item}
                                                                    index={index}
                                                                    key={index}
                                                                    onChangeHandler={onChangeHandler}
                                                                    quantityHandler={quantityHandler}
                                                                    selectedProduct={selectedProduct}/>)}
                            <Link to={!cartData.length ? '/' : '/login'}>
                                <button className={"btn bg-success text-white my-3 w-25"}>
                                    {!cartData.length ? 'Continue Shopping' : 'Login'}
                                </button>
                            </Link>
                        </div>
                    </Route>
                    <Route exact path="/login">
                        <FbLogin/>
                    </Route>
                </Switch>
                <Modal isOpen={modal} toggle={toggleModal} centered={true}>
                    <ModalHeader toggle={toggleModal}>{modalItem.desc}</ModalHeader>
                    <ModalBody className={'modal-body-class'}>
                        <img src={modalItem.image} width={350} className='mx-5' alt={modalItem.desc}/>
                        <p className='p-3 m-0'>
                            <span className='text-dark'>Ratings: </span>
                            <span>{modalItem.ratings}/5</span>
                        </p>
                    </ModalBody>
                </Modal>
            </Router>
        </div>
    );
}

export default App;
