import styled from "styled-components";

const HeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1.5rem;
  color: #1c1c5c;
`;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  nav ul li:not(:last-child) {
    margin-right: 0.5rem;
  }
  nav li a {
    color: #1c1c5c;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &.active {
      border-bottom: 2px solid #1c1c5c;
    }
  }
`;

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 2;
  width: 100%;
`;

export { HeaderElement, NavigationContainer, HeroContainer };
