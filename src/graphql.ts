/* tslint:disable */
export class Photo {
    id?: number;
    name?: string;
    description?: string;
    filename?: string;
    views?: number;
    isPublish?: boolean;
}

export abstract class IQuery {
    abstract all(): Photo[] | Promise<Photo[]>;

    abstract one(): Photo | Promise<Photo>;

    abstract temp__(): boolean | Promise<boolean>;
}
