import {Button} from "antd";
import React from "react";
import {UpOutlined} from "@ant-design/icons";

interface SolutionsProps {
    setDisplayedItem: (item) => void;
}

const Solution: React.FC<SolutionsProps> = ({setDisplayedItem}) => {
    return (
        <div>
            <div>
                <Button type="dashed" icon={<UpOutlined />} onClick={() => setDisplayedItem(null)}>
                    List
                </Button>
            </div>
            Solution
        </div>
    );
};

export default Solution;
