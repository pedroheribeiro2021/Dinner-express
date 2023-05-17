import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Space Grotesk', sans-serif;
        text-decoration: none;
        list-style:none;

    }

    :root {
        --cover: #e1e1e0;
        --black1: #1a1a1c;
    }

    main {
        background-color: var(--cover);
        /* width: 100vw; */
        /* height: 100vh; */
        
    }

    button {
        border: none;
        background: none;
        cursor: pointer;
    }

`