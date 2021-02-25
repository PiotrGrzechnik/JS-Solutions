import React from "react";
import {
  CodepenOutlined,
  GlobalOutlined,
  SecurityScanOutlined,
  createFromIconfontCN
} from "@ant-design/icons";
import { Category, JSType } from "src/types";

const IconFont = createFromIconfontCN({
  scriptUrl: ["//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js"]
});

export const menuSections = [
  {
      category: Category.JAVASCRIPT,
      icon: <IconFont type="icon-javascript" />,
      subcategories: [JSType.ARRAY, JSType.OBJECT, JSType.STRING, JSType.NUMBER]
  },
  {
      category: Category.ALGORITHMS,
      icon: <CodepenOutlined />,
      subcategories: []
  },
  {
      category: Category.REACT,
      icon: <GlobalOutlined />,
      subcategories: []
  },
  {
      category: Category.TESTS,
      icon: <SecurityScanOutlined />,
      subcategories: []
  }
];