import { randomString } from "../../shared/dist/utils";

class Person {
    id: string;
    name: string;
    constructor() {
        this.id = randomString();
    }
}cd