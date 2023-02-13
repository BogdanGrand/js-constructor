import { block } from "../utils"
import { TextBlock, TitleBlock, ImgBlock } from "./block"


export class SiteBar {
    constructor(selector, updateCallBack){
        this.$el = document.querySelector(selector)
        this.update = updateCallBack
        this.init()
    }

    init(){
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template(){
        return [
            block('title', 'Enter text'),
            block('text','Enter text'),
            block('img', 'Enter src')
        ].join('')
    }

    add (event){
        event.preventDefault()


        const type = event.target.name
        const value = event.target.value.value
        const styles = event.target.styles.value


        let newBlock = ''
            
        switch (type) {
            case 'text':
                newBlock = new TextBlock(value, {styles})
                break;
        
            case 'title':
                
                newBlock = new TitleBlock(value, {styles})
                break;
        
            case 'img':
                newBlock = new ImgBlock(value, {styles})
                break;
        
            default:
                break;
        }
            this.update(newBlock)
            event.target.value.value = '' 
            event.target.styles.value = ''   
        
    }

}
