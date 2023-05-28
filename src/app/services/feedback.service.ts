import { Injectable } from '@angular/core';
import { Feedback } from '../models/feedback.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private FeedbackUrl : string ='https://localhost:7004/api/Feedback'
  FeedbackData : Feedback = new Feedback()
  FeedbackList : Feedback[]=[]
  constructor(private myHttp : HttpClient) { }


  InsertFeedback(){
    return this.myHttp.post(`${this.FeedbackUrl}`,this.FeedbackData)
  }
 
  GetFeedback() :Observable <Feedback[]>
  {
    return this.myHttp.get<Feedback[]>(this.FeedbackUrl)
  }


  DeleteFeedback(id:number){
    return this.myHttp.delete(`${this.FeedbackUrl}/${id}`)
  }
}
