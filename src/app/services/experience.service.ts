import { HttpClient, HttpEvent, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { BASE_URL, ERROR_CLASS, SAVED_CHANGES, SAVED_EXPERIENCE, SAVE_ERROR, SUCCESS_CLASS } from 'src/environments/environment.prod';
import { FastNoteComponent } from '../common/fast-note/fast-note.component';
import { Experience } from '../models/experience';
import { TokenService } from './token.service';

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
const URL = BASE_URL + '/experiences';
const URL_ADMIN = URL + '/admin';

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
    image: File = new File([], "file");

    constructor(private http: HttpClient,
        private tknSvc: TokenService,
        private matDialog: MatDialog,) { }

    get(): Observable<Experience[]> {
        let url;
        if (this.tknSvc.getToken()) url = URL_ADMIN;
        else url = URL;
        return this.http.get<Experience[]>(url);
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

    setExperience(e: Experience, img: File) {
        this.experience = e;
        this.image = img;
    }

    ok() {
        this.post()
            .subscribe(r => {
                this.showResult(this.getSuccess(this.getSuccessMsg(false)));
            },
            err => {
                this.showResult(this.getError());
            });
    }

    /**
     * 
     * @returns {
       
      },
      err => {
      }
     */

    post(): Observable<HttpEvent<String>> {
        let data: FormData = new FormData;
        data.append('file', this.image);
        data.append('text', this.experience.text);

        const req = new HttpRequest('POST', URL, data, {
            reportProgress: true,
            responseType: 'text'
        })
        return this.http.request(req);
    }

    reject(id: number) {
        this.experience.id = id;
        this.experience.status = 0;
    }

    agree(id: number) {
        this.experience.id = id;
        this.experience.status = 1;
    }

    confirm() {
        if (this.experience.status == 1) {
            this.put()
                .subscribe(r => {
                    this.showResult(this.getFormatResponseString(r.toString(), this.getSuccessMsg(true)));
                })
        } else {
            this.delete()
                .subscribe(r => {
                    this.showResult(this.getFormatResponseString(r.toString(), this.getSuccessMsg(true)));
                })
        }
    }

    delete(): Observable<boolean> {
        return this.http.delete<boolean>(URL + '/' + this.experience.id);
    }

    put(): Observable<boolean> {
        return this.http.put<boolean>(URL + '/' + this.experience.id, this.experience);
    }


    showResult(result: any) {
        this.matDialog.open(FastNoteComponent, {
            data: {
                response: result.response,
                class: result.className
            }
        })
    }

    getSuccessMsg(admin: boolean): String {
        if (admin) {
            return SAVED_CHANGES;
        }
        return SAVED_EXPERIENCE;
    }

    getFormatResponseEvent(result: HttpEvent<String>, success: String): any {
        if (result.type.toString() == "true") {
            return {
                response: success,
                className: SUCCESS_CLASS,
            }
        }
        else {
            return {
                response: SAVE_ERROR,
                className: ERROR_CLASS,
            }
        }
    }

    getFormatResponseString(result: String, success: String): any {
        if (result == "true") {
            return this.getSuccess(success);
        }
        else {
            return this.getError();
        }
    }

    getSuccess(success: String): any {
        return {
            response: success,
            className: SUCCESS_CLASS,
        }
    }

    getError(): any {
        return {
            response: SAVE_ERROR,
            className: ERROR_CLASS,
        }
    }
}
