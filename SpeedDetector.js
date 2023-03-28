function SpeedDetector(speed) {
    if (speed < 70) {
        return "Ok"
    } else {
        let Points = parseInt((speed - 70) / 5);
        console.log(Points);
        if (Points < 12) {
            return `Points: ` + Points;
        } else {
            return "License suspended";
        }
    }
}