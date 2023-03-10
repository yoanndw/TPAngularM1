export class Pokemon {
    types: string[];

    constructor(public id?: string, public name?: string) {
        this.types = [];
    }

    initFromJson(data: any) {
        this.name = data.name;
        this.id = data.id;
        this.types = data.types.map((t: any) => t.type.name);
    }
}
