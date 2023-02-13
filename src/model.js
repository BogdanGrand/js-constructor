import img from './img/logo.png'
import { TitleBlock, ImgBlock, ColumsBlock, TextBlock } from './classes/block.js'
const text = ''

export const model = [
    new TitleBlock ('JS websites builder', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'text-align': 'center'
        }
    }),
    new ImgBlock ( img, {
        imgStyle:{
            width: '350px'
        },
        styles:{
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center',
        },
        alt: 'this image'
    }),
    new TextBlock ( text, {
        styles:{
            background: 'linear-gradient(to left, #f2994a, #f2c94c)',
            padding: '1rem',
            'font-weight': 'bold'
        }
    }),
    new ColumsBlock( [
        'Pure java script application',
        'Without using frameworks',
        'Working with SOLID and OOP principles in javascript',
    ],{
        styles:{
            background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
            padding: '2rem',
            color: '#fff',
            'font-weight': 'bold'
        }
    })
    
    
   
]
