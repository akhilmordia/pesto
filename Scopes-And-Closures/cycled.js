/**
 * Created by akhil on 9/1/20.
 */

class Cycled {
    constructor(fixture) {
        this.fixture = fixture;
        this._index = 0;
    }

    set index(newIndex) {
        this._index = newIndex > -1 && newIndex < this.fixture.length ? newIndex : this._index;
    }

    get index() {
        return this._index;
    }

    current() {
        return this.fixture[this._index];
    }

    setCursorToNext() {
        this._index = this.fixture[this._index + 1] ? this._index + 1 : 0;
    }

    next() {
        this.setCursorToNext();
        return this.current();
    }

    *[Symbol.iterator]() {
        let count = this.fixture.length;
        while (count > 0) {
            yield this.current();
            this.setCursorToNext();
            count--;
        }
    }
}


module.exports = Cycled;