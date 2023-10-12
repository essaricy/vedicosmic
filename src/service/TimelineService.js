import * as MeasureConstants from '../constants/MeasureConstants';

const kalpas = require('../data/Kalpas.json');
const manvantharas = require('../data/Manvantharas.json');

const timelines = {
    KALPA: kalpas,
    MANVANTARA: manvantharas
};

const measureOrder = [
    MeasureConstants.KALPA,
    MeasureConstants.MANVANTARA,
    MeasureConstants.MAHAYUGA,
    MeasureConstants.YUGA,
    MeasureConstants.SAMVATSARA,
    MeasureConstants.MASA,
    MeasureConstants.THIDI,
    MeasureConstants.GADIYA,
    MeasureConstants.KSHANA
];

class TimelineService {

    getAll(type) {
        console.log("returning timelines[" + type + "]: ", timelines[type]);
        return timelines[type];
    }

    getNextMeasure(current) {
        if (current === null) {
            return "KALPA";
        }
        let nextIndex = measureOrder.findIndex(measure => measure === current) + 1;
        return measureOrder[nextIndex];
    }
}

export default TimelineService;
