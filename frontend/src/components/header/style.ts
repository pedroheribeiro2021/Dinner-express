import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: white;
    min-height: 60px;
    padding: 0px 40px;
    margin: 0 15px 0 15px;
    align-items: center;
    border: 0.5px solid var(--black1);

    .logo {
        cursor: pointer;
    }

    .menu {
        display: flex;
        justify-content: space-between;
        gap: 12px;

        button:hover {
            font-weight: 600;
        }

        .input-place {
            display: flex;
            justify-content: space-between;
            align-items: center;
            align-content: center;
            border-radius: 4px;

            
        }
    }

`