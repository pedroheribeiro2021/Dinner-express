import styled from "styled-components";
import coverrrr from "../../assets/dinner wallpapaer.jpg"


export const HomeStyle = styled.section`
    display: flex;
    flex-direction: column;

    h1 {
        text-align: center;
        font-size: 90px;
        /* font-weight: bolder; */
    }

    .subtitle1 {
        max-width: 25%;
        margin: 1% 0 1% 21%;
        font-weight: 100;
    }

    h2 {
        text-align: center;
        font-size: 45px;
        font-weight: bold;
    }

    .subtitle2 {
        max-width: 25%;
        margin: 1% 0 1% 53%;
        font-weight: 100;
    }

    .restaurants-hub {
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        /* top: 40; */
        z-index: 1;

        ul {
            position: relative; 
            margin-top: 7%;
            /* bottom: 50%; */
            display: flex;
            gap: 12px;
            z-index: 2; 
            
            li {
                display: flex;
                flex-direction: column;
                background-color: red;

                .card-buttons {
                    display: flex;
                    gap: 8px;

                    button {
                    background-color: var(--cover);
                    border-radius: 4px;
                    padding: 4px;
                }
                }
            }
        }
    }
    
    .cover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 60vh;
        opacity: 0.5;
        z-index: 0;
    }

`