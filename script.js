const comment_template = {
    user: "John Doe",
    image: "./images/person-circle.svg",
    comment: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, autem. Culpa natus illo repellendus optio voluptate, beatae possimus voluptatem harum debitis itaque. Aliquam nostrum est eaque impedit quidem pariatur quibusdam.",
    create_date: new Date(),
    modified_date: new Date(),
    reactions: {
        like: false,
        dislike: false,
        show_comments: false,
        heart: false,
        report: false,
        deleted: false,
    },
};

const comments = [];

comments.push(comment_template);

function agregar_comentario(event) {
    event.preventDefault();
    let comment = "";
    comment = document.getElementById("input-comment").value;

    if (comment.replaceAll(" ", "") === "") {
        document.getElementById("input-comment").value = "";
        return;
    }

    document.getElementById("input-comment").value = "";
    
    comment_template.user = "User-name";
    comment_template.image = "./images/person-circle.svg";
    comment_template.comment = comment;
    comment_template.create_date = new Date();
    comment_template.modified_date = new Date();
    const temporal_reactions = {};
    for (const key in comment_template.reactions) {
        temporal_reactions[key] = false;
    }
    comment_template.reactions = temporal_reactions;

    const temporal_object = {};

    for (const key in comment_template) {
        temporal_object[key] = comment_template[key];
    }

    comments.push(temporal_object);

    show_comments();
}

function react_comment(index,key,value,event) {
    if(event.type == "change") {
        value = event.target.checked;
    }
    comments[index].reactions[key] = value;
    console.log(comments)
    show_comments();
}

function show_comments() {

    document.getElementById("cont-comments").innerHTML = "";

    comments.forEach(
        (element, index) => {
            if(!index) return;
            document.getElementById("cont-comments").innerHTML += `
            <div class="comment${element.reactions.deleted?" comment-deleted":""}${element.reactions.report?" comment-reported":""}" id="cm${index}">
                        <div class="user-comment">
                            <img src="${element.image}" alt="User image">
                            <a href="#" class="name-comment">@${element.user}</a>
                            <label class="menu-comment">
                                <input type="checkbox">
                                <ul>
                                    <li>Modificar</li>
                                    <li onclick="${element.reactions.deleted?
                                        "react_comment(".concat(index,",'deleted',",false,',event)"',">Restaurar"):
                                        "react_comment(".concat(index,",'deleted',",true,',event)"',">Borrar")}</li>
                                    <li onclick="${element.reactions.report?
                                        "react_comment(".concat(index,",'report',",false,',event)"',">Liberar"):
                                        "react_comment(".concat(index,",'report',",true,',event)"',">Reportar")}</li>
                                </ul>
                            </label>
                        </div>
                        <p class="text-comment">
                            ${element.comment}
                        </p>
                        <p class="reaction-comment">
                            <label>
                                <input type="checkbox" ${element.reactions.like?"checked":""}
                                onchange="${"react_comment(".concat(index,",'like',",null,',event')})">
                            </label>
                            <label>
                                <input type="checkbox" ${element.reactions.dislike?"checked":""}
                                onchange="${"react_comment(".concat(index,",'dislike',",null,',event')})">
                            </label>
                            <label>
                                <input type="checkbox" ${element.reactions.show_comments?"checked":""}
                                onchange="${"react_comment(".concat(index,",'show_comments',",null,',event')})">
                            </label>
                            <label>
                                <input type="checkbox" ${element.reactions.heart?"checked":""}
                                onchange="${"react_comment(".concat(index,",'heart',",null,',event')})">
                            </label>
                        </p>
                    </div>`
        }
    );
}