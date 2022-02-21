import { Injectable } from '@angular/core';
import { Tip } from '../models/tip';

const TIPS: Tip[] = [
    {
        id: 1,
        title: "",
        image: "../../../assets/tips/tip1.png",
        text: "TIP 1",
    },
    {
        id: 2,
        title: "",
        image: "../../../assets/tips/tip2.png",
        text: "TIP 2",
    },
    {
        id: 3,
        title: "",
        image: "../../../assets/tips/tip3.png",
        text: "TIP 3",
    },
    {
        id: 4,
        title: "",
        image: "../../../assets/tips/tip4.png",
        text: "TIP 4",
    },
    {
        id: 5,
        title: "",
        image: "../../../assets/tips/tip5.png",
        text: "TIP 5",
    },
    {
        id: 6,
        title: "",
        image: "../../../assets/tips/tip6.png",
        text: "TIP 6",
    },
];


@Injectable({
    providedIn: 'root'
})
export class TipService {
    
    constructor() { }
    
    getTips(): Tip[] {
        return TIPS;
    }
    
    getTip(id: number): Tip {
        let tip = TIPS.find(t => t.id === id);
        if (typeof(tip) != "undefined") return tip;
        else return {id: 0, title:"", image: "", text: "404 not found"};
    }
   
    post(tip: Tip) {
        console.log("post", tip);
    }
}
