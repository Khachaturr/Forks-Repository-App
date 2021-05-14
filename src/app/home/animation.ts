import { animate, style, transition, trigger } from '@angular/animations';


export const animat = trigger('flyInOut', [
    transition('void => *', [
        style({
            transform: 'translateY(-300%)',
            backgroundColor: "red",
        }),
        animate(3000)
        
    ]),
])