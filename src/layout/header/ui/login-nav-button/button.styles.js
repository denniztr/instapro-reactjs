import styled from "styled-components";

export const Button = styled.button`
    position: relative;
    padding: 12px 18px;
    transition: all 0.2s ease;
    border: none;
    background: none;
    cursor: pointer;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        border-radius: 50px;
        background: rgba(194, 87, 121, 0.5);
        width: 45px;
        height: 45px;
        transition: all 0.3s ease;
    }

    & span {
        position: relative;
        font-size: 18px;
        font-weight: 400;
        letter-spacing: 2px;
        color: rgb(40, 40, 40);
        font-family: "League Spartan", sans-serif;
    }

    & svg {
        position: relative;
        top: 0;
        margin-left: 10px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        // stroke: #282828;
        stroke: rgba(194, 87, 121, 0.8);
        stroke-width: 2;
        transform: translateX(-5px);
        transition: all 0.3s ease;
    }


    &:hover:before {
        width: 100%;
        background: rgba(194, 87, 121, 0.8);
    }

    &:active {
        transform: scale(0.95);
    }

    &:hover svg {
        transform: translateX(0);
        stroke: rgba(40, 40, 40);
    }
`;
