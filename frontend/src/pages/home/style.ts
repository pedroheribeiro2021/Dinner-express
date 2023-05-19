import styled from "styled-components";

export const HomeStyle = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;

    h1 {
        text-align: center;
        font-size: 90px;

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
        z-index: 1;

        ul {
            display: flex;
            justify-content: center;
            position: relative; 
            margin-top: 4%;
            display: flex;
            gap: 12px;
            z-index: 2; 
            width: 80%;
            
            li {
                display: flex;
                flex-direction: column;
                border-radius: 8px;
                padding: 15px;

                .operating-time {
                    display: flex;
                    flex-direction: column;

                    li {
                        font-size: 12px;
                        font-weight: bold;
                        height: 10px;
                        position: relative;
                        box-shadow: none;
                    }
                }

                .card-buttons {
                    display: flex;
                    gap: 8px;

                    button {
                        background-color: var(--cover);
                        border-radius: 4px;
                        padding: 4px;
                        transition: 0.5s;
                    }

                    button:hover {
                        background-color: gray;
                        color: white;
                    }

                    a {
                        background-color: var(--cover);
                        border-radius: 4px;
                        padding: 4px;
                        font-size: 14px;
                        color: black;
                        transition: 0.5s;
                    }

                    a:hover {
                        background-color: gray;
                        color: white;
                    }
                }
            }

            li:hover {
                box-shadow: 4px 4px 4px 4px rgba(0, 0, 0, 0.2);
            }
        }
    }

    .register-restaurant {
        position: absolute;
        top: 50;
        right: 90%;
        z-index: 2; 
    }
    
    .cover {
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 55vh;
        opacity: 0.5;
        z-index: 0;
    }

    .restaurants-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  margin-top: 4%;
  width: 80%;
  overflow-x: auto;
  scroll-behavior: smooth;
  height: 100%;

  &::-webkit-scrollbar {
    height: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--cover);
    border-radius: 4px;
  }

  li {
    border-radius: 8px;
    padding: 15px;
    min-width: 30%;
  }
}

`