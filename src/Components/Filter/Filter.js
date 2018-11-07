import React from 'react';
export default class Filter extends React.Component {

    render() {
        return (
                <form>
                    <input
                        placeholder="Search for..."
                        ref={input => (this.search = input)}
                        onChange={() => this.props.filterUsers(this.search.value)}
                    />
                </form>
        )
    }
}