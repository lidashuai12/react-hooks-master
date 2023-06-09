import React from 'react';
import { CapsuleChart } from '@jiaminghi/data-view-react';

export default function UserIdentityCategory(props) {
  const config = {
    // 单位
    unit: '（人）',
    showValue: false,
    data: [],
    ...props.userIdentityCategory
  }
  return (
    <div>
      {props.userIdentityCategory ? (
        <CapsuleChart
          config={config}
          style={{
            width: '5.85rem',
            height: '2.625rem',
          }}
        />
      ) : (
        ''
      )}
    </div>
  )
}
