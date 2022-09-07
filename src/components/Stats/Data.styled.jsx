import styled from '@emotion/styled'

export const Title = styled.h2`
text-align:center;
`;

export const StatContainer = styled.div`
display:flex;
justify-content: center;
`;

const customBgColor = (props) => {
    switch (props.typeLabel) {
        case ".docx":
            return "lightsteelblue";
        case ".pdf":
            return "lightpink";
        case ".mp3":
            return "mediumseagreen";
        case ".psd":
            return "mediumorchid";
        case ".jpeg":
            return "burlywood"
        default:
            return "#000";
    }
}

export const ItemContainer = styled.div`
display:flex;
margin-left:10px;
width:60px;
height:60px;
text-align:center;
justify-content: center;
align-items:center;
margin-bottom:10px;
border-radius:5px;
box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.08),
0px 2px 2px rgba(0, 0, 0, 0.12);
background-color:${customBgColor}
`;

// export const SpanText = styled.span`
// background-color:green;
// `

