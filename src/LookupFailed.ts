export class LookupFailed {
    readonly kind : string = "lookupFailed";
    constructor(public reason: string) { }
}

