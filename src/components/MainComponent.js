import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import DishDetail from './DishdetailComponent';
import Menu from './MenuComponent';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                {/* here onClick is provided as a property of Menu component which can be used in that component */}
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}

export default Main;