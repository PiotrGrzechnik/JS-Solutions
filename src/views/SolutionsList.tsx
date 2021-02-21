import React from "react";
import styled from "styled-components";
import {List, Tag} from "antd";
import {getTagColor} from "src/helpers/getTagColor";
import {JSType} from "src/types/subcategory";
import {ListPath} from "src/types";
import {getSolutionsList} from "src/helpers/getSolutionsList";

const data = [
    {
        title: "Map array",
        tags: [JSType.ARRAY]
    },
    {
        title: "Compare two arrays",
        tags: [JSType.ARRAY, JSType.NULL, JSType.UNDEFINED]
    },
    {
        title: "Array of string",
        tags: [JSType.ARRAY, JSType.STRING, JSType.BOOLEAN]
    },
    {
        title: "Array of objects",
        tags: [JSType.ARRAY, JSType.OBJECT, JSType.NUMBER, JSType.UNDEFINED]
    }
];

const TagsContainer = styled.div`
    padding-left: 20px;
    filter: opacity(0.5);
`;

interface SolutionsListProps {
    listPath: ListPath;
    setDisplayedItem: (item) => void;
}

const SolutionsList: React.FC<SolutionsListProps> = ({listPath, setDisplayedItem}) => {
    getSolutionsList(listPath);

    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item, i) => (
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <div onClick={() => setDisplayedItem(item)}>
                                    <span>{++i}</span> - {item.title}
                                </div>
                            }
                            description={
                                <TagsContainer>
                                    {item.tags?.map((tag) => (
                                        <Tag key={tag} color={getTagColor(tag)}>
                                            {tag}
                                        </Tag>
                                    ))}
                                </TagsContainer>
                            }
                        />
                    </List.Item>
                )}
            />
        </div>
    );
};

export default SolutionsList;
