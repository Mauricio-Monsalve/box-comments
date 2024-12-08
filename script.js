const comment_template = {
    user: "John Doe",
    image: "./images/person-circle.svg",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, autem. Culpa natus illo repellendus optio voluptate, beatae possimus voluptatem harum debitis itaque. Aliquam nostrum est eaque impedit quidem pariatur quibusdam.",
    create_date: new Date(),
    modified_date: new Date(),
    rections: {
        like: false,
        dislike: false,
        show_comments: false,
        heart: false,
        report: false,
        deleted: false,
    },
};

const comments = [];

function agregar_comentario(event) {
    event.preventDefault();
}