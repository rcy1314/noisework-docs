import { Plugin } from 'prettier';

declare const plugin: Plugin<any> & {
    name: string;
};

export { plugin as default };
