import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { Checkboard } from 'react-color/lib/components/common';
import Highlight from 'react-highlight'



const Container = styled.div`
    border: 1px solid rgb(32, 33, 36);
    border-radius: 8px;
    padding: 20px;
    width: 100%;

    .space-top {
        margin-top: 16px;
    }

    code {
        background: #fff;
    }
`

const Info = styled.div`

border-bottom: 1px solid #ccc;

    label {
        display: block;
        font-size: 13px;
        color: #666;
        margin: 0;
        padding: 0;
    }
.value {
    font-weight: 500;
    margin: 0;
    padding: 0;
    font-size: 32px;
}

 p {
     margin-bottom: 32px;
 }
    
`

const Preview = styled.div`
    display: flex;
    flex-direction: row;
    flex: 1 auto;
    margin-top: 32px;


    >div:first-child {
        overflow:hidden;
        position: relative;
        display: flex;
        margin-right: 16px;


        >div:first-child {
            z-index: -1;
            border-radius: 8px;
        }


        img {
            align-self: center;
        }
    }
`

const Transparent = styled.div`
   background-image: url("./grid-background@2x.png");
    padding: 0px;
    margin: 0px;
    background-repeat: repeat repeat;
    

`;

const XDContainer = ({srcFile, id , ...rest}) => (
    <Container>
        <Info>
            <label>Component Name</label>
            <span className="value">{id} </span>
            <label className="space-top">Description</label>
            <p>An amazing react component that looks ugly as sin but does some awesome amazing things</p>
        </Info>
        <Preview>
            <div>
        <Checkboard
                size={ 5 }
                white="#fff"
                grey="#eee"  />
        <img src={srcFile}  style={{height: '100px'}}/>
        </div>
        <div><Highlight className='json'>{JSON.stringify(rest, null, 4)}</Highlight></div>
        </Preview>
        
        
    </Container>
)


export default XDContainer;