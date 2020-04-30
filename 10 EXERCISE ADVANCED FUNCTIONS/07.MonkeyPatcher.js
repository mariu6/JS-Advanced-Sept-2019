// const { expect } = require("chai");

function result(action) {
    const map = {
        "upvote": () => this.upvotes += 1,
        "downvote": () => this.downvotes += 1,
        "score": () => {
            let reportedUps = this.upvotes;
            let reportedDowns = this.downvotes;
            let rating = reportedUps - reportedDowns;
            let trend = ((this.upvotes / (this.upvotes + this.downvotes) > 0.66) && (this.upvotes + this.downvotes >= 10)) ?
                "hot" : ((this.upvotes - this.downvotes >= 0) && (this.upvotes + this.downvotes >= 100)) ?
                    "controversial" : ((this.upvotes - this.downvotes < 0) && (this.upvotes + this.downvotes >= 10)) ?
                        "unpopular" : "new";
            if (this.upvotes + this.downvotes > 50) {
                let obfuscator = (this.upvotes >= this.downvotes) ? Math.ceil(this.upvotes * 0.25) : Math.ceil(this.downvotes * 0.25);
                reportedUps = this.upvotes + obfuscator;
                reportedDowns = this.downvotes + obfuscator;
            }
            return [reportedUps, reportedDowns, rating, trend];
        }
    }
    return map[action]();
}



// var forumPost = {
//     id: '3',
//     author: 'emil',
//     content: 'wazaaaaa',
//     upvotes: 100,
//     downvotes: 100
// };

// result.call(forumPost, 'upvote');
// result.call(forumPost, 'downvote');

// var answer = result.call(forumPost, 'score');
// var expected = [127, 127, 0, 'controversial'];
// compareScore(expected, answer);
// // 50 Downvotes
// for (let i = 0; i < 50; i++) {
//     result.call(forumPost, 'downvote');
// }
// answer = result.call(forumPost, 'score');
// expected = [139, 189, -50, 'unpopular'];
// compareScore(expected, answer);

// function compareScore(expected, answer) {
//     expect(expected[0]).to.equal(answer[0], 'Incorrect number of upvotes');
//     expect(expected[1]).to.equal(answer[1], 'Incorrect number of downvotes');
//     expect(expected[2]).to.equal(answer[2], 'Incorrect score');
//     expect(expected[3]).to.equal(answer[3], 'Incorrect rating');
// }





let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};


solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');         // (executed 50 times)

solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)
solution.call(post, 'downvote');         // (executed 50 times)

score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']
console.log(score);