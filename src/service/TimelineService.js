const kalpas = require('../data/Kalpas.json');

const timelines = {
    KALPA: kalpas
};

const measures = [ "KALPA", "MANVANTARA", "MAHAYUGA", "YUGA", "SAMVATSARA", "MASA", "THIDI", "GADIYA", "KSHANA" ];

class TimelineService {

    getAll(type="KALPA") {
        return timelines[type];
    }

    getNextMeasure(current=null) {
        if (current === null) {
            return "KALPA";
        }
        return measures.find(measure => measure === current);
    }
}

export default TimelineService;
