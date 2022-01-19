import { Injectable } from '@angular/core';
import { Experience } from '../models/experience';

const EXPERIENCES: Experience[] = [
    {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Scelerisque mauris pellentesque pulvinar pellentesque. Id ornare arcu odio ut sem. Arcu bibendum at varius vel pharetra. Vitae auctor eu augue ut lectus arcu bibendum at. Diam quis enim lobortis scelerisque fermentum dui faucibus. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Id diam maecenas ultricies mi eget mauris pharetra. Nibh tellus molestie nunc non blandit massa. Viverra suspendisse potenti nullam ac. Quis risus sed vulputate odio ut. Pellentesque massa placerat duis ultricies lacus. Risus nec feugiat in fermentum posuere urna nec. Auctor eu augue ut lectus arcu bibendum at varius vel. Congue quisque egestas diam in arcu cursus euismod quis. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
        image: "",
        status: 1,
        enabler: 0,
    },
    {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Scelerisque mauris pellentesque pulvinar pellentesque. Id ornare arcu odio ut sem. Arcu bibendum at varius vel pharetra. Vitae auctor eu augue ut lectus arcu bibendum at. Diam quis enim lobortis scelerisque fermentum dui faucibus. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Id diam maecenas ultricies mi eget mauris pharetra. Nibh tellus molestie nunc non blandit massa. Viverra suspendisse potenti nullam ac. Quis risus sed vulputate odio ut. Pellentesque massa placerat duis ultricies lacus. Risus nec feugiat in fermentum posuere urna nec. Auctor eu augue ut lectus arcu bibendum at varius vel. Congue quisque egestas diam in arcu cursus euismod quis.",
        image: "",
        status: 1,
        enabler: 0,
    },
    {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Scelerisque mauris pellentesque pulvinar pellentesque. Id ornare arcu odio ut sem. Arcu bibendum at varius vel pharetra. Vitae auctor eu augue ut lectus arcu bibendum at. Diam quis enim lobortis scelerisque fermentum dui faucibus. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Id diam maecenas ultricies mi eget mauris pharetra. Nibh tellus molestie nunc non blandit massa. Viverra suspendisse potenti nullam ac. Quis risus sed vulputate odio ut. Pellentesque massa placerat duis ultricies lacus. Risus nec feugiat in fermentum posuere urna nec. Auctor eu augue ut lectus arcu bibendum at varius vel. Congue quisque egestas diam in arcu cursus euismod quis. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
        image: "",
        status: 1,
        enabler: 0,
    },
    {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Scelerisque mauris pellentesque pulvinar pellentesque. Id ornare arcu odio ut sem. Arcu bibendum at varius vel pharetra. Vitae auctor eu augue ut lectus arcu bibendum at. Diam quis enim lobortis scelerisque fermentum dui faucibus. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Id diam maecenas ultricies mi eget mauris pharetra. Nibh tellus molestie nunc non blandit massa. Viverra suspendisse potenti nullam ac. Quis risus sed vulputate odio ut. Pellentesque massa placerat duis ultricies lacus. Risus nec feugiat in fermentum posuere urna nec. Auctor eu augue ut lectus arcu bibendum at varius vel. Congue quisque egestas diam in arcu cursus euismod quis. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
        image: "",
        status: 1,
        enabler: 0,
    },
    {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Scelerisque mauris pellentesque pulvinar pellentesque. Id ornare arcu odio ut sem. Arcu bibendum at varius vel pharetra. Vitae auctor eu augue ut lectus arcu bibendum at. Diam quis enim lobortis scelerisque fermentum dui faucibus. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Id diam maecenas ultricies mi eget mauris pharetra. Nibh tellus molestie nunc non blandit massa. Viverra suspendisse potenti nullam ac. Quis risus sed vulputate odio ut. Pellentesque massa placerat duis ultricies lacus. Risus nec feugiat in fermentum posuere urna nec. Auctor eu augue ut lectus arcu bibendum at varius vel. Congue quisque egestas diam in arcu cursus euismod quis. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
        image: "",
        status: 0,
        enabler: 0,
    },
    {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Scelerisque mauris pellentesque pulvinar pellentesque. Id ornare arcu odio ut sem. Arcu bibendum at varius vel pharetra. Vitae auctor eu augue ut lectus arcu bibendum at. Diam quis enim lobortis scelerisque fermentum dui faucibus. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Id diam maecenas ultricies mi eget mauris pharetra. Nibh tellus molestie nunc non blandit massa. Viverra suspendisse potenti nullam ac. Quis risus sed vulputate odio ut. Pellentesque massa placerat duis ultricies lacus. Risus nec feugiat in fermentum posuere urna nec. Auctor eu augue ut lectus arcu bibendum at varius vel. Congue quisque egestas diam in arcu cursus euismod quis. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
        image: "",
        status: null,
        enabler: null,
    },
    {
        id: 0,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Scelerisque mauris pellentesque pulvinar pellentesque. Id ornare arcu odio ut sem. Arcu bibendum at varius vel pharetra. Vitae auctor eu augue ut lectus arcu bibendum at. Diam quis enim lobortis scelerisque fermentum dui faucibus. Aliquam eleifend mi in nulla. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Id diam maecenas ultricies mi eget mauris pharetra. Nibh tellus molestie nunc non blandit massa. Viverra suspendisse potenti nullam ac. Quis risus sed vulputate odio ut. Pellentesque massa placerat duis ultricies lacus. Risus nec feugiat in fermentum posuere urna nec. Auctor eu augue ut lectus arcu bibendum at varius vel. Congue quisque egestas diam in arcu cursus euismod quis. Velit ut tortor pretium viverra suspendisse potenti nullam ac tortor.",
        image: "",
        status: 0,
        enabler: 0,
    },
];

@Injectable({
    providedIn: 'root'
})
export class ExperienceService {

    experience: Experience = {
        id: null,
        text: "",
        image: null,
        status: null,
        enabler: null,
    }

    constructor() { }

    getExperiences(): Experience[] {
        return EXPERIENCES;
        //el backend va a validar si debe devolver todas o solo las habilitadas pára mostrar,
        //dependiendo de si el usuario está logeado o no
    }

    setExperience(e: Experience) {
        this.experience = e;
    }

    reject(id: number) {
        this.experience.id = id;
        this.experience.status = 0;
    }

    agree(id: number) {
        this.experience.id = id;
        this.experience.status = 1;
    }

    clear() {
        this.experience = {
            id: null,
            text: "",
            image: null,
            status: null,
            enabler: null,
        }
    }

    confirm() {
        if (this.experience.status == 1) {
            this.put();
        } else {
            this.delete();
        }
    }

    post() {
        console.log("post")//post
    }

    delete(): void {
        console.log("delete")
    }

    put(): void {
        console.log("put")
    }
}
