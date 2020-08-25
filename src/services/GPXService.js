import XMLBuilder from 'xmlbuilder';

const generateGPX = ({ track }) => {
    var gpx = XMLBuilder.create('gpx');

    var trk = gpx.ele('trk');
    var name = trk.ele('name');
    name.raw(track.title);

    var trkseg = trk.ele('trkseg');
    track.list.forEach(point => {
        var trkpt = trkseg.ele('trkpt');
        
        const possition = point.possition;
        trkpt.att('lat', possition.latitude);
        trkpt.att('lon', possition.longitude);

        var ele = trkpt.ele('ele');
        ele.raw(point.elevation)

        var time = trkpt.ele('time');
        time.raw(new Date(point.time).toISOString());
    })

    return gpx.end({ pretty: true });
}

export default {
    generateGPX
}