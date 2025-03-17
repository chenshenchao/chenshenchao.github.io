import { Subject } from "rxjs";

const subject = new Subject<number>();

subject.subscribe((v) => {
    console.log('loading', v);
});
