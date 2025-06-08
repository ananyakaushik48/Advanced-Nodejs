import { writeFileSync, existsSync, readFileSync } from 'fs';
class LocalStorage {
    constructor() {
        if (existsSync('localStorage.json')) {
            console.log('Loading existing localStorage...');
            var txt = readFileSync('localStorage.json');
            this.items = JSON.parse(txt);
            console.log('localStorage loaded:', this.items);
        }
        else {
            this.items = {};
        }
    }
    length() {
        return Object.keys(this.items).length;
    }

    getItem(key) {
        return this.items[key];
    }

    setItem(key, value) {
        this.items[key] = value;
        // Simulate writing to a file
        writeFileSync('localStorage.json', JSON.stringify(this.items), (error) => {
            if (error) {
                console.error('Error writing to localStorage:', error);
            }
        });
    }
}

export default new LocalStorage();