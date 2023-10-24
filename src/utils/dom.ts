export declare class Position {
    x: number;
    y: number;
}

export const getPosition = (element: HTMLElement): Position => {
    const result = {
        x: element.offsetLeft - element.scrollLeft,
        y: element.offsetTop - element.scrollTop,
    };
    if (element.offsetParent) {
        const p = getPosition(element.offsetParent as HTMLElement);
        result.x += p.x;
        result.y += p.y;
    }
    return result;
};