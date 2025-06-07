export class Config {
    constructor(setup) {
        const settings = {};
        const configurator = {
            set: (key, value) => {
                settings[key] = value;
            },
            setMultiple: (configObj) => {
                Object.assign(settings, configObj) // Merges the config Object into the existing Settings Obj
            }
        };
        setup(configurator);
        Object.freeze(settings); // Makes the settings object immutable
        this.get = (key) => settings[key]
        this.getAll = () => ({ ...settings });
    }
}