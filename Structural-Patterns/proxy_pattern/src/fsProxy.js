class FS_Proxy{
    constructor(fs_real) {
        this.fs = fs_real;
    }
    readFile(path, format, callback) {
        if(!path.match(/\.txt$|.TXT$/)) {
            console.error("Invalid file type. Only .txt files are allowed.");
            return callback(new Error("Can only read .txt files"));
        }

        this.fs.readFile(path, format, (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
                return callback(err);
            }
            console.log("File read successfully:", path);
            callback(null, data);
        });
    }
}

export default FS_Proxy;