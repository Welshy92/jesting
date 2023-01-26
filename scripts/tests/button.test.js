/**
 * @jest-environment jsdom
 */

const { TestScheduler } = require("jest");
const buttonClick = require ("../button");

beforeEach ( () => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM Tests", () => {
    test("Expects p content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("Heading is present", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});