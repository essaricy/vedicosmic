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

    isActive(measure, number) {
        const now = this.get();
        return ((measure === MeasureConstants.KALPA && now.kalpa === number)
            || (measure === MeasureConstants.MANVANTARA && now.manvanthara === number)
            || (measure === MeasureConstants.MAHAYUGA && now.mahayuga === number)
            || (measure === MeasureConstants.YUGA && now.yuga === number)
            || (measure === MeasureConstants.SAMVATSARA && now.samvatsara === number)
            || (measure === MeasureConstants.MASA && now.masa === number));
    }
}

export default NowService;
