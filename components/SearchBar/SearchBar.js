class SearchBar {
  #state = [];
  constructor({ $target }) {
    this.$target = $target;
    this.$searchInput = document.createElement("input");
    $target.append(this.$searchInput);
  }

  setState = (nextState) => {
    this.#state = nextState;
  };
}

export default SearchBar;
