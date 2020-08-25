import { Track, Possition, Point } from "../data/Track";
import GPXBuilder from './GPXService';

const streamToGPX = (stream, config) => {
    const { latlng, altitude, timer_time } = stream;
    const { date, title } = config;

    const list = [];

    const time = date.getTime();
    latlng.forEach((pos, i) => {
        const possition = new Possition({
            latitude: pos[0],
            longitude: pos[1]
        });

        const point = new Point({
            possition,
            elevation: altitude[i],
            time: time + timer_time[i] * 1000
        })

        list.push(point);
    });

    const track = new Track({ title, date, list });
    const gpx = GPXBuilder.generateGPX({ track })

    return gpx;
}

export {
    streamToGPX
}