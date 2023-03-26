import React from 'react';

// sparklines component import
import { Sparklines, SparklinesCurve  } from 'react-sparklines';

const SparkLinesCard = ({headingData,innerTextData,themeColor,mainSparkData,limit,cardID}) => {
  return (
    <div className={`top-card-analytics-box top-card-analytics-box-${themeColor} top-card-analytics-box-${cardID} pr-center`}>
        <div className={`top-card-box-txt-${themeColor}`}>
            <strong>{headingData}</strong>
            <p>{innerTextData}</p>
        </div>
        <Sparklines data={[...mainSparkData]} limit={limit} width={40} height={20} margin={2}>
            <SparklinesCurve  />
        </Sparklines>    
  </div>
  )
}

export default SparkLinesCard