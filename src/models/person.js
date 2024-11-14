class Person {

    _id;

    avatar;
    name;
    comment;

    constructor(id, name, avatar, comment = "") {
        this._id = id;
        this.name = name;
        this.avatar = avatar;
        this.comment = comment;
    }

    async getAvatar() { 
        const { default: src } = await import('./../../data/avatars/users/'+this.avatar);
        return src;
    }
    setAvatar(filename) {
        this.avatar = filename;
    }

    getId() { return this._id; }
    setId(id) { this._id = id; }

    getName() { return this.name; }
    setName(name) { this.name = name; }

    getComment() { return this.comment; }
    setComment(comment) { this.comment = comment; }

}

class People 
{
    static async getAll(options = {}) {
        const result = [];
        await fetch('./../../data/people.json')
            .then(res => res.json())
            .then(data => {
                data.users.forEach(({id, name, comment, avatar}) => {
                    let person = new Person(id, name, avatar, comment);
                    result.push(person);
                });

                // Shuffles the returning array.
                if (options?.shuffle) {
                    this._shuffle(result);
                }

            });
        return result;
    }

    static _shuffle(array) {
        for (let i = array.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

}

export { Person, People }