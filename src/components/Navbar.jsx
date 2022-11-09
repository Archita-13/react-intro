import React from 'react'
import styled from 'styled-components'
//not using css, using style components

//instead of div we are going to use styled component Container 
const Container = styled.div`
    height: 60px;
    background-color: black;
`
const Wrapper = styled.div`
    padding: 10px 20px;
    background-color: red;
`


const Navbar = () => {
  return (
    <Container>
      hello
    </Container>
   
  )
}

export default Navbar
