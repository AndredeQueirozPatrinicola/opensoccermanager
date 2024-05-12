import { Handler } from "../types/Handler";
import { Route } from "../types/Route";


function customStringify(obj, replacer = null, indent = 2) {
    const seen = new WeakSet();
    return JSON.stringify(obj, function(key, value) {
        if (typeof value === "object" && value !== null) {
            if (seen.has(value)) {
                return "[Circular Reference]";
            }
            seen.add(value);
        }
        if (replacer) {
            return replacer(key, value);
        }
        return value;
    }, indent);
}

class Dispatcher {
    private handlers: { [event: string]: Handler[] } = {};

    public addHandler(event: string, func: Function, args: any[] = []): void {
        if (!(event in this.handlers)) {
            this.handlers[event] = [];
        }
        // console.log(`ARGS>>>> ${customStringify(args)}`)
        this.handlers[event].push({ function: func, args: args });
    }

    public async dispatch(event: {query:string}): Promise<any> {
        // console.log(this.handlers)
        // console.log(event)
        const tasks = this.handlers[event.query];
        // console.log(`tasks >> ` + customStringify(tasks));
        if (tasks) {
            for (const task of tasks) {
                const func = task.function;
                const args = task.args;
                console.log("???")
                console.log(customStringify(args))
                console.log("???")
                return await func({dataSource: args[0], select: args[1]});
            }
        }
    }
}


export const createRoutesDispatcher = (routes: Route[]): Dispatcher => {
    const dispatcher = new Dispatcher();
    routes.map((value, _) => {
        console.log(`<><><><><> ${value.handler.args[0]} ${value.handler.args[1]}`)
        dispatcher.addHandler(
            value.path, 
            value.handler.function,
            value.handler.args
        )
    })
    return dispatcher;
}