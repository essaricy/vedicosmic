import * as MeasureConstants from '../constants/MeasureConstants';

const kalpas = require('../data/Kalpas.json');
const manvantharas = require('../data/Manvantharas.json');
const yugas = require('../data/Yugas.json');

const timelines = {
    KALPA: kalpas,
    MANVANTARA: manvantharas,
    YUGA: yugas
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
        if (type === MeasureConstants.MAHAYUGA) {
            return [...Array(70)].map((_, i) => {
                return { name: "Mahayuga " + (i+1)};
            });
        } else if (type === MeasureConstants.SAMVATSARA
            || type === MeasureConstants.MASA
            || type === MeasureConstants.THIDI
            || type === MeasureConstants.GADIYA
            || type === MeasureConstants.KSHANA) {
                return timelines[MeasureConstants.YUGA];
        }
        return timelines[type];
    }

    getNextMeasure(current) {
        if (current === null) {
            return MeasureConstants.KALPA;
        }
        let nextIndex = measureOrder.findIndex(measure => measure === current) + 1;
        return measureOrder[nextIndex];
    }
}

export default TimelineService;
