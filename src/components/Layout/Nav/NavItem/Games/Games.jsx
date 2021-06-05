import styled from "styled-components"

const SVG = styled.svg`
    width:30px;
    fill: white;
    transition: fill 0.5s;
    &:hover{
        fill:var(--yellowPlainColor);
    }
`

export default function Games()
{
    return ( 
        <SVG version="1.1" id="svg" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 297.2">
        <g>
            <path d="M369,109.6c-13.4-39.7-32.9-65.9-56.4-77.3c-22.6-11.1-47.3-9.5-75.4,7.6c-1.6-0.6-3.4-1-5.1-1.4
                c-5.7-1.1-11.4-1.9-17.2-2.2c-10.3-0.6-20.7-0.1-31,1.1c-5.2,0.6-10.4,1.3-15.6,2.1c-0.5,0.1-1,0.1-1.6,0.2
                c-26.9-14.1-49.1-17.4-68.9-10.3c-42.8,15.4-74.4,81.9-74.5,156.9C23,272,50.9,284,110.3,223.7c27.9-28.3,18.4-25.8,95.4-25.1
                l63.6,0.5l24.5,24.9c35.2,35.8,51.3,43.5,67.8,32.3C384.7,240.8,388.4,167.1,369,109.6z M165.1,110.1v11.1c0,2-1.6,3.6-3.6,3.6
                h-9.3h-7.6c-2.9,0-5.2,2.3-5.2,5.2v7.6v8.8c0,2.2-1.8,4.1-4.1,4.1h-10.6h-11c-2,0-3.7-1.7-3.7-3.7v-9.1v-8.6c0-2.3-1.8-5-4.1-5.1
                l-9.3-0.2l-9.6,0c-2,0-3.6-1.6-3.6-3.6v-10.1v-9.9c0-2.1,1.7-3.9,3.9-3.9l9.6,0l9.2,0.1c2.2,0,4-1.7,4-3.9v-10V69.7h14.7H136
                c1.9,0,3.5,1.6,3.5,3.5v9.4v9.3c0,2.3,1.9,4.2,4.2,4.2l8.5-0.1l9.7,0.1c1.8,0,3.3,1.5,3.3,3.3V110.1z M271.7,156
                c-25.2,0-24.8-34.9,0.5-38.3c0.9-0.1,4.3,1.1,7.7,2.7C298.2,129,292,156,271.7,156z M284.5,98.1c-14.5,13.8-38.7-2.9-30-20.7
                c5.5-11.3,16-14.8,27.5-9.1C292.5,73.4,293.8,89.2,284.5,98.1z M320.2,132.1c-17,0-25.1-20.2-13-32.3c7.3-7.3,18.8-7.3,26.1,0
                C345.3,111.9,337.2,132.1,320.2,132.1z"/>
        </g>
        </SVG>
    )
}