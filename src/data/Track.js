export function Possition({ latitude, longitude }) {
    this.latitude = latitude;
    this.longitude = longitude;
}

export function Point({ possition, elevation, time }) {
    this.possition = possition;
    this.elevation = elevation;
    this.time = time;
}

export function Track({ title, date, list }) {
    this.title = title;
    this.date = date;
    this.list = list;
}