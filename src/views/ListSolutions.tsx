import React from "react";
import styled from "styled-components";
import {List, Tag} from "antd";

const data = [
    {
        title: "Map array",
        tags: ["array"]
    },
    {
        title: "Compare two arrays",
        tags: ["array"]
    },
    {
        title: "Array of string",
        tags: ["array", "string"]
    },
    {
        title: "Array of objects",
        tags: ["array", "object"]
    }
];

const TagsContainer = styled.div`
    padding-left: 20px;
    filter: opacity(0.7);
`;

interface ListSolutionsProps {
    setDisplayedItem: (item) => void;
}

const ListSolutions: React.FC<ListSolutionsProps> = ({setDisplayedItem}) => {
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
                                        <Tag key={tag} color="cyan">
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

export default ListSolutions;
