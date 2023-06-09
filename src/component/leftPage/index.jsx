import React from "react";
import { BorderBox12, BorderBox13 } from "@jiaminghi/data-view-react";
import { LeftPage, LeftTopBox, LeftBottomBox } from "./style";
import { ModuleTitle } from "../../style/globalStyledSet";
import TrafficSituation from "./charts/TrafficSituation";
import UserSituation from "./charts/UserSituation";
import { data } from "./charts/options";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function useLeftPage() {
  const [ipData, setIpData] = useState({
    header: ["用户", "时间", "状态"],
    data: [],
  });
  useEffect(() => {
    const temp = { ...ipData };
    temp.data = [
      //   ["用户1", "2020-11-11 12:00", "在线"],
      //   ["用户2", "2020-11-11 12:00", "离线"],
      //   ["用户3", "2020-11-11 12:00", "在线"],
      //   ["用户4", "2020-11-11 12:00", "在线"],
      //   ["用户5", "2020-11-11 12:00", "在线"],
      //   ["用户6", "2020-11-11 12:00", "离线"],
      //   ["用户7", "2020-11-11 12:00", "在线"],
      //   ["用户8", "2020-11-11 12:00", "在线"],
      //   ["用户9", "2020-11-11 12:00", "离线"],
      //   ["用户11", "2020-11-11 12:00", "离线"],
      //   ["用户12", "2020-11-11 12:00", "离线"],
      //   ["用户13", "2020-11-11 12:00", "离线"],
    ];
    axios.get("http://localhost:8100/sdn/host/listHost").then((res) => {
      const data = res.data.data.hostList;
      for (let item of data) {
        let arr = [item.ip, item.mac, item.stat];
        temp.data.push(arr);
      }

      setIpData(temp);
    });
  }, []);

  return (
    <LeftPage>
      {/* 顶部图表 */}
      <LeftTopBox>
        <BorderBox12 className="left-top-borderBox12">
          <div className="left-top">
            <ModuleTitle>
              <i className="iconfont">&#xe78f;</i>
              <span>今日流量态势</span>
            </ModuleTitle>
            <div className="title-dis">
              <span>
                平均接纳次数(小时):
                <span className="title-dis-keyword">
                  {data.accessFrequency}次
                </span>
              </span>
              <span>
                流量峰值:
                <span className="title-dis-keyword">{data.peakFlow}M</span>
              </span>
            </div>
            {/* 图表 */}
            <TrafficSituation
              trafficSitua={data.trafficSitua}
            ></TrafficSituation>
          </div>
        </BorderBox12>
      </LeftTopBox>

      {/* 底部图表 */}
      <LeftBottomBox>
        <BorderBox13 className="left-bottom-borderBox13">
          <div className="left-bottom">
            <ModuleTitle>
              <i className="iconfont">&#xe88e;</i>
              <span>用户数据状态</span>
            </ModuleTitle>
            {/* 图表 */}
            <UserSituation userSitua={ipData}></UserSituation>
          </div>
        </BorderBox13>
      </LeftBottomBox>
    </LeftPage>
  );
}
