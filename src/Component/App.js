import React from "react";

import Searchbar from "./SearchBar";
import ItemList from "./ItemList";
import ActiveItems from "./ActiveItems";

class App extends React.Component {
  state = {
    term: "",
    items: {
      0: { name: "Marina Augustine", email: "m.augustine@gmail.com" },
      1: { name: "Nick Giannopoulos", email: "n.giannopoulos@yahoo.com" },
      2: { name: "Anita Gros", email: "a.gros@live.in" },
      3: { name: "Megan Smith", email: "m.smith@gmail.com" }
    },
    activeItems: {},
    itemsDisplay: 0
  };

  onTermChange = term => {
    this.setState({ term });
  };

  onCloseClick = key => {
    console.log(key);

    const item = this.state.activeItems[key];

    this.setState({
      items: { ...this.state.items, [key]: item },
      activeItems: { ...this.state.activeItems, [key]: undefined }
    });
  };

  onItemClick = key => {
    const activeItem = this.state.items[key];
    this.setState({
      activeItems: { ...this.state.activeItems, [key]: activeItem },
      items: { ...this.state.items, [key]: undefined }
    });
  };

  onInputClick = value => {
    console.log('click');
    this.setState({ itemsDisplay: value });
  };

  render() {
    return (
      <div onClick={() => this.onInputClick(0)} className="container">
        <div
          onClick={e => e.stopPropagation()}
          className="searchbar__container"
        >
          <ActiveItems
            onCloseClick={this.onCloseClick}
            items={this.state.activeItems}
          />
          <Searchbar
            onInputClick={this.onInputClick}
            term={this.state.term}
            onTermChange={this.onTermChange}
          />
        </div>
        <ItemList
          itemsDisplay={this.state.itemsDisplay}
          onItemClick={this.onItemClick}
          items={this.state.items}
        />
      </div>
    );
  }
}

export default App;