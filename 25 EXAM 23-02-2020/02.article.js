class Article {
    _comments = [];
    _likes = [];
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this.comments;
        this.likes;
    }
    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`
        }
    }
    set likes(username) {  // не знам какво да сложа, иска ми сет със гет-а. А аз ползвам like() за да сетна...
        this._likes;
    }
    like(username) {
        if (this.creator === username) {
            throw new Error("You can't like your own articles!");
        } else if (this._likes.includes(username)) {
            throw new Error("You can't like the same article twice!");
        } else {
             this._likes.push(username);
             return `${username} liked ${this.title}!`
        }
    }
    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this article!");
        } else {
            this._likes.splice(this._likes.indexOf(username), 1);
            return `${username} disliked ${this.title}`;
        }
    }
    comment(username, content, id) {
        if (id === undefined || id > this._comments.length) {
            this._comments.push({
                "id": this._comments.length + 1,
                "username": username,
                "content": content,
                "replies": []
            });
            return `${username} commented on ${this.title}`
        } else {
            this._comments[id - 1]["replies"].push({
                "id": id + ((1 + this._comments[id - 1]["replies"].length) * .1),
                "username": username,
                "content": content
            });
            return `You replied successfully`;
        }
    }
    toString(sortingType) {
        let output = `Title: ${this.title}\n` + `Creator: ${this.creator}\n` + `Likes: ${this._likes.length}\n` + `Comments:\n`;
        this.sort(this._comments, sortingType);
        this._comments.map(x => {
            output += `-- ${x.id}. ${x.username}: ${x.content}\n`;
            if (x.replies.length > 0) {
                this.sort(x.replies, sortingType);
                x.replies.map(y => {
                    output += `--- ${y.id}. ${y.username}: ${y.content}\n`;
                })
            }
        })
        return output.slice(0,-1);
    }

    sort(comments, sortingType){
        if (sortingType === "asc") {
            return comments.sort((a,b) => a["id"] - b["id"]);
        } else if (sortingType === "desc") {
            return comments.sort((a,b) => b["id"] - a["id"]);
        } else {
            return comments.sort((a,b) => a["username"].localeCompare(b["username"]));
        }
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
art.like("John1");
console.log(art.like("John2"));
// art.dislike("Anny");
console.log(art.likes);
console.log(art.dislike("John"));
console.log(art.likes);
console.log(art.comment("Sammy", "Some Content"));
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
console.log(art.toString('asc'));
console.log(art);

// John likes this article!
// My Article has 0 likes
// Ammy commented on My Article
// You replied successfully

// Title: My Article
// Creator: Anny
// Likes: 0
// Comments:
// -- 2. Ammy: New Content
// -- 3. Jessy: Nice :)
// -- 1. Sammy: Some Content
// --- 1.2. SAmmy: Reply@
// --- 1.1. Zane: Reply
