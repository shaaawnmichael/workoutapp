import { Component, OnInit } from '@angular/core';
import { ExerciseService } from '../exercise.service';
import { MyProfile, Profile, User } from '../models';
import { TokenStorageService } from '../_services/token-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  myprofile: MyProfile[] = []
  username!: User

  constructor(private exService : ExerciseService, private tokenSvc:TokenStorageService, private ActivatedRoute: ActivatedRoute) { }

   ngOnInit(): void {

    this.exService.getSecureProfile()
    .subscribe(data => {
      this.myprofile = data;
    })

/*     ngOnInit(): void {
    this.username = this.ActivatedRoute.snapshot.params['username']
    this.exService.getSecureProfile(this.username)
    .subscribe({
      next: (data) => {
        this.profile = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    }); */

    console.log('User  >>>', this.tokenSvc.getUser())
    console.log('Token  >>>', this.tokenSvc.getToken())
  }

}

