import React, { Component, FormEvent } from 'react';
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

        if (redirectToReferrer) return <Redirect to={{ pathname: 'search', search: `?query=${search}` }} />;

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
            </form>
        );
    };

    openSearchField = () => {

        this.setState({
            active: true
        });
    };

    closeSearchField = () => {

        this.setState({
            search: '',
            active: false
        })
    };

    navigateToSearchPage = (e: FormEvent) => {
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