import {
    validatePost
} from "./../js/post.js";
import {
    exportAllDeclaration
} from "@babel/types";

describe("validatePost", () => {
    it("deberia retornar false si es un string vacio adentro del textArea", () => {
        exportAllDeclaration(validatePost("")).toBe(false);
    })
})