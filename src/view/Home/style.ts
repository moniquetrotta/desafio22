import styled from "styled-components";

export const Container = styled.div`
width: 80%;
margin: auto;
.nav {
display: flex;
align-items: center;
justify-content: space-between;

.cart1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
}

section {
  width: 100%;
  background-color: #963D9770;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  
  .product-content {
    height: 300px;
    background-color: #fff;
    border-radius: 12px;
    display: grid;
    text-align: center;
    padding: 12px;
    margin: 10px;
   }

  button {
    background-color: transparent;
    border-color: #963D9770;
    color: #963D9790;
    padding: 7px;
    font-weight: bold;
    font-size: 12pt;
    margin-top: 20px;
    margin-bottom: 40px;
    border-radius: 15px;
    cursor: pointer;
    outline: none;
    transition: all .4s ease-out;
  }

    button:hover{
      background-color: #963D9790;
      color: #fff;
    }

}
`