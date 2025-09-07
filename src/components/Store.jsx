import React, { Component } from 'react';
import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isList: false
    };
    
    this.products = [{
      name: "Nike Metcon 2",
      price: "130",
      color: "red",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "blue",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
      name: "Nike Metcon 2",
      price: "130",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
      name: "Nike free run",
      price: "170",
      color: "black",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
      name: "Nike Metcon 3",
      price: "150",
      color: "green",
      img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];
  }

  handleSwitchView = () => {
    this.setState(prevState => ({
      isList: !prevState.isList
    }));
  };

  render() {
    console.log('Store component rendering, isList:', this.state.isList);
    const { isList } = this.state;
    const icon = isList ? 'view_module' : 'view_list';

    return (
      <div className="store">
        <div className="store-header">
          <IconSwitch 
            icon={icon} 
            onSwitch={this.handleSwitchView} 
          />
        </div>
        
        <div>
          {isList ? (
            <ListView items={this.products} />
          ) : (
            <CardsView cards={this.products} />
          )}
        </div>
      </div>
    );
  }
}

export default Store;