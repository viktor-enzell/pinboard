import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Note from "../Note/index";
import Modal from "../Modal/index";

class MainPage extends React.PureComponent {
  render() {
    const Background = styled.div`
      background-color: #fff;
      position: fixed;
      width: 100%;
      height: 100%;
      z-index: 1000;
      padding: 30px;
    `;
    const { bodyChange, headerChange, modalStateChange } = this.props;
    return (
      <div>
        <Header />
        <Background>
          <Note />
            {<Modal
                bodyChange={bodyChange}
                headerChange={headerChange}
                modalStateChange={modalStateChange}
            />}
        </Background>
      </div>
    );
  }
}

export default MainPage;
