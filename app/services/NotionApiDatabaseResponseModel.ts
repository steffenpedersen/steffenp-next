export class NotionApiDatabaseResponse {
    public object: string;
    public id: string;
    public created_time: string;
    public last_edited_time: string;
    public cover?: any;
    public icon?: any;
    public parent: Parent;
    public archived: boolean;
    public properties: Properties;
    public url: string;
}

class Properties {
    public Date: [Object];
    public Tags: [Object];
    public Name: [Object];
}

class Parent {
    public type: string;
    public database_id: string;
}
