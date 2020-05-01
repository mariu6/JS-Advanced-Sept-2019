class Forum {

    constructor() {
        this.users = [];
        this.questions = [];
        this.id = 1;
    }

    register(username, password, repeatPassword, email) {
        if (username === "" || password === "" || repeatPassword === "" || email === "") {
            throw new Error("Input can not be empty");
        }
        if (password !== repeatPassword) {
            throw new Error("Passwords do not match");
        }
        if (this.users.filter(e => e.username === username).length > 0 || this.users.filter(e => e.email === email).length > 0) {
            throw new Error("This user already exists!");
        }
        this.users.push({ username, password, email });
        return `${username} with ${email} was registered successfully!`;
    }

    login(username, password) {
        if (this.users.filter(e => e.username === username).length === 0) {
            throw new Error("There is no such user");
        }
        if (this.users.filter(e => e.username === username && e.password === password).length === 1) {
            this.users.filter(e => e.username === username)[0]._isLoggedIn = true;
            return "Hello! You have logged in successfully";
        }
    }

    logout(username, password) {
        if (this.users.filter(e => e.username === username).length === 0) {
            throw new Error("There is no such user");
        }
        if (this.users.filter(e => e.username === username && e.password === password).length === 1) {
            this.users.filter(e => e.username === username)[0]._isLoggedIn = false;
            return "You have logged out successfully";
        }
    }

    postQuestion(username, question) {
        if (this.users.filter(e => e.username === username).length === 0 || this.users.filter(e => e.username === username)[0]._isLoggedIn === false) {
            throw new Error("You should be logged in to post questions");
        }
        if (question === "") {
            throw new Error("Invalid question");
        }
        let questionId = this.id;
        this.questions.push({ questionId, username, question });
        this.id++;
        return "Your question has been posted successfully";
    }

    postAnswer(username, questionId, answer) {
        if (this.users.filter(e => e.username === username).length === 0 || this.users.filter(e => e.username === username)[0]._isLoggedIn === false) {
            throw new Error("You should be logged in to post answers");
        }
        if (answer === "") {
            throw new Error("Invalid answer");
        }
        if (this.id < questionId || questionId < 1) {
            throw new Error("There is no such question");
        }
        if (!this.questions.filter(e => e.questionId === questionId)[0].hasOwnProperty("answer")) {
            this.questions.filter(e => e.questionId === questionId)[0].answer = [];
        }
        this.questions.filter(e => e.questionId === questionId)[0].answer.push({ username, answer });
        return "Your answer has been posted successfully";
    }

    showQuestions() {
        let print = "";
        this.questions.map(quest => {
            print += `Question ${quest.questionId} by ${quest.username}: ${quest.question}\n`;
            quest.answer.map(x => print += `---${x.username}: ${x.answer}\n`);
        });
        return print.trim();
    }
}

// let test = new Forum;
// console.log(test);
// test.register("me", "123", "123", "az@me.com");
// console.log(test);
// // test.register("me", "123", "123", "az@me.com");
// // console.log(test);
// // test.login("az","123");
// // test.login("me", "az");     // нищо не става
// console.log(test.login("me", "123"));
// console.log(test);
// console.log(test.logout("me", "123"));
// console.log(test);


// // const Forum = result;
// let forum = new Forum();

// forum.register('Michael', '123', '123', 'michael@abv.bg');
// forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
// forum.login('Michael', '123');
// forum.login('Stoyan', '123ab7');

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan', 1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael', 2, "How old is she?");
forum.postAnswer('Michael', 2, "Tell us how tall she is.");
// console.log(forum.questions);
console.log(forum.showQuestions());
