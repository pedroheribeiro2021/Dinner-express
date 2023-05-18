import { styled } from "styled-components";


export const IsOpenPageStyle = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;


    form {
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 20%;

        select {
            border: 0.5px;
            border-radius: 4px;
            outline: none;
            border: none;
            padding: 5px;
        }

        input {
            border: 0.5px;
            padding: 5px;
            margin-bottom: 10px;
        }

        button:hover {
            font-weight: bold;
        }
    }

    .answer {
        position: absolute;
        top: 65%;
        right: 50;
        z-index: 2;
        font-size: 50px;
        color: var(--black1);
        opacity: 0.8;
    }

    .cover {
        position: absolute;
        left: 50;
        top: 50%;
        width: 95vw;
        height: 45vh;
        opacity: 0.5;
        z-index: 0;
    }


`