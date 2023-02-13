import { Site } from "./site";
import { SiteBar } from "./sitebar";


export class App {
    constructor(model){
        this.model = model
    }


    init(){
        const site = new Site('#site');

        site.render(this.model)

        const updateCallBack = newBlock => {
            this.model.push(newBlock)
            site.render(this.model)

        }

        new SiteBar('#panel', updateCallBack)
    }
}