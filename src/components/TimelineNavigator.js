import { React, useEffect, useState } from 'react';

import Link from '@mui/material/Link';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import NowService from '../service/NowService';
import TimelineService from '../service/TimelineService';

const nowService = new NowService();
const timelineService = new TimelineService();

function TimelineNavigator() {
  const [ measure, setMeasure ] = useState(null);
  const [ items, setItems ] = useState([]);

  useEffect(() => {
    if (measure === null) {
      loadItems();
    }
  }, [ items ]);

  const loadItems = () => {
    const nextMeasure = timelineService.getNextMeasure(measure);
    const newItems = timelineService.getAll(nextMeasure);
    setItems(newItems);
    setMeasure(nextMeasure);
  }

  const handleClick = (active) => {
    active && loadItems();
  }

  return (
    <Timeline position="alternate">
    {items && items.map((item,  index) => {
      const active = nowService.isActive(measure, index+1);
      return (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color={ active ?  "success" : "grey"}
               variant={ active ?  "filled" : "outlined"}
               style={{ cursor: active ?  "pointer" : "none" }}
               onClick={() => handleClick(active) } />
            { index !== items.length-1 ? <TimelineConnector /> : "" }
          </TimelineSeparator>
          <TimelineContent>
          { active && <Link href="#" onClick={() => handleClick(active) }>{(index + 1) + '. ' + item.name}</Link>}
          { !active && (index + 1) + '. ' + item.name }
          </TimelineContent>
        </TimelineItem>
      );
    })}
    </Timeline>
  );
}

export default TimelineNavigator;
