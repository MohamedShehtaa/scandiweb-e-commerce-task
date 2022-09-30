import { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CurrencyIcon from '../Currency/CurrencyIcon';
import CartIcon from '../Cart/CartIcon';
import Logo from '../../assets/images/Logo.svg';
import classes from './Header.module.css';

class Header extends Component {
    render() {
        const { categories } = this.props;
      
        return (
            <header className={classes.header}>
                <nav className={classes.nav}>
                    <ul>
                        {categories.map((category) => (
                            <li key={category.name}>
                                <NavLink
                                    to={`/categories/${category.name}`}
                                    className={(navData) =>
                                        navData.isActive ? classes.active : ''
                                    }
                                >
                                    {category.name.toUpperCase()}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={classes.logo}>
                    <Link to='/categories/all'>
                        <img
                            src={Logo}
                            alt='Logo'
                        />{' '}
                    </Link>
                </div>
                <section className={classes['shopping-section']}>
                    <CurrencyIcon />
                    <CartIcon />
                </section>
            </header>
        );
    }
}
const mapStateToPorps = (state) => ({
    categories: state?.product?.data?.categories,
});
export default connect(mapStateToPorps)(Header);
