import { BaseParser } from './base-parser';
import { Model, Class, Metadata, Example, Method, Param, Platform, Prop, Language, Framework, Generator } from './model/index';

export class DocJSParser extends BaseParser {
        getMetadata(language: Language = 'javascript', generator: Generator = 'documentationJS', framework: Framework = 'react'): Metadata {
                return new Metadata(language, generator, framework);
        }
}













 // let classKind: ClassKind;
        // let props: Prop[] = [];
        // let examples: Example[] = [];
        // let methods: Method[] = [];
        // let name: string = '';
        // let description: string = '';
        // let shortDescription: string = '';
        // let platform: Platform = 'ios';
        // let classes: Class[] = [];

        // obj.forEach((item: any) => {
        //     if(item.hasOwnProperty('kind')) {
        //         classKind = item['kind']
        //         if(item.hasOwnProperty('properties')) {
        //             if(item['properties'].constructor == Object) {
        //                 props.push(item['properties']);
        //             } else if(item['properties'].constructor == Array) {
        //                 item['properties'].forEach((thing: any) => {props.push(thing)});
        //             }
        //         }
        //         if(item.hasOwnProperty('examples')) {
        //             if(item['examples'].constructor == Object) {
        //                 examples.push(item['examples']);
        //             } else if(item['examples'].constructor == Array) {
        //                 item['examples'].forEach((thing: any) => {examples.push(thing)});
        //             }
        //         }
        //         if(item.hasOwnProperty('methods')) {
        //             if(item['methods'].constructor == Object) {
        //                 methods.push(item['methods']);
        //             } else if(item['methods'].constructor == Array) {
        //                 item['methods'].forEach((thing: any) => {methods.push(thing)});
        //             }
        //         }
        //         if(item.hasOwnProperty('name')) {
        //             name = item['name'];
        //         }
        //         if(item.hasOwnProperty('description')) {
        //             description = item['description'];
        //         }
        //         if(item.hasOwnProperty('shortDescription')) {
        //             shortDescription = item['shortDescription'];
        //         }
        //         // console.log(name);
        //         let newClass: Class = new Class(classKind, platform, examples, props, 
        //         methods, name, shortDescription, description);
        //         classes.push(newClass);
        //     }
        // });

        // let output = this.createDocument(this.createMetadata(this.language, this.generator, this.framework), classes);
        // return output;