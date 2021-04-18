import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
    }
    
    body {
        -webkit-font-smoothing: antialiased !important;
        background-color: #0C2D48;
        
    }
    
    body html #root {
        height: 100%;
    }
`