export default class Layout {
    constructor(name) {
        this.id = this.generateUniqueId();
        this.name = name;
        this.visibility = true;
        this.endless = false;
        this.highlightDots = false;
        this.dots = [];
    }

    generateUniqueId() {
        var uniqueIdMask = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx',
            uniqueId = '',
            i, letter;
        for(i = 0; i < uniqueIdMask.length; i++) {
            letter = uniqueIdMask.substr(i, 1);
            if (letter == 'x') {
                uniqueId += (parseInt(Math.random() * 16)).toString(16);
            } else if (letter == 'y') {
                uniqueId += ( 8 + parseInt(Math.random() * 4)).toString(16);
            } else {
                uniqueId += letter;
            }
        }
        return uniqueId;
    }
}