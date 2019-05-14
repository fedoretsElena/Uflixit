import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';

import './SearchForm.scss';
import Input from '../../shared/Input';

class SearchForm extends Component {
    state = {
        search: '',
        active: false,
        redirectToReferrer: false
    };

    render() {
        const {active, redirectToReferrer, search} = this.state;

        return (
            <form className="search-form d-flex align-items-center"
                  onSubmit={ this.navigateToSearchPage }
            >
                <IoIosSearch className={ !active ? 'search-form__icon' : 'search-form__icon search-form__icon--hidden' }
                             onClick={ this.openSearchField }/>

                <Input placeholder='Search... '
                       value={ this.state.search }
                       active={ this.state.active }
                       lostFocus={ this.closeSearchField }
                       searchChanged={ this.handleSearchChange }
                />

                {redirectToReferrer && <Redirect to={{ pathname: '../search', search: `?query=${search}` }} />}

            </form>
        );
    };

    componentDidUpdate(): void {

        if (this.state.redirectToReferrer) {

            this.setState({
                redirectToReferrer: false
            });
        }
    }

    openSearchField = () => {

        this.setState({
            active: true
        });
    };

    closeSearchField = () => {

        this.setState({
            search: '',
            active: false
        });
    };

    navigateToSearchPage = (e: any) => {
        e.preventDefault();

        this.setState({
            redirectToReferrer: true
        });
    };

    handleSearchChange = (val: string) => {
        this.setState({search: val});
    };
}

export default SearchForm;