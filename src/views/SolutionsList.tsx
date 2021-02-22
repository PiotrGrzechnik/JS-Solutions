import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {List, Tag} from "antd";
import {ListPath, Solution} from "src/types";
import {getTagColor} from "src/utils/getTagColor";
import {getSolutionsList} from "src/utils/getSolutionsList";

const ItemTitle = styled.div`
    cursor: pointer;
`;
const TagsContainer = styled.div`
    padding-left: 20px;
    filter: opacity(0.5);
`;

interface SolutionsListProps {
    listPath: ListPath;
    setDisplayedItem: (item) => void;
}

const SolutionsList: React.FC<SolutionsListProps> = ({listPath, setDisplayedItem}) => {
    const [list, setList] = useState<Solution[]>([]);

    useEffect(() => {
        getSolutionsList(listPath).then((data) => setList(data.solutions));
    }, [listPath]);

    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item, i) => (
                    <List.Item>
                        <List.Item.Meta
                            title={
                                <ItemTitle onClick={() => setDisplayedItem(item)}>
                                    <span>{++i}</span> - {item.title}
                                </ItemTitle>
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
