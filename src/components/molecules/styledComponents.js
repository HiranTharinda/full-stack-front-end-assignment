import styled from "styled-components";

export const PageWrapper = styled.div`
    display:flex;
    flex-direction:column;
    min-width: 50%;
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
`;


export const PageMobileWrapper = styled.div`
    display:flex;
    flex-direction:column;
    min-width: 50%;
    overflow: hidden;
    padding: 0 0 32px;
    margin: 48px auto 0;
    width: 50%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
`;

export const CardVerticalWrapper = styled.div`
    overflow: hidden;
    padding: 50 50 auto 50px;
    margin: 10px auto 0;
    width: 90%;
    height: 20% 
    border-radius: 5px;
    align-content: space-between;
`;

export const CardVerticalOuterWrapper = styled.div`
    overflow: hidden;
    padding: 50 50 auto 50px;
    margin: 10px auto 0;
    width: 90%;
    height: 20% 
    border-radius: 5px;
    align-content: space-between;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
`;

export const CardHorizontalWrapper = styled.div`
    overflow: hidden;
    padding: 50 50 auto 20px;
    margin: 5px auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
    border-radius: 5px;
    width:95%;
`;

export const CardMobileHorizontalWrapper = styled.div`
    overflow: hidden;
    padding: 50 50 auto 20px;
    margin: 10px 10px 10px 10px;
    display: flex;
    justify-content: left;
    align-items: left;
    border-radius: 5px;
    width:95%;
`;

export const CardImage = styled.img`
    overflow: hidden;
    padding: 50 50 auto 50px;
    margin: 10px 10px 10px 10px;
    width: 20%;
    height: 90% 
    border-radius: 5px;
    position: relative;
    display: inline-block;
`;

export const CardHeaderWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;
`;

export const LogoImage = styled.img`
    min-width: 100px;
    overflow: hidden;
    margin: 30px 0 0 0;
    width: 30%;
    height: 90% 
    border-radius: 5px;
    position: relative;
    display: inline-block;
`;

export const PageHeader = styled.header`
    margin: 10px 30px 30px 30px;
    font-size: 18px;
    font-weight: bold;
    text-align: left;
    flex:1 1 auto;
`;

export const PageMobileHeader = styled.header`
    margin: 10px 30px 30px 30px;
    font-size: 12px;
    font-weight: bold;
    text-align: left;
    flex:1 1 auto;
`;

export const CardHeader = styled.header`
    font-size: 24px;
    font-weight: bold;
    text-align: left;
    margin: 10px 10px 10px 10px;
`;

export const CardRankHeader = styled.header`
    font-size: 40px;
    font-weight: bold;
    text-align: left;
    margin: 10px 10px 10px 10px;
`;

export const CardAuthor = styled.header`
    font-size: 14px;
    font-weight: 50;
    color: grey;
    text-align: left;
    margin: 10px 10px 10px 10px;
`;

export const CardDescription = styled.header`
    font-size: 14px;
    font-weight: 200;
    text-align: left;
    margin: 10px 10px 10px 10px;
`;

export const CardButton = styled.button`
    width: 35%;
    padding: 6px 0;
    margin: 10px 10px 10px 10px;
    font-size: 14px;
    font-weight: 200;
    color: #fff;
    background-color: black;
    border: 0;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1);

    &:hover {
        box-shadow: 0 15px 15px rgba(0, 0, 0, 0.16);
        transform: translate(0, -5px);
    }
`;

