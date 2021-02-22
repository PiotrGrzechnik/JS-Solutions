import {Button, Card} from "antd";
import React from "react";
import {OrderedListOutlined} from "@ant-design/icons";
import {Solution} from "src/types";

interface SolutionsProps {
    item: Solution;
    setDisplayedItem: (item) => void;
}

const Solution: React.FC<SolutionsProps> = ({item, setDisplayedItem}) => {
    return (
        <div>
            <div>
                <Button
                    type="text"
                    icon={<OrderedListOutlined />}
                    onClick={() => setDisplayedItem(null)}
                >
                    List
                </Button>
            </div>
            <Card title={item.title}>
                <p>{item.code}</p>
            </Card>
        </div>
    );
};

export default Solution;
