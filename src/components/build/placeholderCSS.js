export const placeholderCSS = `
//Layout Step
.frameWrapper {
  display: flex;
  position: absolute;
  top: 0;
  width: 100vw;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
}
.frame {
  margin-top: 12vh;
  margin-bottom: 3em;
}
.cardContainer {
  display: flex;
  margin-top: 3em;
  justify-content: space-between;
}
@mixin card($width: 31%) {
  width: $width;
  height: 46vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  & img {
    filter: drop-shadow(0 0 1px rgba(0,0,0,.4));
    transition: all .2s;
  }
  &:hover img {
    filter: drop-shadow(0 0 3px rgba(0,0,0,.4));
  }
  & p {
    margin-top: 2em;
  }
}
.card1 {
  @include card;
}
.card2 {
  @include card($width: 21%);
}
.card3 {
  @include card($width: 40%);
}
.slide {
  img {
    margin: 1em;
    height: 250px;
    filter: drop-shadow(0 0 1px rgba(0,0,0,.4));
    cursor: pointer;
    transition: all .2s;
  }
  &:hover img {
    filter: drop-shadow(0 0 3px rgba(0,0,0,.4));
  }
}

//Components Step
.componentList > div {
  justify-content: left;
  padding-left: 2vw;
  border-color: #25283D;
  color: #25283D;
  cursor: pointer;
  transition: all .2s;
}
.frame .componentList svg {
  color: #25283D;
  transition: all .2s;
}
.frame .componentList > div:hover {
  background-color: #25283D;
  color: #fff;
}
.componentList > div:hover svg {
  color: #fff;
}
.frame .componentGrid {
  margin-top: 1em;
}
.componentStack {
  border-radius: 16px;
  height: 55vh;
  border: 1px solid #bdbdbd;
  overflow: scroll;
  padding: 20px 50px;
  box-sizing: border-box;
  text-align: center;
}
.frame .componentPaper {
  padding: 10px;
  background-color: #fff;
}
.componentPaper span {
  flex-grow: 1;
}
.footer {
  margin-top: 5px;
}
.footer .footnote {
  text-align: center;
  line-height: 35px;
}
.componentPreview {
  border-radius: 16px;
  filter: drop-shadow(0 0 3px rgba(0,0,0,.4));
}
`;
