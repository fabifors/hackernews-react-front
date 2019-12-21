import React from "react";

const Loader = props => {
  const styles = {
    width: "100%"
  };

  return (
    <div>
      <img
        style={styles}
        src="https://www.demilked.com/magazine/wp-content/uploads/2016/06/gif-animations-replace-loading-screen-14.gif"
        alt="loader"
      />
    </div>
  );
};

export default Loader;
