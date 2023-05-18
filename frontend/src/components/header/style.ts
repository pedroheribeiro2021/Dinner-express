import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: white;
    min-height: 60px;
    padding: 0px 40px;
    margin: 15px;
    align-items: center;
    border: 0.5px solid var(--black1);


    .menu {
        display: flex;
        justify-content: space-between;
        gap: 12px;

        button {
            /* font-weight: 600;
            transition: 0.5s; */
        }

        button:hover {
            /* font-weight: 200; */
            font-weight: 600;
            /* transition: 0.5s; */
        }

        .input-place {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 0.2px solid gray;
            border-radius: 4px;
        }
    }

`