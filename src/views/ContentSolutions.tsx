import React, {useState} from "react";
import styled from "styled-components";
import {Layout} from "antd";

import SolutionsList from "./SolutionsList";
import Solution from "./Solution";
import {ListPath} from "src/types";

const {Content} = Layout;

const ContentStyled = styled(Content)`
    padding: 24px;
    margin: 0;
    min-height: 280px;
`;

interface ContentSolutionsProps {
    listPath: ListPath;
}

const ContentSolutions: React.FC<ContentSolutionsProps> = ({listPath}) => {
    const [displayedItem, setDisplayedItem] = useState(null);

    return (
        <ContentStyled className="site-layout-background">
            {displayedItem ? (
                <Solution setDisplayedItem={setDisplayedItem} />
            ) : (
                <SolutionsList listPath={listPath} setDisplayedItem={setDisplayedItem} />
            )}
        </ContentStyled>
    );
};
export default ContentSolutions;
