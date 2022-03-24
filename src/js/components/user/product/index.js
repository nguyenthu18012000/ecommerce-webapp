import React from 'react';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import ListProduct from './views/listProduct';

const ProductComponent = ({ match }) => {
    return (
        <div>
            <Route path={match?.url} exact component={ListProduct} />
        </div>
    );
};

export default ProductComponent;