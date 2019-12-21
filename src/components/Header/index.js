import React from "react";

import { HeaderElement, NavigationContainer } from "./styles";

const Header = props => {
  return (
    <HeaderElement>
      <NavigationContainer>
        <div className="logo-container">
          <h2>Hacker news</h2>
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="/#"
                className={props.isActive === "news" ? "active" : ""}
                onClick={() => props.getNews("news")}
              >
                news
              </a>
            </li>
            <li>
              <a
                href="/#"
                className={props.isActive === "newest" ? "active" : ""}
                onClick={() => props.getNews("newest")}
              >
                newest
              </a>
            </li>
            <li>
              <a
                href="/#"
                className={props.isActive === "front" ? "active" : ""}
                onClick={() => props.getNews("past")}
              >
                past
              </a>
            </li>
          </ul>
        </nav>
      </NavigationContainer>
    </HeaderElement>
  );
};

export default Header;
