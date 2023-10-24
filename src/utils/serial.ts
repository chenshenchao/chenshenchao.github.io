import { isPlainObject, isSet, isString } from "lodash";
import { StateTree } from "pinia";

const TAG_SET = '#set';

const deserializeNode = (node: StateTree) => {
    if (isString(node) && node.startsWith(TAG_SET)) {
        const list = JSON.parse(node.substring(TAG_SET.length));
        return new Set(list);
    }
    else if (isPlainObject(node)) {
        for (const key in node) {
            node[key] = deserializeNode(node[key]);
        }
    }
    return node;
};

export const deserialize = (text: string) => {
    const tree = JSON.parse(text);
    return deserializeNode(tree);
};

const serializeNode = (node: StateTree) => {
    if (isSet(node)) {
        return TAG_SET + JSON.stringify(Array.from(node));
    } else if (isPlainObject(node)) {
        const newNode: StateTree = {};
        for (const key in node) {
            newNode[key] = serializeNode(node[key]);
        }
        return newNode;
    }
    return node;
};

export const serialize = (tree: StateTree) => {
    const newTree = serializeNode(tree);
    return JSON.stringify(newTree);
};