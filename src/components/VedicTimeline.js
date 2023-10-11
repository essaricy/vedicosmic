import { React, useEffect, useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import TimelineService from '../service/TimelineService';

const timelineService = new TimelineService();

function VedicTimeline() {
  const [ measure, setMeasure ] = useState(null);
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    setMeasure(timelineService.getNextMeasure(measure));
    setItems(timelineService.getAll(measure));
  }, [ items ]);

  return (
    <Timeline position="alternate">
    {items && items.map((item,  index) => {
      return (
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color={ item.active ?  "success" : "grey"}
               variant={ item.active ?  "filled" : "outlined"} />
            { index !== items.length-1 ? <TimelineConnector /> : "" }
          </TimelineSeparator>
          <TimelineContent>{(index + 1) + '. ' + item.name}</TimelineContent>
        </TimelineItem>
      );
    })}
    </Timeline>
  );
}

export default VedicTimeline;
