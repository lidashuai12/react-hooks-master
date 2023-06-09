import React, { useState } from "react";
import { userOptions } from "./options";
import { ScrollBoard } from "@jiaminghi/data-view-react";

export default function UserSituation(props) {
  const [config] = useState({
    // 表头背景色
    headerBGC: "#443dc5",
    // 奇数行背景色
    oddRowBGC: "#09184F",
    // 偶数行背景色
    evenRowBGC: "#070C34",
    // 行号
    index: true,
    // 行号表头
    indexHeader: "序号",
    // 宽度
    columnWidth: [50, 150, 300],
    // 对其方式
    align: ["center"],
    // 表行数
    rowNum: 10,
  });
  const configObj = {
    ...config,
    ...userOptions(props.userSitua),
  };
  return (
    <div>
      {props.userSitua ? (
        <ScrollBoard
          config={configObj}
          style={{
            width: "5.475rem",
            height: "6.875rem",
          }}
        ></ScrollBoard>
      ) : (
        ""
      )}
    </div>
  );
}
