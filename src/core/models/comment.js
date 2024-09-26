import ExceptionHandler from "../exceptionHandler.js";

class Comment {

    author;
    text;
    date;

    avatar = undefined;

    constructor(author, text, date, avatar = undefined) {
        this.author = author;
        this.text = text;
        this.date = date;
        this.avatar = avatar;
    }

}

class Comments {

     static async getAll(limit = 9) {

        let comments = [];

        return fetch(`public/discord-data.json`)
            .then(res => res.json())
            .then(data => {

                if (!data || !data.comments) {
                    throw new Error("No data found!");
                }

                let fetchedComments = 0;
                data.comments.forEach((comment) => {
                    if (fetchedComments < limit) {
                        fetchedComments++;
                        comments.push(new Comment(comment.author, comment.comment, comment.date, comment.avatar));
                    }
                });

                return comments;

            })
            .catch(err => {
                ExceptionHandler.handle(500, err);
            });

    }

}

export { Comment, Comments }