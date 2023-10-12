import * as MeasureConstants from '../constants/MeasureConstants';

class NowService {

    get() {
        return {
            kalpa: 1,
            manvanthara: 7,
            mahayuga: 28,
            yuga: 4,
            samvatsara: 5125,
            masa: 9
        };
    }

    isCurrent(measure, number) {
        const now = this.get();
        return ((measure === MeasureConstants.KALPA && now.kalpa === number)
            || (measure === MeasureConstants.MANVANTARA && now.manvanthara === number)
            || (measure === MeasureConstants.MAHAYUGA && now.mahayuga === number)
            || (measure === MeasureConstants.YUGA && now.yuga === number)
            || (measure === MeasureConstants.SAMVATSARA && now.samvatsara === number)
            || (measure === MeasureConstants.MASA && now.masa === number));
    }

    getCurrent(measure) {
        const now = this.get();
        if (measure === MeasureConstants.KALPA) {
            return now.kalpa;
        } else if (measure === MeasureConstants.MANVANTARA) {
            return now.manvanthara;
        } else if (measure === MeasureConstants.MAHAYUGA) {
            return now.mahayuga;
        } else if (measure === MeasureConstants.YUGA) {
            return now.yuga;
        } else if (measure === MeasureConstants.SAMVATSARA) {
            return now.samvatsara;
        } else if (measure === MeasureConstants.MASA) {
            return now.masa;
        }
    }
}

export default NowService;
