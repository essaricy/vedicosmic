import { React, useEffect, useState } from 'react';

import Link from '@mui/material/Link';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

//import Restore from '@mui/icons-material/Restore';
//import AccessTime from '@mui/icons-material/AccessTime';
//import Update from '@mui/icons-material/Update';


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

  const handleClick = (current) => {
    current && loadItems();
  }

  return (
    <Timeline position="alternate">
    {items && items.map((item,  index) => {
      const currentNumber = nowService.getCurrent(measure);
      const current = currentNumber === index+1;
      const past = currentNumber > index+1;
      return (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot color={ past ? "grey" : current ? "success" : "grey" }
               variant={ past ? "filled" : current ? "filled" : "outlined" }
               style={{ cursor: current ?  "pointer" : "none" }}
               onClick={() => handleClick(current) } />
            { index !== items.length-1 ? <TimelineConnector /> : "" }
          </TimelineSeparator>
          <TimelineContent>
          { current && <Link href="#" onClick={() => handleClick(current) }>{(index + 1) + '. ' + item.name}</Link>}
          { !current && (index + 1) + '. ' + item.name }
          </TimelineContent>
        </TimelineItem>
      );
    })}
    </Timeline>
  );
}

export default TimelineNavigator;
