import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component {
    render() {
        return (
            <Aux>
                <div>Burger</div>
                <div>Ingredients</div>
            </Aux>              
        );
    }
}

export default BurgerBuilder;