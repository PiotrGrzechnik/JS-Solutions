import React, {useState} from "react";
import styled from "styled-components";
import {Layout} from "antd";

import ListSolutions from "./ListSolutions";
import Solution from "./Solution";

const {Content} = Layout;

const ContentStyled = styled(Content)`
    padding: 24px;
    margin: 0;
    min-height: 280px;
`;

const ContentSolutions: React.FC = () => {
    const [displayedItem, setDisplayedItem] = useState(null);

    return (
        <ContentStyled className="site-layout-background">
            {displayedItem ? (
                <Solution setDisplayedItem={setDisplayedItem} />
            ) : (
                <ListSolutions setDisplayedItem={setDisplayedItem} />
            )}
        </ContentStyled>
    );
};
export default ContentSolutions;
