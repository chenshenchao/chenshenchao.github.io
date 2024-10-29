import hljs from "highlight.js";
import _ from "lodash";
import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";

export const marked = new Marked(
    markedHighlight({
        langPrefix: 'hljs language-',
        highlight(code, lang) {
            const language = hljs.getLanguage(lang) ? lang : 'plaintext';
            return hljs.highlight(code, { language }).value;
        },
    })
);

export const getArchiveTitle = (content: string) => {
    const titleEnd = content.indexOf('\n');
    const title = titleEnd > 0 ? _.trim(content.substring(0, titleEnd), ' #') : '';
    return title.replace(/<.+?>/g, '');
}

export const loadArchive = async (url: string) => {
    const response = await fetch(url);
    const text = await response.text();
    return await marked.parse(text);
}
