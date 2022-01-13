import React from 'react';

const Searchbox = () => {
  return (
    <div class="main__searchbox">
      <input
        size="28"
        class="main__searchbox--input"
        type="text"
        placeholder="Fast and Furious"
        onchange="handleSearchQuery(event)"
        required />
      <button class="main__searchbox--btn" type="submit">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
}

export default Searchbox;
